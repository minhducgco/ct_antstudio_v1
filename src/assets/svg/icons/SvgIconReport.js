import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgIconReport = props => (
  <Svg
    width={21}
    height={15}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M20.031 12.5a.47.47 0 0 1 .469.469v1.562a.47.47 0 0 1-.469.469H.97a.47.47 0 0 1-.469-.469V.47A.47.47 0 0 1 .969 0H2.53A.47.47 0 0 1 3 .469V12.5h17.031ZM15.06 3.73 11.75 5.938 8.418 1.495a.47.47 0 0 0-.777.04L4.25 7.186v4.063h15l-3.512-7.336a.469.469 0 0 0-.68-.184Z"
      fill="#C3002F"
    />
  </Svg>
);

export default SvgIconReport;
