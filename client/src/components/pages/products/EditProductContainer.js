import React from 'react'
import * as AppPropTypes from '../../../lib/propTypes'
import {withRouter} from 'react-router-dom'
import EditProductForm from './EditProductForm'
import PropTypes from 'prop-types'

class EditProductFormContainer extends React.Component {
  static propTypes = {
    domainData: AppPropTypes.domainData,
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  constructor (props) {
    super()
    const productId = props.match.params.productId
    const product = props.domainData.products.find(p => p._id === productId)
    console.log(product)
    this.state = {
      _id: product._id,
      name: product.name,
      category: product.category,
      image: product.image,
      price: product.price
    }
  }

  onNameChanged = (event) => this.setState({ name: event.target.value })
  onCategoryChanged = (event) => this.setState({ category: event.target.value })
  onImageChanged = (event) => this.setState({ image: event.target.value })
  onPriceChanged = (event) => this.setState({ price: event.target.value })

  onSubmit = (event) => {
    event.preventDefault()
    console.log('State in container', this.state)
    this.props.domainData.editProduct(this.state)
    this.props.history.push('/products')
  }

  onCancel = () => {
    this.props.history.push('/products')
  }

  render () {
    return <EditProductForm
      product={this.state}
      onNameChanged={this.onNameChanged}
      onCategoryChanged={this.onCategoryChanged}
      onImageChanged={this.onImageChanged}
      onPriceChanged={this.onPriceChanged}
      onSubmit={this.onSubmit}
      onCancel={this.onCancel}
    />
  }
}

export default withRouter(EditProductFormContainer)
