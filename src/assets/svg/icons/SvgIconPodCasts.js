import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
      <Path
        d="M12 10c0 .74-.4 1.38-1 1.72V20H9v-8.28c-.6-.35-1-.98-1-1.72 0-1.1.9-2 2-2s2 .9 2 2zm-2-6c-3.31 0-6 2.69-6 6 0 1.74.75 3.31 1.94 4.4l1.42-1.42A3.957 3.957 0 016 10c0-2.21 1.79-4 4-4s4 1.79 4 4c0 1.19-.53 2.25-1.36 2.98l1.42 1.42A5.957 5.957 0 0016 10c0-3.31-2.69-6-6-6zm0-4C4.48 0 0 4.48 0 10c0 2.85 1.2 5.41 3.11 7.24l1.42-1.42A7.987 7.987 0 012 10c0-4.41 3.59-8 8-8s8 3.59 8 8c0 2.29-.98 4.36-2.53 5.82l1.42 1.42C18.8 15.41 20 12.85 20 10c0-5.52-4.48-10-10-10z"
        fill={props.color}
      />
    </Svg>
  );
}

export default SvgComponent;
