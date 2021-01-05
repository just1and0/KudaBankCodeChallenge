import React from 'react';
import {Svg, Path} from 'react-native-svg';
import {scale} from '../scale';

export default function VideoSvg({size = 1, ...props}) {
  return (
    <Svg
      id="Group_2449"
      data-name="Group 2449"
      xmlns="http://www.w3.org/2000/svg"
      width={scale(24 * size)}
      height={scale(24 * size)}
      viewBox="0 0 24 24"
      {...props}>
      <Path
        id="Path_2802"
        data-name="Path 2802"
        d="M0,0H24V24H0Z"
        fill="none"
      />
      <Path
        id="Path_2803"
        data-name="Path 2803"
        d="M17,9.2l5.213-3.65A.5.5,0,0,1,23,5.96V18.04a.5.5,0,0,1-.787.41L17,14.8V19a1,1,0,0,1-1,1H2a1,1,0,0,1-1-1V5A1,1,0,0,1,2,4H16a1,1,0,0,1,1,1ZM5,8v2H7V8Z"
        fill="#232332"
        opacity="0.8"
      />
    </Svg>
  );
}
