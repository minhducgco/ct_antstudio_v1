import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function IconDeadLine(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.535.008L.008 1.535l2.177 2.178-.01 18.406 4.333-4.334h9.75l6.207 6.208 1.528-1.528L1.535.008zm20.14 15.61v-13H7.222L5.056.453h16.618c1.192 0 2.167.975 2.167 2.167v13c0 .975-.66 1.798-1.55 2.069l-2.068-2.07h1.451zm-13-4.333H6.507v2.167h2.166v-2.167zm10.833-3.25h-6.869l2.167 2.167h4.702V8.035zm-8.667-3.25h8.667v2.167h-7.952l-.715-.715V4.785zm-6.5 12.101l1.267-1.267h8.483l-5.417-5.417H6.508V8.035L4.34 5.87v11.017z"
        fill="#fff"
      />
    </Svg>
  );
}

export default IconDeadLine;
