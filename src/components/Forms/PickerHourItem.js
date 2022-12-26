/******************************************
 *  Author      : HoiHD
 *  Created On  : Mon Aug 24 2020
 *  File        : PickerHourItem.js
 *  Description : Picker Item Hour
 *******************************************/
import React, {useState, useContext, useRef, Fragment} from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import DatetimePicker from '@react-native-community/datetimepicker';
import Timepicker from 'react-native-24h-timepicker';
import {Item, Label, Input} from 'native-base';
import {Platform} from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';

import theme from '@styles/theme.style';
import normalize from 'react-native-normalize';
import {LocalizationContext} from '@context/index';
import Colors from '@styles/color';
var date = moment().format('YYYY-MM-DD');
function PickerHourItem({
  title,
  value = moment().format('HH:mm'),
  setValue,
  disabled = false,
}) {
  const timePicker = useRef(null);
  const [hour, setHour] = useState(value.split(':')[0]);
  const [minute, setMinute] = useState(value.split(':')[1]);
  const [showPickerAndroid, setShowPickerAndroid] = useState(false);

  const {t} = useContext(LocalizationContext);

  const onCancelTime = () => {
    timePicker.current.close();
  };

  const onConfirmTime = (hour, minute) => {
    setHour(hour);
    setMinute(minute);
    setValue(`${hour}:${minute}`);
    timePicker.current.close();
  };

  const onShowHourPicker = () => {
    if (Platform.OS === 'ios') {
      if (!disabled) {
        timePicker.current.open();
      }
    } else if (Platform.OS === 'android') {
      setShowPickerAndroid(true);
    }
  };

  const onChangeAndroidTime = (event, selectedDate) => {
    setShowPickerAndroid(false);
    if (event.type !== 'dismissed') {
      setValue(moment(selectedDate).format('HH:mm'));
    }
  };

  const TimePickerPlatform = () => {
    if (Platform.OS === 'ios') {
      return (
        <Timepicker
          textCancel={t('cancel')}
          textConfirm={t('done')}
          selectedHour={hour}
          selectedMinute={minute}
          ref={timePicker}
          onCancel={onCancelTime}
          onConfirm={(hour, minute) => onConfirmTime(hour, minute)}
        />
      );
    } else if (Platform.OS === 'android') {
      return (
        (showPickerAndroid && (
          <DatetimePicker
            // value={moment(`${date} ${value}`).toDate().getTime()}
            value={new Date()}
            mode={'time'}
            is24Hour={true}
            display="default"
            onChange={onChangeAndroidTime}
          />
        )) || <Fragment />
      );
    } else {
      return <Fragment />;
    }
  };

  return (
    <View style={styles.hourPicker}>
      <Label style={styles.title}>
        {t(title)}
        <Text style={{color: 'red'}}> *</Text>:
      </Label>
      <TouchableOpacity
        disabled={disabled}
        onPress={onShowHourPicker}
        style={styles.buttonPicker}>
        <Text style={{...styles.value}}>{value}</Text>
        <TimePickerPlatform />
      </TouchableOpacity>
    </View>
  );
}

PickerHourItem.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  disable: PropTypes.bool,
};

export default PickerHourItem;

const styles = StyleSheet.create({
  buttonPicker: {
    height: normalize(45, 'height'),
    justifyContent: 'center',
    borderWidth: 1,
    width: normalize(245),
    borderRadius: 5,
    borderColor: Colors.DUSTY_GRAY,
  },
  title: {
    fontFamily: theme.FONT_BOLD,
    fontSize: 14,
    color: '#000',
    width: normalize(100),
  },
  value: {
    fontFamily: theme.FONT_FAMILY,
    fontSize: 14,
    color: '#000',
    marginHorizontal: normalize(10),
  },
  hourPicker: {
    flexDirection: 'row',
    marginLeft: normalize(18),
    alignItems: 'center',
    marginTop: normalize(10),
  },
});
