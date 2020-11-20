import * as React from 'react'

function SvgPerson (props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 8c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4zM4 18c0-2.66 5.33-4 8-4s8 1.34 8 4v2H4v-2z"
        fill="currentColor"
      />
    </svg>
  )
}

export default SvgPerson
