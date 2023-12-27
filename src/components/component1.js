import React from 'react'

import PropTypes from 'prop-types'

import './component1.css'

const Component1 = (props) => {
  return (
    <div className="component1-container">
      <img
        alt={props.imagealt}
        src={props.imagesrc}
        className="component1-image"
      />
    </div>
  )
}

Component1.defaultProps = {
  imagealt: 'image',
  imagesrc: '/external/Logos/dpbh-200h.png',
}

Component1.propTypes = {
  imagealt: PropTypes.string,
  imagesrc: PropTypes.string,
}

export default Component1
