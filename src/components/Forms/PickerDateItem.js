/******************************************
 *  Author      : HoiHD
 *  Created On  : Mon Aug 24 2020
 *  File        : PickerDateItem.js
 *  Description : Chọn ngày với định dạng DD/MM/YYYY
 *******************************************/
import React, {useContext, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Item, Label} from 'native-base';
import DatePicker from 'react-native-datepicker';
import PropTypes from 'prop-types';
import moment from 'moment';
import normalize from 'react-native-normalize';

import Colors from '@styles/color';
import theme from '@styles/theme.style';
import {LocalizationContext} from '@context/index';
import {VN_FORMAT_DATE, GL_FORMAT_DATE} from '@configs/Configs';

function PickerDateItem({
  title = '',
  value = '',
  disabled = false,
  setValue,
  hasMinDate = true,
  font = true,
  placeholder = 'choose',
  format = VN_FORMAT_DATE,
  hasTitle = true,
}) {
  const {t, locale} = useContext(LocalizationContext);

  const onDateChange = (dateStr, date) => {
    setValue(dateStr, moment(date).format(format));
  };
  return (
    <View style={styles.line}>
      {hasTitle && (
        <Label style={styles.title(font)}>
          {t(title)}
          <Text style={{color: 'red'}}> *</Text>:
        </Label>
      )}
      <DatePicker
        locale={locale}
        mode="date"
        disabled={disabled}
        placeholder={t(placeholder)}
        format={format}
        minDate={
          hasMinDate
            ? moment().format(format)
            : moment('1900-01-01').format(format)
        }
        style={styles.date}
        date={value}
        onDateChange={onDateChange}
        customStyles={{
          dateInput: styles.dateInput,
          disabled: styles.disable,
          dateText: styles.dateText,
        }}
        confirmBtnText={t('confirm')}
        cancelBtnText={t('cancel')}
      />
    </View>
  );
}

PickerDateItem.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  disable: PropTypes.bool,
  setValue: PropTypes.func.isRequired,
};

export default PickerDateItem;

const styles = StyleSheet.create({
  disable: {
    backgroundColor: '#fff',
  },
  dateText: {
    fontFamily: theme.FONT_FAMILY,
    color: '#000',
    fontSize: 14,
  },
  dateInput: {
    borderWidth: 0,
    alignItems: 'flex-start',
  },
  date: {
    flex: 7,
    borderWidth: 1,
    paddingLeft: 10,
    marginLeft: normalize(6),
    borderColor: Colors.DUSTY_GRAY,
    borderRadius: 5,
    // height: normalize(50),
    justifyContent: 'center',
    marginTop: 5,
  },
  title: font => ({
    fontFamily: font === true ? theme.FONT_BOLD : theme.FONT_FAMILY,
    fontSize: 14,
    color: '#000',
    // marginVertical: normalize(18),
    // width: normalize(100),
    flex: 3,
  }),
  value: {
    fontFamily: theme.FONT_FAMILY,
    fontSize: 14,
    color: '#000',
  },
  line: {
    flexDirection: 'row',
    marginLeft: normalize(18),
    marginTop: normalize(5),
    alignItems: 'center',
  },
});
