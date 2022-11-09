import React from 'react'
import PropTypes from 'prop-types'

import '../styles/globals.css'
import "../utils/starwars-glyphicons/css/starwars-glyphicons.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
}


