// const ajaxRequest = (method, url, body) => {
//   console.log(url, method, body)
//   const headers = new Headers({
//     'Content-Type': 'application/json'
//   })
//
//   const options = {
//     headers: headers,
//     method: method,
//     body: JSON.stringify(body)
//   }
//
//   return fetch(url, options)
//     .then(response => response.json())
//     .then(json => json.data)
// }
//
// const getAllProducts = () => ajaxRequest(`/api/products`, 'GET')
// const addProduct = (newProduct) => ajaxRequest('/api/products', 'POST', newProduct)
// const editProduct = (product) => ajaxRequest(`/api/products/${product._id}`, 'PUT', product)
// const deleteProduct = (productId) => ajaxRequest(`/api/products/${productId}`, 'DELETE')

const editProduct = (product) => {
  const headers = new Headers({
    'Content-Type': 'application/json'
  })

  const options = {
    headers: headers,
    method: 'PUT',
    body: JSON.stringify()
  }

  return fetch(`/api/products/${product._id}`, options)
    .then(response => response.json())
    .then(json => json.data)
}

const getAllProducts = () => {
  const options = {
    method: 'GET'
  }

  return fetch('/api/products', options)
    .then(response => response.json())
    .then(json => json.data)
}

const addProduct = (newProduct) => {
  const headers = new Headers({
    'Content-Type': 'application/json'
  })

  const options = {
    headers: headers,
    method: 'POST',
    body: JSON.stringify(newProduct)
  }

  return fetch('/api/products', options)
    .then(response => response.json())
    .then(json => json.data)
}

const deleteProduct = (productId) => {
  const options = {
    method: 'DELETE'
  }

  return fetch(`/api/products/${productId}`, options)
    .then(response => response.json())
    .then(json => json.data)
}

export {getAllProducts, addProduct, deleteProduct, editProduct}
