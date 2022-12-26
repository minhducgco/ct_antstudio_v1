import * as React from 'react';
import {TouchableOpacity} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import normalize from 'react-native-normalize';

function SvgIconBack(props) {
  return (
    <Svg width={28} height={28} viewBox="0 0 28 28" fill="#fff" {...props}>
      <Path
        d="M19.693 3.36a1.458 1.458 0 00-2.065 0l-9.811 9.812a1.162 1.162 0 000 1.645l9.811 9.811a1.458 1.458 0 002.065 0 1.458 1.458 0 000-2.065L11.13 14l8.575-8.575c.56-.572.56-1.493-.012-2.065z"
        fill={props.color}
      />
    </Svg>
  );
}

export default SvgIconBack;
