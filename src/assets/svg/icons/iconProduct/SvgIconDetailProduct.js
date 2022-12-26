import * as React from 'react';
import Svg, {Circle, G, Path, Defs, ClipPath} from 'react-native-svg';

const SvgIconDetailProduct = props => (
  <Svg
    width={109}
    height={109}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Circle cx={54.5} cy={54.5} r={54.5} fill="#F8F8F8" />
    <G clipPath="url(#a)">
      <G clipPath="url(#b)">
        <Path
          d="M56.304 59.872v12.692c0 1.163.952 2.115 2.115 2.115h12.692a2.122 2.122 0 0 0 2.115-2.115V59.872a2.122 2.122 0 0 0-2.115-2.115H58.419a2.122 2.122 0 0 0-2.115 2.115ZM37.266 74.679h12.692a2.122 2.122 0 0 0 2.115-2.115V59.872a2.122 2.122 0 0 0-2.115-2.115H37.266a2.122 2.122 0 0 0-2.115 2.115v12.692c0 1.163.952 2.115 2.115 2.115Zm-2.115-35.96v12.692c0 1.163.952 2.115 2.115 2.115h12.692a2.121 2.121 0 0 0 2.115-2.115V38.719a2.121 2.121 0 0 0-2.115-2.115H37.266a2.121 2.121 0 0 0-2.115 2.115Zm27.393-3.385-8.99 8.97a2.107 2.107 0 0 0 0 2.982l8.99 8.99a2.106 2.106 0 0 0 2.983 0l8.99-8.99a2.107 2.107 0 0 0 0-2.983l-8.97-8.968a2.132 2.132 0 0 0-3.003 0Z"
          fill="#C3002F"
        />
      </G>
    </G>
    <Defs>
      <ClipPath id="a">
        <Path
          fill="#fff"
          transform="translate(28.37 26.877)"
          d="M0 0h53.753v53.753H0z"
        />
      </ClipPath>
      <ClipPath id="b">
        <Path
          fill="#fff"
          transform="translate(29.863 28.37)"
          d="M0 0h50.767v50.767H0z"
        />
      </ClipPath>
    </Defs>
  </Svg>
);

export default SvgIconDetailProduct;
