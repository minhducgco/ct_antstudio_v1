import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {IconEmptyData} from '@assets/svg/icons/index';
import theme from '@styles/theme.style';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtContent: {
    fontFamily: theme.FONT_BOLD,
    fontSize: 15,
    textAlign: 'center',
  },
});

const PendingView = () => {
  return (
    <View style={styles.container}>
      <IconEmptyData />
      <Text style={styles.txtContent}>
        Chức năng này đang phát triển, vui lòng quay lại sau!
      </Text>
    </View>
  );
};

export default PendingView;
