import { APIUrls } from '../helpers/urls';
import {UPDATE_PRODUCTS} from './actionTypes';

export function fetchProducts() {
    return (dispatch) => {
      //Connect-APP backend API.
      const url = APIUrls.fetchProducts();
      fetch(url)
        .then((response) => {
          // console.log('response',response.json());
          return response.json();
        })
        .then((data) => {
          dispatch(updateProducts(data));
        });
    };
  }
  
  export function updateProducts(products) {
      return {
          type:UPDATE_PRODUCTS,
          products
      }
  }
  