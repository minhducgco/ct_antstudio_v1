import React from 'react';
import {gql, useQuery} from '@apollo/client';
import {StyleSheet, SafeAreaView} from 'react-native';

import {homeScreenStyle} from '@styles/homeScreen.style';

export const CONTINENT_QUERY = gql`
  query ContinentQuery {
    continents {
      code
      name
    }
  }
`;

const HomeScreen = ({navigation}) => {
  const {data, loading} = useQuery(CONTINENT_QUERY);
  console.log(loading, data);
  return <SafeAreaView style={styles.container} />;
};

export default HomeScreen;

const styles = StyleSheet.create({
  ...homeScreenStyle,
});
