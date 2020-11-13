import React from 'react'
import PropTypes from 'prop-types'
import {
  Couch,
} from '../imagesfolder'

const Image = ({ name, heightOfImage, imageWidth }) => {
  let content
  switch (name) {
    case 'couch':
      content = <Couch />
      break


    default:
      break
  }

  let imageHeight
  switch (heightOfImage) {
    case 'small':
      imageHeight = 10
      break
    case 'medium':
      imageHeight = 16
      break
    case 'large':
      imageHeight = 250
      break

    default:
      break
  }



  return (
    <div
      style={{
        fontSize: `${imageHeight}px`,
        height: `${imageHeight}px`,
        width: `${imageWidth}px`,
      }}
    >
      {content}
    </div>
  )
}

Image.propTypes = {
  /**
   * name of the image
   */
  name: PropTypes.string.isRequired,
  /**
   * size of the image to display
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
}

Image.defaultProps = {
  size: 'medium',
}

export default Image
