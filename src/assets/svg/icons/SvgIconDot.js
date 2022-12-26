import * as React from 'react';
import Svg, {Circle} from 'react-native-svg';

const SvgIconDot = props => (
  <Svg
    width={11}
    height={11}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Circle cx={5.5} cy={5.5} r={5.5} fill={props.color} />
  </Svg>
);

export default SvgIconDot;
