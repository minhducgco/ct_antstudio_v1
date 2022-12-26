import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgIconProduct = props => (
  <Svg
    width={21}
    height={19}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M17.358.611 20.5 6.167h-3.51L14.587.61h2.77Zm-4.445 0 2.403 5.556H5.684L8.087.61h4.826Zm-9.27 0h2.77L4.01 6.167H.5L3.642.61ZM.5 7.278h3.497l4.27 8.74c.052.107-.093.204-.173.114L.5 7.278Zm5.146 0h9.708l-4.757 11.048c-.034.084-.156.084-.19 0L5.645 7.278Zm7.087 8.74 4.27-8.74H20.5l-7.594 8.85c-.08.094-.225-.003-.173-.11Z"
      fill="#C3002F"
    />
  </Svg>
);

export default SvgIconProduct;
