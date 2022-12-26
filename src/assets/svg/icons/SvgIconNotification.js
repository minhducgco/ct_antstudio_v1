import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgIconNotification(props) {
  return (
    <Svg width={17} height={17} viewBox="0 0 17 17" fill="none" {...props}>
      <Path
        opacity={props.focused === true ? 1 : 0.5}
        d="M14.5 15V8c0-2.79-1.91-5.14-4.5-5.8v-.7C10 .67 9.33 0 8.5 0S7 .67 7 1.5v.7C4.41 2.86 2.5 5.21 2.5 8v7h-1c-.55 0-1 .45-1 1s.45 1 1 1h14c.55 0 1-.45 1-1s-.45-1-1-1h-1z"
        fill={props.color}
      />
    </Svg>
  );
}

export default SvgIconNotification;
