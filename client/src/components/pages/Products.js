import React from 'react'
import * as AppPropTypes from '../../lib/propTypes'

const propTypes = {
  domainData: AppPropTypes.domainData
}

const Products = ({domainData}) =>
  <div>
    <h1>Products</h1>
    <p>Number of Products: {domainData.products.length}</p>
  </div>

Products.propTypes = propTypes

export default Products
