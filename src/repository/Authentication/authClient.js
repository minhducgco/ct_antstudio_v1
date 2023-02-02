import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import {ErrorCode} from '@configs/ErrorCode';
import {getUnixTimeStamp} from '@utils/index';

const usersRef = firestore().collection('users');

export const loginWithEmailAndPassword = async (email, password) => {
  return new Promise(function (resolve, reject) {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        resolve({user: response});
      })
      .catch(error => {
        console.log('error:', error);
        var errorCode = ErrorCode.serverError;
        switch (error.code) {
          case 'auth/wrong-password':
            errorCode = ErrorCode.invalidPassword;
            break;
          case 'auth/network-request-failed':
            errorCode = ErrorCode.serverError;
            break;
          case 'auth/user-not-found':
            errorCode = ErrorCode.noUser;
            break;
          default:
            errorCode = ErrorCode.serverError;
        }
        resolve({error: errorCode});
      });
  });
};

export const sendPasswordResetEmail = email => {
  auth().sendPasswordResetEmail(email);
};

const signInWithCredential = (credential, appIdentifier, socialAuthType) => {
  return new Promise((resolve, _reject) => {
    auth()
      .signInWithCredential(credential)
      .then(response => {
        const isNewUser = response.additionalUserInfo.isNewUser;
        const {first_name, last_name, family_name, given_name} =
          response.additionalUserInfo.profile;
        const {uid, email, phoneNumber, photoURL} = response.user;
        const defaultProfilePhotoURL =
          'https://www.iosapptemplates.com/wp-content/uploads/2019/06/empty-avatar.jpg';

        if (isNewUser) {
          const timestamp = getUnixTimeStamp();
          const userData = {
            id: uid,
            email: email || '',
            firstName: first_name || given_name || socialAuthType || '',
            lastName: last_name || family_name || 'User',
            phone: phoneNumber || '',
            profilePictureURL: photoURL || defaultProfilePhotoURL,
            userID: uid,
            appIdentifier,
            createdAt: timestamp,
            ...(socialAuthType ? {socialAuthType} : {}),
          };
          usersRef
            .doc(uid)
            .set(userData)
            .then(() => {
              resolve({
                user: {...userData, id: uid, userID: uid},
                accountCreated: true,
              });
            });
        }
        usersRef
          .doc(uid)
          .get()
          .then(document => {
            const userData = document.data();
            resolve({
              user: {...userData, id: uid, userID: uid},
              accountCreated: false,
            });
          });
      })
      .catch(_error => {
        console.log(_error);
        resolve({error: ErrorCode.serverError});
      });
  });
};

export const loginWithApple = (identityToken, nonce, appIdentifier) => {
  const appleCredential = auth.AppleAuthProvider.credential(
    identityToken,
    nonce,
  );
  return new Promise((resolve, _reject) => {
    signInWithCredential(appleCredential, appIdentifier, 'Apple').then(
      response => {
        resolve(response);
      },
    );
  });
};

export const loginWithFacebook = (accessToken, appIdentifier) => {
  const credential = auth.FacebookAuthProvider.credential(accessToken);
  return new Promise((resolve, _reject) => {
    signInWithCredential(credential, appIdentifier, 'Facebook').then(
      response => {
        resolve(response);
      },
    );
  });
};

export const loginWithGoogle = (idToken, appIdentifier) => {
  const credential = auth.GoogleAuthProvider.credential(idToken);
  return new Promise((resolve, _reject) => {
    signInWithCredential(credential, appIdentifier, 'Google').then(response => {
      resolve(response);
    });
  });
};

export const checkUniqueUsername = username => {
  return new Promise(resolve => {
    if (!username) {
      resolve();
    }
    usersRef
      .where('username', '==', username?.toLowerCase())
      .get()
      .then(querySnapshot => {
        if (querySnapshot?.docs.length <= 0) {
          resolve({isUnique: true});
        } else {
          resolve({taken: true});
        }
      })
      .catch(error => {
        console.log(error);
      });
  });
};

export const registerWithEmail = (userDetails, appIdentifier) => {
  const {
    email,
    firstName,
    lastName,
    username,
    password,
    phone,
    profilePictureURL,
    location,
    signUpLocation,
  } = userDetails;
  return new Promise(function (resolve, _reject) {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async response => {
        const usernameResponse = await checkUniqueUsername(username);
        if (usernameResponse?.taken) {
          auth().currentUser.delete();
          return resolve({error: ErrorCode.usernameInUse});
        }
        const timestamp = getUnixTimeStamp();
        const uid = response.user.uid;
        const data = {
          id: uid,
          userID: uid, // legacy reasons
          email,
          firstName: firstName || '',
          lastName: lastName || '',
          username: (username || '')?.toLowerCase(),
          phone: phone || '',
          profilePictureURL,
          location: location || '',
          signUpLocation: signUpLocation || '',
          appIdentifier,
          createdAt: timestamp,
        };
        usersRef
          .doc(uid)
          .set(data)
          .then(() => {
            resolve({user: data});
          })
          .catch(error => {
            resolve({error: ErrorCode.serverError});
          });
      })
      .catch(error => {
        console.log('_error:', error);
        var errorCode = ErrorCode.serverError;
        if (error.code === 'auth/email-already-in-use') {
          errorCode = ErrorCode.emailInUse;
        }
        resolve({error: errorCode});
      });
  });
};
