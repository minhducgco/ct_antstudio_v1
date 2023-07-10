import React, {useEffect, useRef} from 'react';
import {useSelector} from 'react-redux';
import {Modal} from 'react-native-paper';
import LottieView from 'lottie-react-native';
import {View, StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';

const LoadingWithLottie = () => {
  const isLoading = useSelector(state => state.config.isLoading);
  const lottieRef = useRef(null);

  useEffect(() => {
    if (isLoading) {
      lottieRef.current?.play();
    } else {
      lottieRef.current?.reset();
    }
  }, [isLoading]);

  return (
    <Modal contentContainerStyle={stylesLoading.modal} visible={isLoading}>
      <View style={stylesLoading.container}>
        <LottieView
          ref={lottieRef}
          source={require('@assets/lottie/144744-4-dots-loading-animation.json')}
          style={stylesLoading.lottieView}
        />
      </View>
    </Modal>
  );
};

export default LoadingWithLottie;

const stylesLoading = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999999999999 * 999999,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lottieView: {
    width: '50%',
    marginRight: normalize(30),
  },
});
