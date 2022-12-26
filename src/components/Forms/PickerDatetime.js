/******************************************
 *  Author      : HoiHD
 *  Created On  : Mon Aug 24 2020
 *  File        : PickerDatetime.js
 *  Description :
 *  - Chọn ngày giờ
 *  - value: là timestamp
 *******************************************/
import React, {useState, useContext, Fragment} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import {StyleSheet, Platform, Image, Text} from 'react-native';
import {Item, Label, Input} from 'native-base';
import DatePicker from 'react-native-datepicker';
import PropTypes from 'prop-types';
import moment from 'moment';

import theme from '@styles/theme.style';
import {LocalizationContext} from '@context/index';
import {VN_FORMAT_DATETIME, VN_FORMAT_TIME} from '@configs/Configs';
import Colors from '@styles/color';

export default function PickerDatetime({
  title = 'from_hour',
  value = moment().toDate().getTime(),
  disabled = false,
  setValue,
  font = true,
}) {
  const {t, locale} = useContext(LocalizationContext);
  const [showDate, setShowDate] = useState(false);
  const [showTime, setShowTime] = useState(false);
  const [date, setDate] = useState(moment(value).toDate().getTime());
  const [time, setTime] = useState(moment(value).toDate().getTime());
  const onShowPickerDatetime = () => {
    setShowDate(true);
  };

  const onChangeDateAndroid = (event, date) => {
    setShowDate(false);
    if (event.type === 'set') {
      setDate(event.nativeEvent.timestamp);
      setShowTime(true);
    }
  };

  const onChangeTimeAndroid = (event, time) => {
    setShowTime(false);
    if (event.type === 'set') {
      let dateString = moment(date).format('YYYY-MM-DD');
      let timeString = moment(event.nativeEvent.timestamp).format(
        VN_FORMAT_TIME,
      );
      let datetimeString = dateString + ' ' + timeString;

      setTime(event.nativeEvent.timestamp);
      setValue(moment(datetimeString).toDate().getTime());
    }
  };

  const onDateChangeIOS = (dateString, datetime) => {
    setValue(moment(datetime).toDate().getTime());
  };

  const optionByOS = () => {
    if (Platform.OS === 'ios') {
      return (
        <DatePicker
          mode="datetime"
          date={moment(value).format(VN_FORMAT_DATETIME)}
          minDate={new Date()}
          format={VN_FORMAT_DATETIME}
          onDateChange={onDateChangeIOS}
          confirmBtnText={t('done')}
          cancelBtnText={t('cancel')}
          showIcon={true}
          is24Hour={true}
          locale={locale}
          style={styles.date}
          customStyles={{
            dateInput: styles.dateInput,
            disabled: styles.disabled,
            dateText: styles.dateText,
          }}
          disabled={disabled}
        />
      );
    } else if (Platform.OS === 'android') {
      return (
        <Fragment>
          {showDate && (
            <DateTimePicker
              mode={'date'}
              is24Hour={true}
              display="default"
              onChange={onChangeDateAndroid}
              value={new Date(date)}
              minimumDate={new Date()}
            />
          )}
          {showTime && (
            <DateTimePicker
              mode={'time'}
              is24Hour={true}
              display="default"
              onChange={onChangeTimeAndroid}
              value={new Date(time)}
              minimumDate={new Date()}
            />
          )}
        </Fragment>
      );
    }
  };

  return (
    <Item onPress={onShowPickerDatetime} disabled={disabled}>
      {title !== '' && (
        <Label style={styles.title(font)}>
          {t(title)} <Text style={{color: 'red'}}>*</Text>:
        </Label>
      )}
      {optionByOS()}
      {Platform.OS === 'android' && (
        <Fragment>
          <Input
            disabled={true}
            style={styles.value}
            value={moment(value).format(VN_FORMAT_DATETIME)}
            defaultValue={moment(value).format(VN_FORMAT_DATETIME)}
          />
          <Image
            source={require('../../assets/icons/ic_calendar.jpg')}
            style={styles.imageIcon}
          />
        </Fragment>
      )}
    </Item>
  );
}

PickerDatetime.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  disabled: PropTypes.bool,
  setValue: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  dateText: {
    fontFamily: theme.FONT_FAMILY,
    color: Colors.BLACK,
    fontSize: 14,
  },
  imageIcon: {
    width: 26,
    height: 26,
    resizeMode: 'contain',
  },
  disabled: {
    backgroundColor: Colors.WHITE,
  },
  dateInput: {
    borderWidth: 0,
    alignItems: 'flex-start',
  },
  date: {
    flex: 1,
  },
  title: font => ({
    fontFamily: font === true ? theme.FONT_BOLD : theme.FONT_FAMILY,
    fontSize: 14,
    color: Colors.BLACK,
  }),
  value: {
    fontFamily: theme.FONT_FAMILY,
    fontSize: 14,
    color: Colors.BLACK,
  },
});
