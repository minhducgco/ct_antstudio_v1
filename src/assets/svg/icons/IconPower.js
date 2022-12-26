import themeStyle from '@styles/theme.style';
import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

function SvgIconOverTime(props) {
  return (
    <Svg
      width={50}
      height={50}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G clipPath="url(#clip0_2335_710)">
        <Path
          d="M30.78 0H19.22C7.111 0 0 7.58 0 18.876v12.252c0 11.594 7.43 18.876 19.22 18.876H30.78C42.569 50.004 50 42.722 50 31.128V18.876C50 7.58 42.888 0 30.78 0z"
          fill={themeStyle.MAIN_COLOR}
        />
        <Path
          d="M35.757 26.232c.352-3.797-1.27-7.236-3.959-9.421-1.048-.852-2.616-.123-2.616 1.225 0 .494.235.95.617 1.259a7.597 7.597 0 012.773 6.707c-.362 3.522-3.184 6.373-6.702 6.765-4.59.515-8.49-3.081-8.49-7.569a7.6 7.6 0 012.822-5.908c.382-.309.612-.764.612-1.254 0-1.333-1.543-2.087-2.581-1.255a10.792 10.792 0 00-4.037 8.417c0 6.217 5.28 11.229 11.596 10.773 5.222-.367 9.48-4.527 9.965-9.74zM25.003 12c.882 0 1.592.715 1.592 1.592v7.334a1.592 1.592 0 11-3.184 0v-7.334c0-.877.71-1.592 1.592-1.592z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_2335_710">
          <Path fill="#fff" d="M0 0H50V50H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgIconOverTime;
