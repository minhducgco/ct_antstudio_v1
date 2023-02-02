import React from 'react';
import auth from '@react-native-firebase/auth';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ProfileScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          auth()
            .signOut()
            .then(() => {
              navigation.navigate('AuthStack', {
                screen: 'LoginScreen',
              });
            })
            .catch(error => {
              console.log('Logout Error FB');
            })
        }>
        <Text style={styles.txtLogout}>Đăng xuất</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtLogout: {fontSize: 20},
});

export default ProfileScreen;
