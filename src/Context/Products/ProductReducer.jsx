import { GET_PRODUCTS, GET_PRODUCT, ADD_TO_CART } from "../types";

export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        productsArray: payload,
      };
    case GET_PRODUCT:
      return {
        ...state,
        selectedProduct: payload,
      };
    case ADD_TO_CART:
      return {
        ...state,
        cartArray: payload,
      };
    default:
      return state;
  }
};
