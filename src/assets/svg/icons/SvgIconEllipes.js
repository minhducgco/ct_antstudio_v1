import * as React from 'react';
import Svg, {Circle} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={12} height={13} viewBox="0 0 12 13" fill="none" {...props}>
      <Circle cx={6} cy={6.5} r={6} fill={props.color} />
    </Svg>
  );
}

export default SvgComponent;
