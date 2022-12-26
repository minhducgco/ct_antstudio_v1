import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={12} height={20} viewBox="0 0 12 20" fill="none" {...props}>
      <Path
        d="M10.166.833H1.833C.917.833.167 1.583.167 2.5v15c0 .917.75 1.667 1.666 1.667h8.334c.916 0 1.666-.75 1.666-1.667v-15c0-.917-.75-1.667-1.667-1.667zM6 17.083a.836.836 0 01-.833-.833c0-.458.375-.833.833-.833.458 0 .833.375.833.833a.836.836 0 01-.833.833zm4.166-3.75H1.833V5h8.333v8.333z"
        fill={props.color}
      />
    </Svg>
  );
}

export default SvgComponent;
