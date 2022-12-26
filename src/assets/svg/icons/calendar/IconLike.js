import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function IconLike(props) {
  return (
    <Svg
      width={28}
      height={26}
      viewBox="0 0 28 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.25 9.25h-7.887l1.187-5.713.037-.4c0-.512-.212-.987-.55-1.325L16.713.5 8.488 8.738A2.444 2.444 0 007.75 10.5V23c0 1.375 1.125 2.5 2.5 2.5H21.5a2.483 2.483 0 002.3-1.525l3.775-8.813a2.47 2.47 0 00.175-.912v-2.5c0-1.375-1.125-2.5-2.5-2.5zm0 5L21.5 23H10.25V10.5l5.425-5.425-1.388 6.675H25.25v2.5zm-20-3.75h-5v15h5v-15z"
        fill="#fff"
      />
    </Svg>
  );
}

export default IconLike;
