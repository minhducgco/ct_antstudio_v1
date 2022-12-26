import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M12 .333A11.656 11.656 0 00.333 12 11.656 11.656 0 0012 23.667 11.656 11.656 0 0023.667 12 11.656 11.656 0 0012 .333zm5.005 15.039c.455.455.455 1.19 0 1.645a1.162 1.162 0 01-1.645 0L12 13.645l-3.372 3.372a1.162 1.162 0 01-1.645 0 1.162 1.162 0 010-1.645L10.355 12 6.995 8.63a1.162 1.162 0 010-1.645 1.162 1.162 0 011.645 0L12 10.354l3.372-3.372a1.162 1.162 0 011.645 0c.455.456.455 1.19 0 1.646L13.645 12l3.36 3.372z"
        fill={props.color}
      />
    </Svg>
  );
}

export default SvgComponent;
