

import * as types from './../constants/ActionTypes';

const data = localStorage.getItem('cart');
const cart = JSON.parse(data);
var initialState = cart ? cart : {'items': [], 'totalAmounts': 0, 'totalItems': 0};

function updateAmountsAndItems(cart) {
  const items = cart.items;
  var totalAmounts = 0.0;
  var totalItems= 0;
  for (let i = 0; i < items.length; i++) {
    totalAmounts += items[i].product.price * items[i].quantity;
    totalItems += items[i].quantity;
  }
  cart.totalAmounts = totalAmounts;
  cart.totalItems = totalItems;
  return cart;
}

var reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CART:
      return state;
    case types.ADD_PRODUCT_TO_CART:
      const items = state.items;
      const itemExists = items.find(item => item.product.id === action.product.id);
      if(!itemExists) {
        var item = {'product': action.product, 'quantity': 1};
        state.items.push(item);
      } else {
        itemExists.quantity++;
      }
      
      state = updateAmountsAndItems(state);
      localStorage.setItem('cart', JSON.stringify(state));
      return {...state};

    case types.DELETE_ITEM_IN_CART:
      const id = action.id;
      const itemDelete = state.items[id];
      if (itemDelete) {
        state.totalItems -= itemDelete.quantity;
        state.totalPrice -= itemDelete.price * itemDelete.quantity;
      }
      state.items.splice(id, 1);
      state = updateAmountsAndItems(state);
      localStorage.setItem('cart', JSON.stringify(state));
      return {...state};
    
    case types.UPDATE_QUANTITY_ITEM:
      state = action.cart;
      state = updateAmountsAndItems(state);
      localStorage.setItem('cart', JSON.stringify(state));
      return {...state};
    
    case types.CHECKOUT_SUCCESS:
      state.items = [];
      state.totalAmounts = 0.0;
      state.totalItems = 0;
      localStorage.setItem('cart', JSON.stringify(state));
      return {...state};
    default:
      return state;
  }
}

export default reducer;