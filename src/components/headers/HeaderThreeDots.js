import React, {useContext} from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import {onActionOvertime} from '@repository/Application/timesheet/OverTime';
import {onActionLeave} from '@repository/Application/timesheet/Leave';
import {onActionHaveChild} from '@repository/Application/timesheet/HaveChild';
import {GOBAction} from '@repository/Application/timesheet/GoingOnBusiness';
import {onActionExpressDelivery} from '@repository/Application/administration/ExpressDelivery';
import {LocalizationContext} from '@context/index';

export function OvertimeType(
  navigation,
  setVisible,
  accessToken,
  id,
  cases,
  title,
  contentAlert,
) {
  if (cases === 'delete') {
    Alert.alert(
      title,
      contentAlert,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            onActionOvertime({
              accessToken: accessToken,
              overtimeId: id,
              action: cases,
            })
              .then(res => navigation.navigate('OverTimeScreen'))
              .catch(err => console.log(err));
            setVisible(false);
          },
        },
      ],
      {cancelable: false},
    );
  } else {
    navigation.navigate('NoFooter', {
      screen: 'EditOvertime',
      params: {
        id: id,
        accessToken: accessToken,
      },
    });
    setVisible(false);
  }
}

export function LeaveType(
  navigation,
  setVisible,
  accessToken,
  id,
  cases,
  title,
  contentAlert,
) {
  if (cases === 'delete') {
    Alert.alert(
      title,
      contentAlert,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            onActionLeave({
              accessToken: accessToken,
              leaveId: id,
              action: cases,
            })
              .then(res => navigation.navigate('SabbaticalLeaveScreen'))
              .catch(err => console.log(err));
            setVisible(false);
          },
        },
      ],
      {cancelable: false},
    );
  } else {
    navigation.navigate('NoFooter', {
      screen: 'EditSabbatical',
      params: {
        id: id,
        accessToken: accessToken,
      },
    });
    setVisible(false);
  }
}
export function ChildType(
  navigation,
  setVisible,
  accessToken,
  id,
  cases,
  title,
  contentAlert,
) {
  if (cases === 'delete') {
    Alert.alert(
      title,
      contentAlert,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            onActionHaveChild({
              accessToken: accessToken,
              haveChildId: id,
              action: cases,
            })
              .then(res => navigation.navigate('HaveChildScreen'))
              .catch(err => console.log(err));
            setVisible(false);
          },
        },
      ],
      {cancelable: false},
    );
  } else {
    navigation.navigate('NoFooter', {
      screen: 'EditChild',
      params: {
        id: id,
        accessToken: accessToken,
      },
    });
    setVisible(false);
  }
}

export function BTType(
  navigation,
  setVisible,
  accessToken,
  id,
  cases,
  title,
  contentAlert,
) {
  if (cases === 'delete') {
    Alert.alert(
      title,
      contentAlert,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            GOBAction({
              accessToken: accessToken,
              goingOnBusinessId: id,
              action: cases,
            })
              .then(res => navigation.navigate('BusinessTravelScreen'))
              .catch(err => console.log(err));
            setVisible(false);
          },
        },
      ],
      {cancelable: false},
    );
  } else {
    navigation.navigate('NoFooter', {
      screen: 'EditBusinessTravel',
      params: {
        id: id,
        accessToken: accessToken,
      },
    });
    setVisible(false);
  }
}

export function ExpressDeliveryType(
  navigation,
  setVisible,
  accessToken,
  id,
  cases,
  title,
  contentAlert,
  setReadonly,
  setEditing,
  getData,
) {
  if (cases === 'delete') {
    Alert.alert(
      title,
      contentAlert,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            onActionExpressDelivery({
              accessToken: accessToken,
              expressDeliveryId: id,
              action: cases,
            })
              .then(res => navigation.navigate('ExpressDeliveryScreen'))
              .catch(err => console.log(err));
            setVisible(false);
          },
        },
      ],
      {cancelable: false},
    );
  } else {
    setReadonly(false);
    setEditing(true);
    setVisible(false);
  }
}
