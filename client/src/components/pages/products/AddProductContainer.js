import React from 'react'
import * as AppPropTypes from '../../../lib/propTypes'
import AddProductForm from './AddProductForm'
import {withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'

class AddProductContainer extends React.Component {
  static propTypes = {
    domainData: AppPropTypes.domainData,
    history: PropTypes.object.isRequired
  }

  state = {
    name: '',
    image: '',
    price: '',
    category: ''
  }

  onNameChanged = (event) => this.setState({ name: event.target.value })
  onImageChanged = (event) => this.setState({ image: event.target.value })
  onCategoryChanged = (event) => this.setState({ category: event.target.value })
  onPriceChanged = (event) => {
    const price = event.target.value.replace(/^0+/, '').replace(/^\./, '0.') || '0'
    const isNumberValid = /^\d*\.?\d{0,2}?$/.test(price)
    if (isNumberValid) {
      this.setState({price})
    }
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.domainData.addProduct(this.state)
    // redirect back to the list of products
    this.props.history.push('/products')
  }

  onCancel = () => {
    this.props.history.push('/products')
  }

  render () {
    return <AddProductForm
      name={this.state.name}
      onNameChanged={this.onNameChanged}
      image={this.state.image}
      onImageChanged={this.onImageChanged}
      price={this.state.price}
      onPriceChanged={this.onPriceChanged}
      category={this.state.category}
      onCategoryChanged={this.onCategoryChanged}
      onSubmit={this.onSubmit}
      onCancel={this.onCancel}
    />
  }
}

export default withRouter(AddProductContainer)
