import React from 'react'
import Home from '../pages/Home'
import About from '../pages/About'
import ProductsPage from '../pages/products/ProductsPage'
import Auth from '../pages/auth/AuthPage'
import {Route, Switch} from 'react-router-dom'
import * as AppPropTypes from '../../lib/propTypes'

const propTypes = {
  domainData: AppPropTypes.domainData
}

const Main = (props) =>
  <main>
    <Route path='/' exact component={Home} />
    <Route path='/about' component={About} />
    <Route path='/products' render={() => <ProductsPage domainData={props.domainData} />} />
    <Route path='/auth' render={() => <Auth domainData={props.domainData} />} />
  </main>

Main.propTypes = propTypes

export default Main
