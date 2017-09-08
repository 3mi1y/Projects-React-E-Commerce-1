const getAllProducts = (callback) => {
  const options = {
    method: 'GET'
  }

  fetch('/api/products', options)
    .then(response => response.json())
    .then(json => callback(json.data))
}

const addProduct = (newProduct, callback) => {
  const headers = new Headers({
    'Content-Type': 'application/json'
  })

  const options = {
    headers: headers,
    method: 'POST',
    body: JSON.stringify(newProduct)
  }

  fetch('/api/products', options)
    .then(response => response.json())
    .then(json => callback(json.data))
}

const deleteProduct = (productId, callback) => {
  const options = {
    method: 'DELETE'
  }

  fetch(`/api/products/${productId}`, options)
    .then(response => response.json())
    .then(json => callback(json.data))
}

const editProduct = (product, callback) => {
  const headers = new Headers({
    'Content-Type': 'application/json'
  })

  const options = {
    headers: headers,
    method: 'PUT',
    body: JSON.stringify()
  }

  fetch(`/api/products/${product._id}`, options)
    .then(response => response.json())
    .then(json => callback(json.data))
}

export {getAllProducts, addProduct, deleteProduct, editProduct}
