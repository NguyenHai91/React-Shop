
import * as types from './../constants/ActionTypes';

var initialState = null;

var reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PRODUCT:
      state = action.product;
      return state;
    default:
      return state;
  }
}

export default reducer;