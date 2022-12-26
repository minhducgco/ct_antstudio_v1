import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgIconOverTime(props) {
  return (
    <Svg width={22} height={20} viewBox="0 0 22 20" fill="none" {...props}>
      <Path
        d="M10.5 7c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .27.11.52.29.71l2.79 2.79a.996.996 0 101.41-1.41l-2.5-2.5V7h.01zm10-4h-2V1c0-.55-.45-1-1-1s-1 .45-1 1v2h-2c-.55 0-1 .45-1 1s.45 1 1 1h2v2c0 .55.45 1 1 1s1-.45 1-1V5h2c.55 0 1-.45 1-1s-.45-1-1-1zm-3 7c-.55 0-1 .45-1 1 0 3.86-3.14 7-7 7s-7-3.14-7-7 3.14-7 7-7c.3 0 .59.02.88.05a.98.98 0 001.11-.87.987.987 0 00-.87-1.11C10.25 2.02 9.87 2 9.5 2c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9c0-.55-.45-1-1-1z"
        fill={props.color}
      />
    </Svg>
  );
}

export default SvgIconOverTime;
