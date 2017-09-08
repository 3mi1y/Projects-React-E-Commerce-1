import React from 'react'
import * as AppPropTypes from '../../../lib/propTypes'
import PropTypes from 'prop-types'

const propTypes = {
  product: AppPropTypes.product,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired
}

const styles = {
  img: {
    maxWidth: '100%'
  }
}

const ProductsCard = (props) =>
  <div>
    <h3>{props.product.name}</h3>
    <img src={props.product.image} style={styles.img} />
    <p>{props.product.price}</p>
    <button onClick={props.onDelete}>Delete</button>
    <button onClick={props.onEdit}>Edit</button>
  </div>

ProductsCard.propTypes = propTypes

export default ProductsCard
