import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={14} height={18} viewBox="0 0 14 18" fill="none" {...props}>
      <Path
        d="M12 0H2C.9 0 0 .9 0 2v14.48c0 .72.73 1.2 1.39.92L7 15l5.61 2.4c.66.28 1.39-.2 1.39-.92V2c0-1.1-.9-2-2-2z"
        fill={props.color}
      />
    </Svg>
  );
}

export default SvgComponent;
