import React, {useContext} from 'react';
import {StyleSheet, Text} from 'react-native';
import {Item, Label} from 'native-base';
import DatePicker from 'react-native-datepicker';
import PropTypes from 'prop-types';
import moment from 'moment';

import theme from '@styles/theme.style';
import {LocalizationContext} from '@context/index';
import {VN_FORMAT_DATE} from '@configs/Configs';
import {IconCalendarBlue} from '@assets/svg/icons/index';
import color from '@styles/color';
import normalize from 'react-native-normalize';
function PickerDate({
  title = '',
  value = '',
  disabled = false,
  setValue,
  hasMinDate = true,
  font = true,
  placeholder = 'choose',
  format = VN_FORMAT_DATE,
  hasTitle = true,
  required = false,
  styleDate,
}) {
  const {t, locale} = useContext(LocalizationContext);

  const onDateChange = (dateStr, date) => {
    setValue(dateStr, moment(date).format(format));
  };
  return (
    <Item style={styles.contain}>
      {hasTitle && (
        <Label style={styles.title(font)}>
          {t(title)}
          {required && <Text style={styles.txtRequire}>*</Text>}
        </Label>
      )}
      <DatePicker
        locale={locale}
        mode="date"
        iconComponent={<IconCalendarBlue />}
        disabled={disabled}
        placeholder={t(placeholder)}
        format={format}
        minDate={
          hasMinDate
            ? moment().format(format)
            : moment('1900-01-01').format(format)
        }
        style={styleDate ? styleDate : styles.date}
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
    </Item>
  );
}

PickerDate.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  disable: PropTypes.bool,
  setValue: PropTypes.func.isRequired,
};

export default PickerDate;

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
    flex: 4,
    borderWidth: 0.7,
    borderColor: color.DUSTY_GRAY,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  title: font => ({
    fontFamily: font === true ? theme.FONT_BOLD : theme.FONT_FAMILY,
    fontSize: normalize(13),
    color: '#000',
    flex: 1.5,
  }),
  value: {
    fontFamily: theme.FONT_FAMILY,
    fontSize: 14,
    color: '#000',
  },
  contain: {borderBottomWidth: 0, paddingVertical: 1},
  txtRequire: {
    fontSize: normalize(14),
    fontFamily: theme.FONT_FAMILY,
    color: theme.MAIN_COLOR,
  },
});
