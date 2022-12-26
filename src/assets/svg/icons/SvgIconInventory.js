import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgIconInventory = props => (
  <Svg
    width={19}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M10 12.393v6c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1Zm-9 7h6c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1Zm-1-17v6c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1Zm12.95-1.6L8.7 5.033a.996.996 0 0 0 0 1.41l4.25 4.25c.39.39 1.02.39 1.41 0l4.25-4.25a.996.996 0 0 0 0-1.41L14.37.792c-.39-.39-1.03-.39-1.42 0Z"
      fill="#C3002F"
    />
  </Svg>
);

export default SvgIconInventory;
