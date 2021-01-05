import React from 'react';
import {Svg, Path} from 'react-native-svg';
import {scale} from '../scale';

export default function BackSvg({size = 1, color, ...props}) {
  return (
    <Svg
      id="Group_2447"
      width={scale(24 * size)}
      height={scale(24 * size)}
      viewBox="0 0 24 24"
      {...props}>
      <Path
        id="Path_2798"
        data-name="Path 2798"
        d="M0,0H24V24H0Z"
        fill="none"
      />
      <Path
        id="Path_2799"
        data-name="Path 2799"
        d="M7.828,11H20v2H7.828l5.364,5.364-1.414,1.414L4,12l7.778-7.778,1.414,1.414Z"
        fill={color || '#232332'}
        opacity="0.8"
      />
    </Svg>
  );
}
