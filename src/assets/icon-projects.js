import React from "react";

export default (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon icon-tabler icon-tabler-box-multiple"
    width="16"
    height="16"
    viewBox="0 0 22 22"
    // stroke-width="2"
    stroke="currentColor"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
    opacity={props.opacity || ""}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <rect stroke="none" fill={props.fill || "#9FA2B4"} x="7" y="3" width="14" height="14" rx="2"></rect>
    <path stroke="#9FA2B4" d="M17 17v2a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2"></path>
  </svg>
);
