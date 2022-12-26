import AsyncStorage from '@react-native-community/async-storage';

const USER_KEY = '@USER_KEY';
const ACCESS_TOKEN = '@ACCESS_TOKEN';
const FIREBASE_TOKEN = 'FIREBASE_TOKEN';
const PUBLIC_USER = '@PUBLIC_USER';
const APPLE_USER = '@APPLE_USER';

var Database = {};

export const setAccessToken = async ({value}) => {
  try {
    await AsyncStorage.setItem(ACCESS_TOKEN, value);
  } catch (error) {
    console.log('setAccessToken: ', error);
  }
};

export const getAccessToken = async () => {
  let accessToken = null;
  try {
    accessToken = await AsyncStorage.getItem(ACCESS_TOKEN);
  } catch (err) {
    console.log('getAccessToken: ', err);
  }
  return accessToken;
};

export const setUserLogin = async ({value}) => {
  let user = null;
  try {
    const jsonValue = JSON.stringify(value);
    user = await AsyncStorage.setItem(USER_KEY, jsonValue);
    console.log(user);
  } catch (error) {
    console.log('setUserLogin: ', error);
  }
};

export const getUserLogin = async () => {
  let user = null;
  try {
    user = await AsyncStorage.getItem(USER_KEY);
  } catch (error) {
    console.log('getUserLogin: ', error);
  }
  return JSON.parse(user);
};

export const removeUserLogin = async () => {
  await AsyncStorage.multiRemove([USER_KEY, ACCESS_TOKEN, PUBLIC_USER]);
};

//
export const setFirebaseToken = async ({value}) => {
  try {
    await AsyncStorage.setItem(FIREBASE_TOKEN, value);
  } catch (error) {
    console.log('setFirebaseToken: ', error);
  }
};

export const getFirebaseToken = async () => {
  let token = null;
  try {
    token = await AsyncStorage.getItem(FIREBASE_TOKEN);
  } catch (err) {
    console.log('getFirebaseToken: ', err);
  }
  return token;
};
export const setPublicUser = async name => {
  try {
    await AsyncStorage.setItem(PUBLIC_USER, name);
  } catch (error) {
    console.log('setPublicUser: ', error);
  }
};
export const getPublicUser = async () => {
  let publicUser = '';
  try {
    publicUser = await AsyncStorage.getItem(PUBLIC_USER);
  } catch (err) {
    console.log('getPublicUser: ', err);
  }
  return publicUser;
};

export const setAppleUser = async value => {
  let appleData = null;
  try {
    appleData = await AsyncStorage.setItem(APPLE_USER, JSON.stringify(value));
  } catch (error) {
    if (__DEV__) {
      console.log('Can not set Apple User: ', error);
    }
  }
  return appleData;
};

export const getAppleUser = async () => {
  let appleUser = null;
  try {
    appleUser = await AsyncStorage.getItem(APPLE_USER);
    return appleUser != null ? JSON.parse(appleUser) : appleUser;
  } catch (error) {
    if (__DEV__) {
      console.log('Can not get Apple user: ', error);
    }
  }
};

Database.setAppleUser = setAppleUser;
Database.getAppleUser = getAppleUser;
Database.setAccessToken = setAccessToken;
Database.getAccessToken = getAccessToken;
Database.setUserLogin = setUserLogin;
Database.getUserLogin = getUserLogin;
Database.removeUserLogin = removeUserLogin;
Database.getFirebaseToken = getFirebaseToken;
Database.setFirebaseToken = setFirebaseToken;
Database.getPublicUser = getPublicUser;
Database.setPublicUser = setPublicUser;
export default Database;
