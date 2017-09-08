import React from 'react'
import PropTypes from 'prop-types'
import ProductsCard from './ProductsCard'
import ButtonLink from '../../presentation/ButtonLink'
import {withRouter} from 'react-router-dom'

const propTypes = {
  domainData: PropTypes.object.isRequired
}

const ProductsList = (props) =>
  <div>
    <ButtonLink to='products/add' isPrimary>Add Product</ButtonLink>
    <p>Hello from products list</p>
    {
      props.domainData.products.map((product) =>
        <ProductsCard
          product={product}
          key={product._id}
          onDelete={() => props.domainData.deleteProduct(product)}
          onEdit={() => props.history.push(`/products/edit/${product._id}`)}
        />
      )
    }
  </div>

ProductsList.propTypes = propTypes

export default withRouter(ProductsList)
