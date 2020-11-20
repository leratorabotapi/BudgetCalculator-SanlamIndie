import * as React from 'react'

function SvgInsertChart (props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 3h14c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2zm2 14h2v-7H7v7zm6 0h-2V7h2v10zm2 0h2v-4h-2v4z"
        fill="currentColor"
      />
    </svg>
  )
}

export default SvgInsertChart
