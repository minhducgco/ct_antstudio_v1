import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgIconApplication(props) {
  return (
    <Svg width={20} height={19} viewBox="0 0 20 19" fill="none" {...props}>
      <Path
        opacity={props.focused === true ? 1 : 0.5}
        d="M10.5 12v6c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1zm-9 7h6c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1zM.5 2v6c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1zM13.45.4L9.2 4.64a.996.996 0 000 1.41l4.25 4.25c.39.39 1.02.39 1.41 0l4.25-4.25a.996.996 0 000-1.41L14.87.4c-.39-.39-1.03-.39-1.42 0z"
        fill={props.color}
      />
    </Svg>
  );
}

export default SvgIconApplication;
