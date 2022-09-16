import React, { useReducer } from "react";
import axios from "axios";

import ProductContext from "./ProductContext";
import ProductReducer from "./ProductReducer";

import { GET_PRODUCTS, GET_PRODUCT } from "../types";

const ProductState = (props) => {
  const initialState = {
    productsArray: [],
    selectedProduct: null,
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

  return (
    <ProductContext.Provider
      value={{
        productsArray: state.productsArray,
        selectedProduct: state.selectedProduct,
        getProducts,
        getProduct,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
