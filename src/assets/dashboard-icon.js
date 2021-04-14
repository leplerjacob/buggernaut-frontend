import * as React from "react";
import {StyleSheet, css} from 'aphrodite';


// Animate svg sources: 
// https://www.youtube.com/watch?v=LuWdeuPMHps
// https://www.youtube.com/watch?v=BIpKF_CMhu8
// https://github.com/Khan/aphrodite

// const translateKeyframes = {
//     "to": {
//         "stroke-dashoffset": 0
//     }
// }

// const styles = StyleSheet.create({

//     circle: {
//         ":hover": {
//             animationName: {
//                 "25%": {
//                     transform: "scale(1.05) rotate(100deg)"
//                 }
//             },
//             animationDuration: "4s",
//             animationIterationCount: "infinite"
        
//         },
//     }
// })

export default (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-dashboard"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z"/>
      <circle stroke="#ffa500" cx="12" cy="13" r="2" />
      <line stroke="#ffa500" x1="13.45" y1="11.55" x2="15.5" y2="9.5" />
      <path stroke="#ffa500" d="M6.4 20a9 9 0 1 1 11.2 0z" />
    </svg>
  );
};
