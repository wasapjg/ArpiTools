import { GET_PRODUCTS, GET_PRODUCT } from "../types";

export default (state, action) => {
  const { payload, type } = action

  switch(type) {
    case GET_PRODUCTS: 
    return {
      ...state,
      productsArray: payload
    }
    case GET_PRODUCT:
      return {
        ...state,
        selectedProduct: payload,
      }
      default: 
      return state
  }
}