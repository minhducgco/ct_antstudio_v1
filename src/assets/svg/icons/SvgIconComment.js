import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={17} height={18} viewBox="0 0 17 18" fill="none" {...props}>
      <Path
        opacity={0.6}
        d="M16.825 2.333c0-.917-.742-1.666-1.658-1.666H1.833c-.916 0-1.666.75-1.666 1.666v10C.167 13.25.917 14 1.833 14H13.5l3.333 3.333-.008-15zm-1.658 0v10.975l-.975-.975H1.833v-10h13.334zM3.5 9h10v1.666h-10V9zm0-2.5h10v1.666h-10V6.5zm0-2.5h10v1.667h-10V4z"
        fill={props.color}
      />
    </Svg>
  );
}

export default SvgComponent;
