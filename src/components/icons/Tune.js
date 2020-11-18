import * as React from "react";

function SvgTune(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 9h2V7h4V5h-4V3h-2v6zM7 9v2H3v2h4v2h2V9H7zm6 10v2h-2v-6h2v2h8v2h-8zM3 19v-2h6v2H3zm18-8v2H11v-2h10zm-8-6H3v1.99h10V5z"
        fill="#fff"
      />
    </svg>
  );
}

export default SvgTune;
