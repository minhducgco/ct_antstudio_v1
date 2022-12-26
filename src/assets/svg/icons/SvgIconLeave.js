// import * as React from 'react';
// import Svg, { Path } from 'react-native-svg';

// function SvgIconLeave(props) {
//     return (
//         <Svg width={22} height={21} viewBox="0 0 22 21" fill="none" {...props}>
//             <Path
//                 d="M19.5 4h-4V2c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v1.17l13.98 13.98c0-.05.02-.1.02-.16V6c0-1.11-.89-2-2-2zm-6 0h-4V2h4v2zM2.31.81A.996.996 0 00.9.81C.5 1.2.5 1.83.89 2.22L2.8 4.13A1.98 1.98 0 001.51 6L1.5 17c0 1.11.89 2 2 2h14.17l1.61 1.61a.996.996 0 101.41-1.41L2.31.81z"
//                 fill={props.color}
//             />
//         </Svg>
//     );
// }

// export default SvgIconLeave;

import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgIconLeave = props => (
  <Svg
    width={22}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M21.756 14.232c.353-3.797-1.268-7.236-3.958-9.421-1.048-.853-2.616-.123-2.616 1.225 0 .494.235.95.617 1.259a7.597 7.597 0 0 1 2.773 6.707c-.362 3.522-3.184 6.373-6.702 6.765-4.59.515-8.49-3.081-8.49-7.569A7.6 7.6 0 0 1 6.202 7.29c.382-.309.612-.764.612-1.254 0-1.333-1.543-2.087-2.581-1.254a10.792 10.792 0 0 0-4.037 8.416c0 6.217 5.28 11.229 11.596 10.773 5.222-.367 9.48-4.527 9.964-9.74ZM11.003 0c.882 0 1.592.715 1.592 1.592v7.334a1.592 1.592 0 1 1-3.184 0V1.592C9.41.715 10.12 0 11.003 0Z"
      fill={props.color}
    />
  </Svg>
);

export default SvgIconLeave;
