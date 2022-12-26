import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={18} height={14} viewBox="0 0 18 14" fill="none" {...props}>
      <Path
        d="M15.666.333H2.333C1.416.333.675 1.083.675 2L.667 12c0 .917.75 1.667 1.666 1.667h13.334c.916 0 1.666-.75 1.666-1.667V2c0-.917-.75-1.667-1.666-1.667zm-.333 3.542L9.441 7.558a.843.843 0 01-.883 0L2.667 3.875a.708.708 0 11.75-1.2L9 6.167l5.583-3.492a.708.708 0 11.75 1.2z"
        fill={props.color}
      />
    </Svg>
  );
}

export default SvgComponent;
