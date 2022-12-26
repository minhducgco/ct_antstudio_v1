import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgIconContact(props) {
  return (
    <Svg width={19} height={20} viewBox="0 0 19 20" fill="none" {...props}>
      <Path
        opacity={props.focused === true ? 1 : 0.5}
        d="M16.5 2h-1V1c0-.55-.45-1-1-1s-1 .45-1 1v1h-8V1c0-.55-.45-1-1-1s-1 .45-1 1v1h-1c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 3C11.43 5 13 6.57 13 8.5S11.43 12 9.5 12 6 10.43 6 8.5 7.57 5 9.5 5zm7 13h-14v-.23c0-.62.28-1.2.76-1.58A9.947 9.947 0 019.5 14c2.36 0 4.53.82 6.24 2.19.48.38.76.97.76 1.58V18z"
        fill={props.color}
      />
    </Svg>
  );
}

export default SvgIconContact;
