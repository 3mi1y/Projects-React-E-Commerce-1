import React from 'react'
import {Route} from 'react-router-dom'
import ProductsList from './ProductsList'
import AddProduct from './AddProductContainer.js'
import EditProductForm from './EditProductContainer'
import * as AppPropTypes from '../../../lib/propTypes'

const propTypes = {
  domainData: AppPropTypes.domainData
}

const styles = {
  productsContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  header: {
    fontFamily: 'monospace',
    lineSpacing: '3px'
  }
}

const ProductsPage = (props) =>
  <div style={styles.productsContainer}>
    <h1 style={styles.header}>We Believe in Quality Over Quantity</h1>
    <Route path='/products' exact render={() => <ProductsList domainData={props.domainData} />} />
    <Route path='/products/add' render={() => <AddProduct domainData={props.domainData} />} />
    <Route path='/products/edit/:productId' render={() => <EditProductForm domainData={props.domainData} />} />
  </div>

ProductsPage.propTypes = propTypes

export default ProductsPage
