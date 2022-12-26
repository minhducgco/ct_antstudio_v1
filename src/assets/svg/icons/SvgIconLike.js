import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
      <Path
        opacity={props.isLike === true ? 1 : 0.6}
        d="M17.5 6.667h-5.258l.791-3.808.025-.267c0-.342-.141-.659-.366-.884l-.884-.875-5.483 5.492A1.63 1.63 0 005.833 7.5v8.334c0 .916.75 1.666 1.667 1.666H15c.692 0 1.283-.416 1.533-1.017l2.517-5.875c.075-.191.117-.391.117-.608V8.334c0-.917-.75-1.667-1.667-1.667zm0 3.333L15 15.834H7.5V7.5l3.617-3.616-.925 4.45H17.5V10zM.833 7.5h3.334v10H.833v-10z"
        fill={props.color}
      />
    </Svg>
  );
}

export default SvgComponent;
