import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  name: PropTypes.string.isRequired,
  onNameChanged: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
  onCategoryChanged: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  onImageChanged: PropTypes.func.isRequired,
  price: PropTypes.number.isRequired,
  onPriceChanged: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
}

const AddProductForm = (props) =>
  <form onSubmit={props.onSubmit} >
    <label>Product Name</label>
    <input type='text' value={props.name} onChange={props.onNameChanged} />

    <label>Category</label>
    <input type='text' value={props.category} onChange={props.onCategoryChanged} />

    <label>Image Url</label>
    <input type='text' value={props.image} onChange={props.onImageChanged} />

    <label>Price $$$$$$</label>
    <input type='number' value={props.price} onChange={props.onPriceChanged} />

    <input
      type='submit'
      value='Submit'
      disabled={
        !props.name || !props.category || !props.image || !props.price
      }
    />
    <button type='button' onClick={props.onCancel}>Cancel</button>
  </form>

AddProductForm.propTypes = propTypes

export default AddProductForm
