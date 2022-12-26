import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={17} height={19} viewBox="0 0 17 19" fill="none" {...props}>
      <Path
        d="M15.81 8.037L2.983.571a1.761 1.761 0 00-1.76-.02c-.268.152-.49.37-.645.634a1.69 1.69 0 00-.231.868v14.92c0 .304.081.602.236.864.154.262.377.48.645.63a1.769 1.769 0 001.755-.012L15.813 11c.263-.152.48-.369.63-.628a1.698 1.698 0 000-1.706 1.733 1.733 0 00-.63-.628h-.003z"
        fill={props.color}
      />
    </Svg>
  );
}

export default SvgComponent;
