import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg width={25} height={24} viewBox="0 0 25 24" fill="none" {...props}>
      <G clipPath="url(#clip0)" fill={props.color}>
        <Path d="M18.25 7L14.5 3.25 4.65 13.1c-.1.1-.15.22-.15.36v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L18.25 7zm2.96-2.96a.996.996 0 000-1.41L18.87.29a.996.996 0 00-1.41 0L15.5 2.25 19.25 6l1.96-1.96zM2.5 20h20c1.1 0 2 .9 2 2s-.9 2-2 2h-20c-1.1 0-2-.9-2-2s.9-2 2-2z" />
      </G>
      <Defs>
        <ClipPath id="clip0">
          <Path
            fill={props.color}
            transform="translate(.5)"
            d="M0 0H24V24H0z"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgComponent;
