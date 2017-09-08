import React from 'react'
import Header from './header/Header'
import Footer from './Footer'
import Main from './Main'
import * as AppPropTypes from '../../lib/propTypes'

const propTypes = {
  domainData: AppPropTypes.domainData
}

const Layout = (props) => (
  <div id='layout'>
    <Header />
    <Main domainData={props.domainData} />
    <Footer />
  </div>
)

Layout.propTypes = propTypes

export default Layout
