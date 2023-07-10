import appleAuth, {
  AppleAuthRequestScope,
  AppleAuthRequestOperation,
} from '@invertase/react-native-apple-authentication';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

import * as authAPI from './authClient';
import {ErrorCode} from '@configs/ErrorCode';

const handleSuccessfulLogin = (user, accountCreated) => {
  return new Promise(resolve => {
    resolve({user: {...user}});
  });
};

export const loginWithEmailAndPassword = (email, password) => {
  return new Promise(function (resolve, _reject) {
    authAPI.loginWithEmailAndPassword(email, password).then(response => {
      if (!response.error) {
        handleSuccessfulLogin({...response.user}, false).then(res => {
          resolve({user: res.user});
        });
      } else {
        resolve({error: response.error});
      }
    });
  });
};

export const sendPasswordResetEmail = email => {
  return new Promise(resolve => {
    authAPI.sendPasswordResetEmail(email);
    resolve();
  });
};

export const logout = user => {
  authAPI.logout();
};

export const loginOrSignUpWithApple = appConfig => {
  return new Promise(async (resolve, _reject) => {
    try {
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: AppleAuthRequestOperation.LOGIN,
        requestedScopes: [
          AppleAuthRequestScope.EMAIL,
          AppleAuthRequestScope.FULL_NAME,
        ],
      });
      const {identityToken, nonce} = appleAuthRequestResponse;
      authAPI
        .loginWithApple(identityToken, nonce, appConfig.appIdentifier)
        .then(async response => {
          if (response?.user) {
            const newResponse = {
              user: {...response.user},
              accountCreated: response.accountCreated,
            };
            handleSuccessfulLogin(
              newResponse.user,
              response.accountCreated,
            ).then(res => {
              // resolve(response);
              resolve({
                ...res,
              });
            });
          } else {
            resolve({error: ErrorCode.appleAuthFailed});
          }
        });
    } catch (error) {
      console.log(error);
      resolve({error: ErrorCode.appleAuthFailed});
    }
  });
};

export const loginOrSignUpWithGoogle = appConfig => {
  GoogleSignin.configure(appConfig);
  return new Promise(async (resolve, _reject) => {
    try {
      const {idToken} = await GoogleSignin.signIn();
      authAPI
        .loginWithGoogle(idToken, appConfig.appIdentifier)
        .then(async response => {
          if (response?.user) {
            const newResponse = {
              user: {...response.user},
              accountCreated: response.accountCreated,
            };
            handleSuccessfulLogin(
              newResponse.user,
              response.accountCreated,
            ).then(res => {
              // resolve(response);
              resolve({
                ...res,
              });
            });
          } else {
            resolve({error: ErrorCode.googleSigninFailed});
          }
        });
    } catch (error) {
      resolve({
        error: ErrorCode.googleSigninFailed,
      });
    }
  });
};

export const loginOrSignUpWithFacebook = async appIdentifier => {
  try {
    // Đăng nhập với Facebook
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);
    if (result.isCancelled) {
      throw new Error('Người dùng hủy đăng nhập');
    }
    // Lấy thông tin access token của Facebook
    const data = await AccessToken.getCurrentAccessToken();
    if (!data) {
      throw new Error('Không thể lấy thông tin truy cập của Facebook');
    }
    // Tạo credential từ access token
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken,
    );
    // Đăng nhập vào Firebase sử dụng credential
    const userCredential = await auth().signInWithCredential(
      facebookCredential,
    );
    // Kiểm tra xem người dùng đã đăng ký trước đó chưa
    const {uid, displayName, email} = userCredential.user;
    const userRef = firestore().collection('users').doc(uid);
    const userDoc = await userRef.get();
    if (!userDoc.exists) {
      // Nếu chưa đăng ký, tạo tài khoản mới
      await userRef.set({
        displayName,
        email,
        appIdentifier,
        createdAt: firestore.FieldValue.serverTimestamp(),
      });
    }
    // Trả về thông tin userCredential và userDoc
    return {userCredential, userDoc};
  } catch (error) {
    console.error('Đăng nhập với Facebook thất bại: ', error);
    throw error;
  }
};

const authManager = {};

authManager.logout = logout;
authManager.loginOrSignUpWithApple = loginOrSignUpWithApple;
authManager.sendPasswordResetEmail = sendPasswordResetEmail;
authManager.loginOrSignUpWithGoogle = loginOrSignUpWithGoogle;
authManager.loginWithEmailAndPassword = loginWithEmailAndPassword;
authManager.loginOrSignUpWithFacebook = loginOrSignUpWithFacebook;

export default authManager;
