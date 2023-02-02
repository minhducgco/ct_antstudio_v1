import appleAuth, {
  AppleAuthRequestScope,
  AppleAuthRequestOperation,
} from '@invertase/react-native-apple-authentication';
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
  GoogleSignin.configure({
    offlineAccess: true,
    webClientId: appConfig.webClientId,
    scopes: ['profile', 'email'],
  });
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
      console.log(error);
      resolve({
        error: ErrorCode.googleSigninFailed,
      });
    }
  });
};

// const loginOrSignUpWithFacebook = appConfig => {
//   Facebook.initializeAsync(appConfig.facebookIdentifier);
//   return new Promise(async (resolve, _reject) => {
//     try {
//       const {type, token, expires, permissions, declinedPermissions} =
//         await Facebook.logInWithReadPermissionsAsync({
//           permissions: ['public_profile', 'email'],
//         });

//       if (type === 'success') {
//         // Get the user's name using Facebook's Graph API
//         // const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
//         // Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
//         authAPI
//           .loginWithFacebook(token, appConfig.appIdentifier)
//           .then(async response => {
//             if (response?.user) {
//               const newResponse = {
//                 user: {...response.user},
//                 accountCreated: response.accountCreated,
//               };
//               handleSuccessfulLogin(
//                 newResponse.user,
//                 response.accountCreated,
//               ).then(response => {
//                 // resolve(response);
//                 resolve({
//                   ...response,
//                 });
//               });
//             } else {
//               resolve({error: ErrorCode.fbAuthFailed});
//             }
//           });
//       } else {
//         resolve({error: ErrorCode.fbAuthCancelled});
//       }
//     } catch (error) {
//       resolve({error: ErrorCode.fbAuthFailed});
//     }
//   });
// };

const authManager = {};

authManager.logout = logout;
authManager.loginOrSignUpWithApple = loginOrSignUpWithApple;
authManager.sendPasswordResetEmail = sendPasswordResetEmail;
authManager.loginOrSignUpWithGoogle = loginOrSignUpWithGoogle;
authManager.loginWithEmailAndPassword = loginWithEmailAndPassword;

export default authManager;
