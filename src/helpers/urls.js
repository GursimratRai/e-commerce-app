// base url
const API_ROOT = 'https://my-json-server.typicode.com/GursimratRai/json-server';

export const APIUrls = {
  //url for fetching all the products 
  fetchProducts: () => `${API_ROOT}/products`,
  //url for deleting the product from the DB
  deleteProduct: (id) => `${API_ROOT}/products/${id}`,
  //url for adding new product in the DB
  addProduct : () => `${API_ROOT}/products`,
  //url for updating the product in the DB
  updateProduct : (id)=> `${API_ROOT}/products/${id}`
};
