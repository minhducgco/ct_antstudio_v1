import React from 'react';
import PropTypes from 'prop-types';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const iconLibraries = {
  Entypo: Entypo,
  Feather: Feather,
  FontAwesome: Icon,
  Ionicons: Ionicons,
  Fontisto: Fontisto,
  AntDesign: AntDesign,
  FontAwesome5: FontAwesome5,
  MaterialIcons: MaterialIcons,
  MaterialCommunityIcons: MaterialCommunityIcons,
};

const IconLibrary = ({library = 'Ionicons', iconName, size, color}) => {
  const IconComponent = iconLibraries[library];
  return <IconComponent name={iconName} size={size} color={color} />;
};

IconLibrary.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  library: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
};

export default IconLibrary;
