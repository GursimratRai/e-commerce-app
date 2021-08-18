import { combineReducers } from "redux";
import {
  UPDATE_PRODUCTS,
  UPDATE_PRODUCT_IN_LIST,
  DELETE_PRODUCT_FROM_LIST,
  ADD_TO_CART,
  SET_SHOW_CART,
  REMOVE_FROM_CART,
  ADD_PRODUCT_TO_LIST,
} from "../actions/actionTypes";

const initialProductsState = {
  list: [],
  cart: [],
  showCart: false,
};

export function products(state = initialProductsState, action) {
  switch (action.type) {
    case UPDATE_PRODUCTS:
      return {
        ...state,
        list: action.products,
      };

    case ADD_PRODUCT_TO_LIST:
      return {
        ...state,
        list: [action.product, ...state.list],
      };

    case UPDATE_PRODUCT_IN_LIST:
       const index = state.list.findIndex((product)=> product.title === action.product.title);
       if(index !== -1){
           state.list[index] = action.product;
       } 
      return {
        ...state,
        list: state.list,
      };

    case DELETE_PRODUCT_FROM_LIST:
        const filteredList = state.list.filter(
            (product) => product.Title !== action.product.Title
          );
    
          return {
            ...state,
            cart: filteredList,
          };

    case ADD_TO_CART:
      return {
        ...state,
        cart: [action.product, ...state.cart],
      };

    case REMOVE_FROM_CART:
      const filteredCart = state.cart.filter(
        (product) => product.Title !== action.product.Title
      );

      return {
        ...state,
        cart: filteredCart,
      };

    case SET_SHOW_CART:
      return {
        ...state,
        showCart: action.value,
      };
    default:
      return state;
  }
}

export default combineReducers({
  products,
});
