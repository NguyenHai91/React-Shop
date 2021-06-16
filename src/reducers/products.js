
import * as types from '../constants/ActionTypes';

var initialState = [];

var reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LIST_PRODUCT:
      state = action.products;
      return [...state];
    case types.GET_PRODUCTS_WITH_CATEGORY:
      state = action.products;
      return [...state];
    case types.ADD_PRODUCT:
      return state;
    case types.UPDATE_PRODUCT:
      return state;
    case types.DELETE_PRODUCT:
      return state;
    case types.GET_PRODUCTS_WITH_CATEGORY:
      state = action.products
      return [...state];
    case types.GET_DIFFER_PRODUCTS_WITH_CATEGORY:
      state = action.products;
      return [...state];
    default:
      return state;
  }
}

export default reducer;