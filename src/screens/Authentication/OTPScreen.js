import React, {useContext, useState, useEffect, useCallback} from 'react';
import FastImage from 'react-native-fast-image';
import {
  Text,
  View,
  Animated,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {
  Cursor,
  CodeField,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import AuthButton from '@components/Authentication/Button';
import ImageAssets from '@components/BaseComponent/ImageAssets';
import HeaderWithTitle from '@components/Header/HeaderWithTitle';
import {LocalizationContext} from '@context/LocalizationContext';
import TemplateLogin from '@components/Authentication/TemplateLogin';
import {authenticationStyle as styles} from '@styles/authentication.style';

const CELL_COUNT = 6;
const CELL_SIZE = 40;
const CELL_BORDER_RADIUS = 8;
const DEFAULT_CELL_BG_COLOR = '#fff';
const ACTIVE_CELL_BG_COLOR = '#f7fafe';
const NOT_EMPTY_CELL_BG_COLOR = '#00B732';
const {Value, Text: AnimatedText} = Animated;
const animationsColor = [...new Array(CELL_COUNT)].map(() => new Value(0));
const animationsScale = [...new Array(CELL_COUNT)].map(() => new Value(1));

const animateCell = ({hasValue, index, isFocused}) => {
  Animated.parallel([
    Animated.timing(animationsColor[index], {
      useNativeDriver: false,
      toValue: isFocused ? 1 : 0,
      duration: 250,
    }),
    Animated.spring(animationsScale[index], {
      useNativeDriver: false,
      toValue: hasValue ? 0 : 1,
      duration: hasValue ? 300 : 250,
    }),
  ]).start();
};

const OTPScreen = () => {
  const {t} = useContext(LocalizationContext);
  const [value, setValue] = useState('');
  const [count, setCount] = useState(300);
  const [isSubmit, setIsSubmit] = useState(true);
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  useEffect(() => {
    let startTimestamp = Date.now();
    const frame = () => {
      const currentTimestamp = Date.now();
      const elapsed = currentTimestamp - startTimestamp;
      if (elapsed >= 1000) {
        setCount(c => {
          if (c > 0) {
            return c - 1;
          } else {
            setIsSubmit(false);
            return 0;
          }
        });
        startTimestamp = currentTimestamp;
      }
      requestAnimationFrame(frame);
    };
    const animationFrameId = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  useEffect(() => {
    if (value.length === CELL_COUNT) {
      onVerifyOtp();
    }
  }, [onVerifyOtp, value]);

  const onVerifyOtp = useCallback(() => {
    setValue('');
  }, []);

  const renderCell = ({index, symbol, isFocused}) => {
    const hasValue = Boolean(symbol);
    const animatedCellStyle = {
      backgroundColor: hasValue
        ? animationsScale[index].interpolate({
            inputRange: [0, 1],
            outputRange: [NOT_EMPTY_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR],
          })
        : animationsColor[index].interpolate({
            inputRange: [0, 1],
            outputRange: [DEFAULT_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR],
          }),
      borderRadius: animationsScale[index].interpolate({
        inputRange: [0, 1],
        outputRange: [CELL_SIZE, CELL_BORDER_RADIUS],
      }),
      transform: [
        {
          scale: animationsScale[index].interpolate({
            inputRange: [0, 1],
            outputRange: [0.2, 1],
          }),
        },
      ],
    };
    setTimeout(() => {
      animateCell({hasValue, index, isFocused});
    }, 0);
    return (
      <AnimatedText
        key={index}
        style={[styles.cell, animatedCellStyle]}
        onLayout={getCellOnLayoutHandler(index)}>
        {symbol || (isFocused ? <Cursor /> : null)}
      </AnimatedText>
    );
  };

  return (
    <TemplateLogin>
      <SafeAreaView style={styles.containLogin}>
        <HeaderWithTitle hasLeft={true} title={t('otp_input')} />
        <FastImage
          style={styles.imageForgetPass}
          source={ImageAssets.otpInput}
          resizeMode={FastImage.resizeMode.contain}
        />
        <CodeField
          ref={ref}
          {...props}
          value={value}
          autoFocus={true}
          editable={isSubmit}
          cellCount={CELL_COUNT}
          renderCell={renderCell}
          onChangeText={setValue}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          rootStyle={styles.codeFieldRoot}
        />
        <Timer count={count} style={styles.txtLoginWith} />
        <View style={styles.viewReSend}>
          <Text style={styles.txtNewTo}>{t('have_received_the_code_yet')}</Text>
          <TouchableOpacity>
            <Text style={styles.txtRegister}>{t('resend_otp')}</Text>
          </TouchableOpacity>
        </View>
        <AuthButton
          title={t('verify')}
          disable={!isSubmit}
          onPress={onVerifyOtp}
        />
      </SafeAreaView>
    </TemplateLogin>
  );
};

export default OTPScreen;

const Timer = ({count, style}) => {
  const minutes = Math.floor(count / 60);
  const seconds = count % 60;
  const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds
    .toString()
    .padStart(2, '0')}`;
  return <Text style={style}>{formattedTime}</Text>;
};
