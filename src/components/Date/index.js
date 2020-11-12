import React from 'react'
// used to parse date
import moment from 'moment'

function Date (date) {
  // parse Date
  // Uses momentJS plugin
  const str = date.date
  const dateFormat = moment(str)
  const dateComponent = dateFormat.utc().format('LL')

  return (
        <div>
            <p>{dateComponent}</p>
        </div>
  )
}

export default Date
