import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getFirebaseToken() {
  return new Promise((handleSuccess, handleError) => {
    messaging()
      .getToken()
      .then(
        res => {
          handleSuccess(res);
        },
        err => {
          handleError(err);
        },
      );
  });
}

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  if (enabled) {
    AsyncStorage.setItem('version_autheStatus1', authStatus.toString());
  }
}

export async function backgroundListenMessage() {
  await messaging().setBackgroundMessageHandler(async remoteMessage => {
    //Chạy mở app khi kill app
    if (remoteMessage) {
      AsyncStorage.setItem('@version_Key', remoteMessage.data.version);
    } else {
      console.log('no version key');
    }
  });
}

export async function onInitialMessage() {
  //Chạy mở app khi kill app
  await messaging()
    .getInitialNotification()
    .then(async remoteMessage => {
      if (remoteMessage) {
        AsyncStorage.setItem(
          '@save_data_notification',
          `${JSON.stringify(remoteMessage)}`,
        );
      } else {
        if (__DEV__) {
          console.log('No data notification');
        }
      }
    });
}

export async function openMessage() {
  /**
   * Mở thông báo từ background
   */
  await messaging().onNotificationOpenedApp(async remoteMessage => {
    if (remoteMessage) {
      AsyncStorage.setItem(
        '@save_data_notification',
        `${JSON.stringify(remoteMessage)}`,
      );
    } else {
      if (__DEV__) {
        console.log('No data notification');
      }
    }
  });
}

export async function subscribes() {
  /**
   * Xử lý thông báo nền
   */
  await messaging().onMessage(remoteMessage => {
    if (remoteMessage) {
      AsyncStorage.setItem('@version_Key', remoteMessage.data.version);
      AsyncStorage.setItem('@build_Number', remoteMessage.data.build_number);
    } else {
      console.log('no version key');
    }
  });
}
