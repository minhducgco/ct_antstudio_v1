import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

const SvgIconItemPartner = props => (
  <Svg
    width={73}
    height={73}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Circle cx={36.5} cy={36.5} r={36.5} fill="#F8F8F8" />
    <Path
      d="M36.5 36.5a7.291 7.291 0 0 0 7.292-7.292 7.291 7.291 0 0 0-7.292-7.291 7.291 7.291 0 0 0-7.292 7.291A7.291 7.291 0 0 0 36.5 36.5Zm5.457 1.857L39.234 49.26l-1.823-7.747 1.823-3.19h-5.468l1.823 3.19-1.823 7.747-2.723-10.903c-4.062.194-7.303 3.515-7.303 7.622v2.37a2.735 2.735 0 0 0 2.734 2.734h20.052a2.735 2.735 0 0 0 2.734-2.734v-2.37c0-4.107-3.24-7.428-7.303-7.622Z"
      fill="#C3002F"
    />
  </Svg>
);

export default SvgIconItemPartner;
