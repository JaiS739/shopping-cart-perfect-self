import * as types from "./actionTypes";

const initialState = {
  products: [],
  cartProducts: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_PRODUCTS: {
      return { ...state, products: payload };
    }

    case types.ADD_TO_CART:
      let item = state.products.find((ele) => ele.id == payload);
      let inCart = state.cartProducts.find((ele) =>
        ele.id === payload ? true : false
      );

      return {
        ...state,
        cartProducts: inCart
          ? state.cartProducts.map((ele) =>
              ele.id == payload ? { ...ele, qty: ele.qty + 1 } : ele
            )
          : [...state.cartProducts, { ...item, qty: 1 }],
      };

    case types.DELETE_CART_ITEM:
      let items = state.products.find((ele) => ele.id == payload);
      let incart = state.cartProducts.find((ele) =>
        ele.id == payload ? true : false
      );

      return {
        ...state,
        cartProducts: incart
          ? state.cartProducts.map((ele) =>
              ele.id == payload ? { ...ele, qty: ele.qty - 1 } : ele
            )
          : [...state.cartProducts, { ...item, qty: 0 }],
      };

    case types.GET_CART_DATA: {
      return {
        ...state,
      };
    }

    default: {
      return state;
    }
  }
};

export { reducer };
