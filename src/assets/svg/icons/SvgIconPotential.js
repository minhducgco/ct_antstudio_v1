import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgIconPotential = props => (
  <Svg
    width={21}
    height={21}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M19.562.5H1.439C.606.5.186 1.51.776 2.1L8 9.326v8.049c0 .306.15.593.4.768l3.125 2.187A.938.938 0 0 0 13 19.562V9.326L20.224 2.1c.59-.588.172-1.6-.662-1.6Z"
      fill="#C3002F"
    />
  </Svg>
);

export default SvgIconPotential;
