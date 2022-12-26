import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={14} height={20} viewBox="0 0 14 20" fill="none" {...props}>
      <Path
        d="M4 19c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H4v1zM7 0C3.1 0 0 3.1 0 7c0 2.4 1.2 4.5 3 5.7V15c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z"
        fill={props.color}
      />
    </Svg>
  );
}

export default SvgComponent;
