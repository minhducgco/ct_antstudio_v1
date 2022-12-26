/* eslint-disable react-native/no-inline-styles */
import React, {Fragment, useContext} from 'react';
import {
  FlatList,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {LocalizationContext} from '@context/index';
import {Icon} from 'native-base';
import theme from '@styles/theme.style';
import Colors from '@styles/color';
import normalize from 'react-native-normalize';
import EmptyData from '@components/EmptyData';
export default function EditList({
  data,
  setData,
  renderItem,
  actionAdd,
  title,
  disabled = false,
  hasHeader = false,
  nameIcon,
  typeIcon,
  titleListEmptyComponent,
  numColumns = 1,
}) {
  const {t} = useContext(LocalizationContext);
  const {height} = Dimensions.get('screen');
  const ListFooder = () => {
    return (
      <View>
        {!disabled && (
          <TouchableOpacity onPress={() => actionAdd()} style={styles.touch}>
            <Icon
              name={nameIcon}
              type={typeIcon}
              style={{color: theme.MAIN_COLOR}}
            />
          </TouchableOpacity>
        )}
      </View>
    );
  };
  return (
    <View
      style={{
        margin: normalize(5),
      }}>
      {!hasHeader && (
        <View>
          <View style={styles.view1}>
            <Text style={styles.title}>{t(title)}:</Text>
            {!disabled && (
              <View>
                {data.length === 0 && (
                  <TouchableOpacity
                    onPress={() => actionAdd()}
                    style={{alignItems: 'flex-end'}}>
                    <Icon
                      name={nameIcon}
                      type={typeIcon}
                      style={{color: theme.MAIN_COLOR}}
                    />
                  </TouchableOpacity>
                )}
              </View>
            )}
          </View>

          {data.length === 0 && (
            <View
              style={{
                borderWidth: 1,
                borderColor: Colors.ALTO,
              }}
            />
          )}
        </View>
      )}

      <Fragment>
        <View style={{justifyContent: 'space-between'}}>
          <FlatList
            nestedScrollEnabled={true}
            data={data}
            renderItem={item => renderItem(item)}
            keyExtractor={(item, index) => index.toString()}
            style={{
              maxHeight: height / 3,
            }}
            numColumns={numColumns}
            ListEmptyComponent={
              hasHeader === true ? (
                <EmptyData title={titleListEmptyComponent} />
              ) : (
                <></>
              )
            }
          />

          {hasHeader === true ? <ListFooder /> : <></>}
        </View>
      </Fragment>
      {!hasHeader && (
        <View>
          {!disabled && (
            <View>
              {data.length !== 0 && (
                <TouchableOpacity
                  onPress={() => actionAdd()}
                  style={styles.touch}>
                  <Icon
                    name={nameIcon}
                    type={typeIcon}
                    style={{color: theme.MAIN_COLOR}}
                  />
                </TouchableOpacity>
              )}
            </View>
          )}
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    margin: normalize(8),
  },
  title: {
    fontFamily: theme.FONT_BOLD,
    fontSize: 14,
  },
  touch: {
    alignItems: 'flex-end',
    marginTop: normalize(8, 'height'),
  },
  view1: {
    marginBottom: normalize(8, 'height'),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
