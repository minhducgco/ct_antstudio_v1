import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={18} height={18} viewBox="0 0 18 18" fill="none" {...props}>
      <Path
        d="M16 0H2C.9 0 0 .9 0 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM3.6 13.2l2-2.67c.2-.27.6-.27.8 0L8.25 13l2.6-3.47c.2-.27.6-.27.8 0l2.75 3.67a.5.5 0 01-.4.8H4a.5.5 0 01-.4-.8z"
        fill={props.color}
      />
    </Svg>
  );
}

export default SvgComponent;
