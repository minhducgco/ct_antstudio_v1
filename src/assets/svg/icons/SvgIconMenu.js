import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgIconMenu(props) {
  return (
    <Svg width={22} height={14} viewBox="0 0 22 14" fill="none" {...props}>
      <Path
        d="M1.667 14h18.666a1.17 1.17 0 001.167-1.167 1.17 1.17 0 00-1.167-1.166H1.667A1.17 1.17 0 00.5 12.833 1.17 1.17 0 001.667 14zm0-5.833h18.666A1.17 1.17 0 0021.5 7a1.17 1.17 0 00-1.167-1.167H1.667A1.17 1.17 0 00.5 7a1.17 1.17 0 001.167 1.167zm-1.167-7a1.17 1.17 0 001.167 1.166h18.666A1.17 1.17 0 0021.5 1.167 1.17 1.17 0 0020.333 0H1.667A1.17 1.17 0 00.5 1.167z"
        fill={props.color}
      />
    </Svg>
  );
}

export default SvgIconMenu;
