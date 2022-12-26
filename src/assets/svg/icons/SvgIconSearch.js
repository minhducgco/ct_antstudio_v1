import * as React from 'react';
import normalize from 'react-native-normalize';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={normalize(25)}
      height={normalize(25)}
      viewBox="0 0 16 16"
      fill="none"
      {...props}>
      <Path
        opacity={0.3}
        d="M14.909 13.733L10.274 9.1c.942-1.292 1.358-2.983.817-4.783C10.525 2.458 8.95 1 7.05.617A5.426 5.426 0 00.617 7.05c.383 1.908 1.841 3.483 3.7 4.042 1.8.541 3.491.125 4.783-.817l4.633 4.633a.83.83 0 101.175-1.175zM2.166 5.917a3.745 3.745 0 013.75-3.75 3.745 3.745 0 013.75 3.75 3.745 3.745 0 01-3.75 3.75 3.745 3.745 0 01-3.75-3.75z"
        fill={props.color}
      />
    </Svg>
  );
}

export default SvgComponent;
