import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={19} height={20} viewBox="0 0 19 20" fill="none" {...props}>
      <Path
        opacity={props.focused === true ? 1 : 0.5}
        d="M13.5 9h-8c-.55 0-1 .45-1 1s.45 1 1 1h8c.55 0 1-.45 1-1s-.45-1-1-1zm3-7h-1V1c0-.55-.45-1-1-1s-1 .45-1 1v1h-8V1c0-.55-.45-1-1-1s-1 .45-1 1v1h-1a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 16h-14V7h14v11zm-6-5h-5c-.55 0-1 .45-1 1s.45 1 1 1h5c.55 0 1-.45 1-1s-.45-1-1-1z"
        fill={props.color}
      />
    </Svg>
  );
}

export default SvgComponent;
