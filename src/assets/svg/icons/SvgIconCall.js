import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
      <Path
        d="M11.025 10l-2.1 2.083a13.453 13.453 0 01-5-5l2.083-2.1a.855.855 0 00.225-.75l-.625-3.066A.831.831 0 004.792.5H1.333C.867.5.475.892.5 1.358A14.934 14.934 0 002.525 8 15.063 15.063 0 008 13.475c1.975 1.142 4.233 1.883 6.642 2.025.466.025.858-.367.858-.833v-3.459c0-.4-.283-.741-.666-.816l-3.059-.609a.82.82 0 00-.75.217z"
        fill={props.color}
      />
    </Svg>
  );
}

export default SvgComponent;
