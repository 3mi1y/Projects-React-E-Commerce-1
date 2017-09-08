import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  product: PropTypes.object.isRequired,
  onNameChanged: PropTypes.func.isRequired,
  onCategoryChanged: PropTypes.func.isRequired,
  onImageChanged: PropTypes.func.isRequired,
  onPriceChanged: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
}

const EditProductForm = (props) =>
  <form onSubmit={props.onSubmit} >
    <label>Product Name:</label>
    <input type='text' value={props.product.name} onChange={props.onNameChanged} />

    <label>Category</label>
    <input type='text' value={props.product.category} onChange={props.onCategoryChanged} />

    <label>Image Url</label>
    <input type='text' value={props.product.image} onChange={props.onImageChanged} />

    <label>Price $$$$$$</label>
    <input type='number' value={props.product.price} onChange={props.onPriceChanged} />
    <input
      type='submit'
      value='Submit'
      disabled={!props.product.name || !props.product.category || !props.product.image || props.product.price <= 0}
    />
    <button type='button' onClick={props.onCancel}>Cancel</button>
  </form>

EditProductForm.propTypes = propTypes

export default EditProductForm
