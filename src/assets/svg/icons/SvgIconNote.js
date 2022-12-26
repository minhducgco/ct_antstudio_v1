import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgIconNote(props) {
  return (
    <Svg width={19} height={20} viewBox="0 0 19 20" fill="none" {...props}>
      <Path
        d="M16.5 2h-4.18C11.9.84 10.8 0 9.5 0 8.2 0 7.1.84 6.68 2H2.5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7-.25c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75zm1 14.25h-5c-.55 0-1-.45-1-1s.45-1 1-1h5c.55 0 1 .45 1 1s-.45 1-1 1zm3-4h-8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1zm0-4h-8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1z"
        fill={props.color}
      />
    </Svg>
  );
}

export default SvgIconNote;
