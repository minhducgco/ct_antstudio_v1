import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgIconShiper(props) {
  return (
    <Svg width={21} height={14} viewBox="0 0 21 14" fill="none" {...props}>
      <Path
        d="M17.5 2c0-1.1-.9-2-2-2h-2c-.55 0-1 .45-1 1s.45 1 1 1h2v2.65L12.02 9H8.5V5c0-.55-.45-1-1-1h-3c-2.21 0-4 1.79-4 4v2c0 .55.45 1 1 1h1c0 1.66 1.34 3 3 3s3-1.34 3-3h3.52c.61 0 1.18-.28 1.56-.75l3.48-4.35c.29-.36.44-.8.44-1.25V2zm-12 10c-.55 0-1-.45-1-1h2c0 .55-.45 1-1 1z"
        fill={props.color}
      />
      <Path
        d="M4.5 1h3c.55 0 1 .45 1 1s-.45 1-1 1h-3c-.55 0-1-.45-1-1s.45-1 1-1zM17.5 8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"
        fill={props.color}
      />
    </Svg>
  );
}

export default SvgIconShiper;
