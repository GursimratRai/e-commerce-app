//api urls
import { APIUrls } from "../helpers/urls";
//notifications
import { notify } from "../helpers/utils";
//action types
import {
  ADD_PRODUCT_TO_LIST,
  ADD_TO_CART,
  DELETE_PRODUCT_FROM_LIST,
  UPDATE_PRODUCT_IN_LIST,
  REMOVE_FROM_CART,
  UPDATE_PRODUCTS,
} from "./actionTypes";

//function for fetching / loading all products from an api
export function fetchProducts() {
  return async (dispatch) => {
    try {
      let url = await APIUrls.fetchProducts();
      let response = await fetch(url);
      let data = await response.json();
      dispatch(updateProducts(data));
    } catch (error) {
      notify("error", "Something went wrong !!!");
    }
  };
}

//action for updating products in list 
export function updateProducts(products) {
  return {
    type: UPDATE_PRODUCTS,
    products,
  };
}

//function for adding new product in the list
export function addNewProduct(product) {
  return async (dispatch) => {
    try {
      const url = APIUrls.addProduct();
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(product),
      });
      const data = await response.json();
      dispatch(addProductToList(data));
      notify("success", "New Product added Successfully");
    } catch {
      notify("error", "Something went wrong !!!");
    }
  };
}

//action for adding the new product
export function addProductToList(product) {
  return {
    type: ADD_PRODUCT_TO_LIST,
    product,
  };
}

//function for handling edit/updating of the product
export function updateProduct(product) {
  return async (dispatch) => {
    try {
      const url = APIUrls.updateProduct(product.id);
      const response = await fetch(url, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(product),
      });

      const data = await response.json();
      dispatch(updateProductToList(data));
      notify("success", "Product updated Successfully");
    } catch (error) {
      notify("error", "Something went wrong !!!");
    }
  };
}

//action for updating the  product in the list
export function updateProductToList(product) {
  return {
    type: UPDATE_PRODUCT_IN_LIST,
    product,
  };
}

//function for handling the deletion of the product from the list
export function deleteProduct(product) {
  return async (dispatch) => {
    try {
      const url = APIUrls.deleteProduct(product.id);
      await fetch(url, { method: "DELETE"});
      dispatch(removeProductFromList(product));
      notify("success", "Product Delete Successfully");
    } catch (error) {
      notify("error", "Something went wrong !!!");
    }
  };
}

//action for deleting the product
export function removeProductFromList(product) {
  return {
    type: DELETE_PRODUCT_FROM_LIST,
    product,
  };
}

//action for adding the product in the cart 
export function addToCart(product) {
  return {
    type: ADD_TO_CART,
    product,
  };
}

//action for removing the product from the cart
export function removeFromCart(product) {
  return {
    type: REMOVE_FROM_CART,
    product,
  };
}
