import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgIconPlaned(props) {
  return (
    <Svg width={21} height={18} viewBox="0 0 21 18" fill="none" {...props}>
      <Path
        d="M2.5 18h16c.55 0 1-.45 1-1s-.45-1-1-1h-16c-.55 0-1 .45-1 1s.45 1 1 1zM20.28 6.24c-.39-.68-1.23-.97-1.99-.77L13.37 6.8 6.98 1.09C6.69.83 6.29.74 5.92.85a1.12 1.12 0 00-.65 1.64l3.32 5.6-4.81 1.3-1.42-1.26a.813.813 0 00-.73-.19c-.56.12-.83.75-.54 1.24l1.88 3.17c.23.39.69.57 1.12.46l15.16-4.09c1.07-.3 1.57-1.52 1.03-2.48z"
        fill={props.color}
      />
    </Svg>
  );
}

export default SvgIconPlaned;
