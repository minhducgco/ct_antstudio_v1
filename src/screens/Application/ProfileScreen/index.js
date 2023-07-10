import React, {useContext, useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import themeStyle from '@styles/theme.style';
import {LocalizationContext} from '@context/LocalizationContext';

const ProfileScreen = ({navigation}) => {
  const {t} = useContext(LocalizationContext);
  const [currentUser, setCurrentUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      setCurrentUser(user);
      if (user) {
        user
          .getIdToken()
          .then(token => {
            setAccessToken(token);
          })
          .catch(error => {
            console.log('Error retrieving access token', error);
          });
      }
    });
    return unsubscribe;
  }, []);

  const handleLogout = () => {
    auth()
      .signOut()
      .then(() => {
        navigation.navigate('AuthStack', {
          screen: 'LoginScreen',
        });
      })
      .catch(error => {
        console.log('Logout Error', error);
      });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          console.log(JSON.stringify(accessToken, null, 2));
          console.log(JSON.stringify(currentUser, null, 2));
        }}>
        <Text style={[styles.txtTitle]}>Thông tin đăng nhập</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLogout}>
        <Text style={styles.txtTitle}>{t('sign_out')}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    flex: 1,
  },
  txtTitle: {
    fontSize: 20,
    fontFamily: themeStyle.FONT_BOLD,
    color: themeStyle.COLOR_BLACK,
  },
});

export default ProfileScreen;
