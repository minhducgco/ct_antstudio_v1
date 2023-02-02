import React, {useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';

import {authenticationStyle} from '@styles/authentication.style';

function SpanishScreen({navigation}) {
  useEffect(() => {
    auth().onAuthStateChanged(user => {
      user
        ? navigation.navigate('BottomTabs', {screen: 'HomeScreen'})
        : navigation.navigate('LoginScreen');
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.containerSpanish}>
      <View />
      <Text style={styles.txtLogo}>Chiti</Text>
      <Text style={styles.copyRight}>2023© Chiti. All Right Reserved</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  ...authenticationStyle,
});

export default SpanishScreen;
