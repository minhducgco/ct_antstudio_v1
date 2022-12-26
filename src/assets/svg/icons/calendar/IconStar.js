import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function IconStar(props) {
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
        d="M17.747 9.16l9.586.826-7.266 6.307 2.173 9.373L14 20.693l-8.24 4.973 2.187-9.373-7.28-6.307 9.586-.813L14 .333l3.747 8.827zm-8.76 12.066L14 18.2l5.027 3.04-1.334-5.707 4.427-3.84-5.84-.507L14 5.8l-2.267 5.373-5.84.507 4.427 3.84-1.333 5.706z"
        fill="#fff"
      />
    </Svg>
  );
}

export default IconStar;
