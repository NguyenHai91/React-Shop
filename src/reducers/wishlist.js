import * as types from './../constants/ActionTypes';

const data = localStorage.getItem('wishlist');
let wishlist = JSON.parse(data);
var initialState = wishlist ? wishlist : [];

var reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_PRODUCT_TO_WISHLIST:
      if (action.product) {
        const productIndex = state.findIndex(item => item.id === action.product.id);
        if (productIndex === -1) {
          state.push(action.product);
        }
      }
      localStorage.setItem('wishlist', JSON.stringify(state));
      return [...state];
    case types.DELETE_ITEM_IN_WISHLIST:
      const productIndex = state.findIndex(item => item.id == action.id);
      if (productIndex) {
        state.splice(productIndex, 1);
      }
      localStorage.setItem('wishlist', JSON.stringify(state));
      return [...state];
    default:
      return state;
  }
};

export default reducer;