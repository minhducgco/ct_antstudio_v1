import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={20} height={19} viewBox="0 0 20 19" fill="none" {...props}>
      <Path
        d="M0 2v12c0 1.1.9 2 2 2h14l2.29 2.29c.63.63 1.71.18 1.71-.71L19.99 2c0-1.1-.9-2-2-2H2C.9 0 0 .9 0 2zm16 6c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1zm0 3c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1zM4 5c0-.55.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1H5c-.55 0-1-.45-1-1z"
        fill={props.color}
      />
    </Svg>
  );
}

export default SvgComponent;
