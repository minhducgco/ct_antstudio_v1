import * as React from 'react';
import Svg, {
  G,
  Path,
  Rect,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={375}
      height={172}
      viewBox="-10  20 400 172"
      fill="none"
      {...props}>
      <G clipPath="url(#clip0)">
        <Path d="M0 0h375v233H0V0z" fill="url(#paint0_linear)" />
        <Rect
          width={165.182}
          height={134.739}
          rx={20}
          transform="matrix(.92988 .36786 -.58944 .80781 182.65 -47.138)"
          fill="#C4C4C4"
          opacity={0.1}
        />
        <Rect
          width={83.6255}
          height={97.6815}
          rx={20}
          transform="scale(1.1388 .83852) rotate(-45 12.66 57.4)"
          fill="#C4C4C4"
          opacity={0.1}
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1={-0.00000355045}
          y1={221.5}
          x2={375}
          y2={0.0000195031}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#C3002F" stopOpacity={0.67} />
          <Stop offset={0.614583} stopColor="#E7685E" />
          <Stop offset={0.989583} stopColor="#C3002F" />
        </LinearGradient>
        <ClipPath id="clip0">
          <Path
            d="M0 0h375v155.562c0 8.836-7.163 16-16 16H16c-8.837 0-16-7.164-16-16V0z"
            fill="#fff"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgComponent;
