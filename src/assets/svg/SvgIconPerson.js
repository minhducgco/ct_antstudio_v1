import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import normalize from 'react-native-normalize';

function SvgComponent({fill}) {
  return (
    <Svg
      width={normalize(33)}
      height={normalize(33)}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M35.75 28a4.25 4.25 0 0 1 4.245 4.043l.005.206V33c0 3.755-1.942 6.567-4.92 8.38C32.15 43.163 28.214 44 24 44s-8.15-.837-11.08-2.62c-2.888-1.758-4.801-4.455-4.915-8.041L8 33v-.751a4.25 4.25 0 0 1 4.044-4.244L12.25 28h23.5ZM24 4c5.523 0 10 4.477 10 10s-4.477 10-10 10-10-4.477-10-10S18.477 4 24 4Z"
        fill={fill}
        fillRule="nonzero"
      />
    </Svg>
  );
}

export default SvgComponent;
