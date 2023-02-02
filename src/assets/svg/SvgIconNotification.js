import * as React from 'react';
import Svg, {Path, G} from 'react-native-svg';
import normalize from 'react-native-normalize';

function SvgComponent({fill}) {
  return (
    <Svg
      width={normalize(32)}
      height={normalize(32)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <G fillRule="evenodd" clipRule="evenodd">
        <Path
          d="M14.802 19.832a.76.76 0 0 1 .742 1.122 3.132 3.132 0 0 1-.841.966c-.353.272-.763.48-1.203.62-.44.141-.907.212-1.376.212-.469 0-.936-.07-1.376-.211-.44-.14-.85-.35-1.202-.621a3.13 3.13 0 0 1-.841-.966.76.76 0 0 1 .741-1.122c.193.019 1.697.166 2.678.166.981 0 2.486-.147 2.678-.166Z"
          fill={fill}
        />
        <Path
          d="M8.529 2.088a8.643 8.643 0 0 1 7.213-.1l.205.09c2.406 1.07 3.946 3.384 3.946 5.932v1.263c0 1.016.23 2.019.675 2.94l.265.55c1.22 2.527-.368 5.48-3.217 5.987l-.161.028a30.5 30.5 0 0 1-10.665 0c-2.887-.513-4.415-3.584-3.018-6.066L4 12.307c.56-.996.854-2.11.854-3.242V7.792c0-2.418 1.424-4.627 3.676-5.704Z"
          fill={fill}
        />
      </G>
    </Svg>
  );
}

export default SvgComponent;
