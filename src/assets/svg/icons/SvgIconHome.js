import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgIconHome(props) {
  return (
    <Svg
      width={17}
      height={18}
      opacity={props.focused === true ? 1 : 0.5}
      viewBox="0 0 17 18"
      fill="none"
      {...props}>
      <Path
        d="M7.3.9l-6 4.5C.8 5.78.5 6.37.5 7v9c0 1.1.9 2 2 2h4v-7h4v7h4c1.1 0 2-.9 2-2V7c0-.63-.3-1.22-.8-1.6L9.7.9a2.01 2.01 0 00-2.4 0z"
        fill={props.color}
      />
    </Svg>
  );
}

export default SvgIconHome;
