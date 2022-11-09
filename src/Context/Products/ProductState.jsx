import React, { useReducer, useRef } from "react";
import axios from "axios";
import config from "../../config";

import ProductContext from "./ProductContext";
import { RemoveCartContext } from "./ProductContext";
import ProductReducer from "./ProductReducer";

import { GET_PRODUCTS, GET_PRODUCT, ADD_TO_CART, DELETE_ITEM_CART, SUM_ALL, DELETE_ALL_CART, SERCH_PRODUCT, SERCH_VALUE, GET_USERS, GET_USER, GET_SELLERS, GET_SELLER } from "../types";
import { useCallback } from "react";

const ProductState = (props) => {
  const initialState = {
    constProductArray: [],
    productsArray: [],
    selectedProduct: null,
    cartArray: [],
    totalCart: {
      quantity: 0,
      total: 0,
    },
    usersArray: [],
    constUserArray: [] ,
    selectedUser: null,
    sellersArray: [],
    constSellerArray: [] ,
    selectedSeller: null,
  };

  const [state, dispatch] = useReducer(ProductReducer, initialState);

  const itemRef = useRef(state.cartArray);
  itemRef.current = state.cartArray;


  const getProducts = async () => {
    console.log(`${config.api.endpoint}` + 'products?populate=*');
    try {
      const res = await axios.get(`${config.api.endpoint}` + 'products?populate=*');
      // "https://dummyjson.com/products/"
      const data = res.data.data;
      dispatch({ type: GET_PRODUCTS, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  const getProduct = async (id) => {
    try {
      const res = await axios.get(`${config.api.endpoint}` + 'products/' + id + '?populate=*');
      const { data } = res.data;
      dispatch({ type: GET_PRODUCT, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  
  const getUsers = async () => {
    console.log(`${config.api.endpoint}` + 'users');
    try {
      const res = await axios.get(`${config.api.endpoint}` + 'users');
      const data = res.data
      dispatch({ type: GET_USERS, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  const getUser = async (id) => {
    try {
      const res = await axios.get(`${config.api.endpoint}` + 'users/' + id);
      const { data } = res.data;
      dispatch({ type: GET_USER, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  const getSellers = async () => {
    console.log(`${config.api.endpoint}` + 'sellers');
    try {
      const res = await axios.get(`${config.api.endpoint}` + 'sellers');
      const data = res.data
      dispatch({ type: GET_SELLERS, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  const getSeller = async (id) => {
    try {
      const res = await axios.get(`${config.api.endpoint}` + 'sellers/' + id);
      const { data } = res.data;
      dispatch({ type: GET_SELLER, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  // const getProducts = async () => {
  //   try {
  //     const res = await axios.get("https://dummyjson.com/products/");
  //     const data = res.data.products;
  //     dispatch({ type: GET_PRODUCTS, payload: data });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const getProduct = async (id) => {
  //   try {
  //     const res = await axios.get("https://dummyjson.com/products/" + id);
  //     const { data } = res;
  //     dispatch({ type: GET_PRODUCT, payload: data });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const serchProduct = async (product) => {
    let arr = []
    try {
      if(product.length > 0){
        arr.push(product)
        const data = arr[0]
        dispatch({ type: SERCH_PRODUCT, payload: data });
        console.log(state.productsArray);
      }else{
        getProducts()
      }
    } catch (error) {
      console.log(error);
    }
  }

  const addToCart = (quantity) => {
    let arr = [];
    try {
      arr.push(...state.cartArray, {product: state.selectedProduct, quantity: quantity});
      const data = arr;

      dispatch({ type: ADD_TO_CART, payload: data });
      console.log(state.cartArray);
    } catch (error) {
      console.log(error);
    }
  };

  const removeAllCart = () => {
    try{
      let data = initialState.cartArray
      dispatch({type: DELETE_ALL_CART, payload: data})
    }
    catch (error){
      console.log(error);
    }
  }

  const dataRecipe = (quantity, total) => {
    try {
      const data = state.totalCart = {
        quantity: quantity,
        total: total
      }
      dispatch({type: SUM_ALL, payload: data})
    }
    catch (err) {
      console.log(err)
    }
  }

  const serchValue = (value) => {
    try{
      let data = value
      dispatch({type: SERCH_VALUE, payload: data})
    }
    catch(error) {
      console.log(error);
    }
  }


  return (
    <RemoveCartContext.Provider
      value={useCallback((item) => {
        const newItems = itemRef.current.filter(
          (_item) => _item.product.id !== item.product.id
        );
        dispatch({ type: DELETE_ITEM_CART, payload: newItems });
      }, [])}
    >
      <ProductContext.Provider
        value={{
          constProductArray: state.constProductArray,
          productsArray: state.productsArray,
          selectedProduct: state.selectedProduct,

          constUserArray: state.constUserArray,
          usersArray: state.usersArray,
          selectedUser: state.selectedUser,

          constSellerArray: state.constSellerArray,
          sellersArray: state.sellersArray,
          selectedSeller: state.selectedSeller,

          cartArray: state.cartArray,
          totalCart: state.totalCart,
          getProducts,
          getProduct,
          addToCart,
          dataRecipe,
          removeAllCart,
          serchProduct,
          getUsers,
          getUser,
          getSellers,
          getSeller
        }}
      >
        {props.children}
      </ProductContext.Provider>
    </RemoveCartContext.Provider>
  );
};

export default ProductState;
