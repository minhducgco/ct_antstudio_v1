import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import normalize from 'react-native-normalize';

function SvgComponent({fill}) {
  return (
    <Svg
      width={normalize(32)}
      height={normalize(32)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M16 2H8C5.24 2 3 4.24 3 7v10c0 2.76 2.24 5 5 5h8c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5ZM8.86 18.63c-.19.19-.44.29-.7.29a.99.99 0 0 1-.71-.29 1 1 0 0 1-.3-.71c0-.26.11-.52.3-.71.09-.09.2-.16.32-.21.25-.1.52-.1.77 0 .06.02.12.05.17.09.06.03.11.08.15.12.19.19.3.45.3.71a1 1 0 0 1-.3.71Zm-1.71-4.71c0-.13.03-.26.08-.38A.998.998 0 0 1 8.54 13c.06.02.12.05.17.09.06.03.11.08.15.12.09.1.17.2.22.33.05.12.07.25.07.38a.99.99 0 0 1-1.38.92 1 1 0 0 1-.62-.92Zm5.71 4.71c-.09.09-.2.16-.32.21a.984.984 0 0 1-1.09-.21 1 1 0 0 1-.3-.71c0-.07.01-.13.02-.2l.06-.18.09-.18c.04-.05.08-.1.13-.15a1.017 1.017 0 0 1 1.41 0c.19.19.29.45.29.71 0 .27-.1.52-.29.71Zm0-4a.99.99 0 0 1-.71.29c-.26 0-.51-.1-.7-.29a1 1 0 0 1-.3-.71c0-.26.11-.52.3-.71.37-.37 1.04-.37 1.41 0 .09.1.17.2.22.33.05.12.07.25.07.38 0 .27-.1.52-.29.71ZM9 10.46c-1.03 0-1.88-.84-1.88-1.88v-1c0-1.03.84-1.88 1.88-1.88h6c1.03 0 1.88.84 1.88 1.88v1c0 1.03-.84 1.88-1.88 1.88H9Zm7.86 8.17a.99.99 0 0 1-1.09.21.988.988 0 0 1-.32-.21.99.99 0 0 1-.29-.71c0-.26.1-.52.29-.71.27-.28.72-.36 1.09-.21.12.05.23.12.32.21.19.19.29.45.29.71 0 .27-.1.52-.29.71Zm.22-4.33a.99.99 0 0 1-.93.62c-.26 0-.51-.1-.7-.29a1 1 0 0 1-.3-.71c0-.26.11-.52.3-.71.37-.37 1.04-.37 1.41 0 .19.19.3.45.3.71 0 .13-.03.26-.08.38Z"
        fill={fill}
      />
    </Svg>
  );
}

export default SvgComponent;
