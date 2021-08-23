import { combineReducers } from "redux";
//action types
import {
  UPDATE_PRODUCTS,
  UPDATE_PRODUCT_IN_LIST,
  DELETE_PRODUCT_FROM_LIST,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_PRODUCT_TO_LIST,
} from "../actions/actionTypes";

//Initial state
const initialProductsState = {
  list: [],
  cart: [],
  showCart: false,
};

//reducer for produncts related actions
export function products(state = initialProductsState, action) {
  switch (action.type) {
    //fetched products store in the list
    case UPDATE_PRODUCTS:
      return {
        ...state,
        list: action.products,
      };

    //add new product in the list
    case ADD_PRODUCT_TO_LIST:
      return {
        ...state,
        list: [action.product, ...state.list],
      };

    //update product in the list
    case UPDATE_PRODUCT_IN_LIST:
      const index = state.list.findIndex(
        (product) => product.id === action.product.id
      );
      if (index !== -1) {
        state.list[index] = action.product;
      }
      return {
        ...state,
        list: state.list,
      };

    //delete the product from the list
    case DELETE_PRODUCT_FROM_LIST:
      const filteredList = state.list.filter(
        (product) => product.title !== action.product.title
      );

      const filterCart = state.cart.filter(
        (product) => product.title !== action.product.title
      );

      return {
        ...state,
        list: filteredList,
        cart:filterCart
      };

    //add product in the cart
    case ADD_TO_CART:
      return {
        ...state,
        cart: [action.product, ...state.cart],
      };

    //remove product from the cart
    case REMOVE_FROM_CART:
      const filteredCart = state.cart.filter(
        (product) => product.title !== action.product.title
      );

      return {
        ...state,
        cart: filteredCart,
      };

    default:
      return state;
  }
}

//function which combines all the reducers
export default combineReducers({
  products,
});
