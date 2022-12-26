import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={16} height={13} viewBox="0 0 16 13" fill="none" {...props}>
      <Path
        opacity={0.6}
        d="M9.667 3.5V.167L15.5 6l-5.833 5.833V8.416C5.5 8.416 2.583 9.75.5 12.666 1.333 8.5 3.833 4.333 9.667 3.5z"
        fill={props.color}
      />
    </Svg>
  );
}

export default SvgComponent;
