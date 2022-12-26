import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgIconBookcar(props) {
  return (
    <Svg width={22} height={21} viewBox="0 0 22 21" fill="none" {...props}>
      <Path
        d="M2.5 10V7h7.29c-.77-2.6.21-4.61.37-4.97C1.47 1.67.5 4.02.5 6v9.5c0 .95.38 1.81 1 2.44v1.56c0 .82.67 1.5 1.5 1.5s1.5-.68 1.5-1.5V19h8v.5c0 .82.67 1.5 1.5 1.5s1.5-.68 1.5-1.5v-1.56c.62-.63 1-1.49 1-2.44V12c-1.91 0-3.63-.76-4.89-2H2.5zM5 16c-.83 0-1.5-.67-1.5-1.5S4.17 13 5 13s1.5.67 1.5 1.5S5.83 16 5 16zm8.5-1.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5z"
        fill={props.color}
      />
      <Path
        d="M16.5 0c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm2.02 7.03c-.2.2-.51.2-.71 0l-1.67-1.67c-.1-.1-.15-.23-.15-.36V2.5c0-.28.22-.5.5-.5s.5.22.5.5v2.29l1.53 1.53c.19.19.19.51 0 .71z"
        fill={props.color}
      />
    </Svg>
  );
}

export default SvgIconBookcar;
