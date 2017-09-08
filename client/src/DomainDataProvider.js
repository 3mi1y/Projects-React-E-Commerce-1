import React, {Component} from 'react'
import Layout from './components/structure/Layout'
import * as ServerApi from './lib/serverApi'

class DomainDataProvider extends Component {
  state = {
    isLoaded: false,
    products: []
  }

  componentDidMount () {
    this.getAllProducts()
  }

  getAllProducts = () =>
    ServerApi.getAllProducts(products =>
      this.setState({
        isLoaded: true,
        products
      }))

  addProduct = (newProduct) => {
    ServerApi.addProduct(newProduct, this.getAllProducts)
  }

  deleteProduct = (product) => {
    ServerApi.deleteProduct(product._id, this.getAllProducts)
  }

  editProduct = (product) => {
    console.log("Product from dataprovider: ", product)
    ServerApi.editProduct(product, this.getAllProducts)
  }

  render () {
    const domainData = {
      isLoaded: this.state.isLoaded,
      products: this.state.products,
      addProduct: this.addProduct,
      deleteProduct: this.deleteProduct,
      editProduct: this.editProduct
    }

    return (
      this.state.isLoaded ? <Layout domainData={domainData} /> : null
    )
  }
}

export default DomainDataProvider
