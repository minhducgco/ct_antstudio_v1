import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg
    width={343}
    height={1}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      stroke="#A5A6A7"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray="5 7"
      d="M.5.5h342"
    />
  </Svg>
);

export default SvgComponent;
