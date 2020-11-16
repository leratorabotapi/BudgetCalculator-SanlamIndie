import * as React from "react";

function SvgPlus(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M25.333 17.333h-8v8h-2.666v-8h-8v-2.666h8v-8h2.666v8h8v2.666z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgPlus;
