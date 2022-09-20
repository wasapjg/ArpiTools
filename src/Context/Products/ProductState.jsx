import React, { useReducer } from "react";
import axios from "axios";

import ProductContext from "./ProductContext";
import ProductReducer from "./ProductReducer";

import { GET_PRODUCTS, GET_PRODUCT, ADD_TO_CART } from "../types";

const ProductState = (props) => {
  const initialState = {
    productsArray: [],
    selectedProduct: null,
    cartArray: [],
  };

  const [state, dispatch] = useReducer(ProductReducer, initialState);

  const getProducts = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products/");
      const data = res.data.products;
      dispatch({ type: GET_PRODUCTS, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  const getProduct = async (id) => {
    try {
      const res = await axios.get("https://dummyjson.com/products/" + id);
      const { data } = res;
      dispatch({ type: GET_PRODUCT, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  const addToCart = () => {
    try{
      const data = initialState.cartArray.push(initialState.selectedProduct)
      dispatch({ type: ADD_TO_CART, payload: data})
    } catch (error) {
      console.log(error);
    }
    // initialState.cartArray.push(initialState.selectedProduct)
    // console.log(initialState.cartArray)
  }

  return (
    <ProductContext.Provider
      value={{
        productsArray: state.productsArray,
        selectedProduct: state.selectedProduct,
        cartArray: state.cartArray,
        getProducts,
        getProduct,
        addToCart,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
