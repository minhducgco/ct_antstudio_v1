import * as React from 'react';
import Svg, {G, Circle, Path, Defs} from 'react-native-svg';

const SvgIconPlus = props => (
  <Svg
    width={52}
    height={52}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G filter="url(#a)">
      <Circle cx={26} cy={22} r={18} fill="#fff" />
    </G>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M25 15v6h-6v2h6v6h2v-6h6v-2h-6v-6h-2Z"
      fill="#9B9B9B"
    />
  </Svg>
);

export default SvgIconPlus;
