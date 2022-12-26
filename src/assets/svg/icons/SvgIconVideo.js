import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
      <Path
        d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zM8 13.5v-7a.5.5 0 01.8-.4l4.67 3.5c.27.2.27.6 0 .8L8.8 13.9a.5.5 0 01-.8-.4z"
        fill={props.color}
      />
    </Svg>
  );
}

export default SvgComponent;
