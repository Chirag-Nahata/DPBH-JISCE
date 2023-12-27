import React from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className="app-component-container">
      <img
        alt={props.imagealt}
        src={props.imagesrc}
        className="app-component-image"
      />
    </div>
  )
}

AppComponent.defaultProps = {
  imagesrc: '/external/Logos/jis%20logo-200h.png',
  imagealt: 'image',
}

AppComponent.propTypes = {
  imagesrc: PropTypes.string,
  imagealt: PropTypes.string,
}

export default AppComponent
