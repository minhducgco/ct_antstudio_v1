import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={17} height={20} viewBox="0 0 17 20" fill="none" {...props}>
      <Path
        d="M15.91 5.41L11.08.58C10.71.21 10.2 0 9.67 0H2.5C1.4 0 .51.9.51 2L.5 18c0 1.1.89 2 1.99 2H14.5c1.1 0 2-.9 2-2V6.83c0-.53-.21-1.04-.59-1.42zm-9.18 9.88l-2.12-2.12a.996.996 0 111.41-1.41l1.41 1.41 3.54-3.54a.996.996 0 111.41 1.41l-4.24 4.24c-.38.4-1.02.4-1.41.01zM10.5 7c-.55 0-1-.45-1-1V1.5L15 7h-4.5z"
        fill={props.color}
      />
    </Svg>
  );
}

export default SvgComponent;
