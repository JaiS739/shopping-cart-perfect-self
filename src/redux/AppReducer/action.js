import * as types from "./actionTypes";
import products from "../../data";

const getProducts = () => (dispatch) => {
  dispatch({ type: types.GET_PRODUCTS, payload: products });
};

const addToCart = (id) => (dispatch) => {
  dispatch({ type: types.ADD_TO_CART, payload: id });
};

const getCartData = () => (dispatch) => {
  dispatch({ type: types.GET_CART_DATA });
};

const deleteCartItems = (id) => (dispatch) => {
  dispatch({ type: types.DELETE_CART_ITEM, payload: id });
};

export { getProducts, addToCart, getCartData, deleteCartItems };
