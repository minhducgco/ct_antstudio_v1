import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={20} height={21} viewBox="0 0 20 21" fill="none" {...props}>
      <G clipPath="url(#clip0)">
        <Path
          d="M19.997 10.5c0-5.523-4.477-10-9.999-10S0 4.977 0 10.5s4.476 10 9.998 10c5.522 0 9.999-4.477 9.999-10z"
          fill="#4085F7"
        />
        <Path
          d="M14.586 10.154a.986.986 0 00-.986-.986h-1.397c.403-1.01.433-1.837.43-2.103 0-.029.007-.132.007-.155v-.046c-.03-.959-.323-1.253-.7-1.392a.7.7 0 00-.7.7v.07c-.004.24-.341.734-.341.734L8.33 9.574l-.043.053-.781 2.09.78 3.24c0 .097.08.177.179.177H13.3c.329 0 .608-.24.658-.565.19-1.244.627-4.13.627-4.415z"
          fill="#fff"
        />
        <Path
          d="M7.729 15.529h-1.76a.558.558 0 01-.558-.558V9.686c0-.308.25-.558.558-.558h1.76c.308 0 .558.25.558.558v5.285c0 .308-.25.558-.558.558z"
          fill="#48D8FF"
        />
        <Path
          d="M7.729 14.477h-1.76a.558.558 0 01-.558-.558v1.052c0 .308.25.558.558.558h1.76c.308 0 .558-.25.558-.558v-1.052c0 .309-.25.558-.558.558z"
          fill="#43C5FF"
        />
      </G>
      <Defs>
        <ClipPath id="clip0">
          <Path fill="#fff" transform="translate(0 .5)" d="M0 0H20V20H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgComponent;
