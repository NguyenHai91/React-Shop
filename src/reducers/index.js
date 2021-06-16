
import { combineReducers } from 'redux';

import products from './products';
import product from './product';
import cart from './cart';
import user_data from './user';
import wishlist from './wishlist';


const reducer = combineReducers({
  products: products,
  product: product,
  cart: cart,
  wishlist: wishlist,
  user_data: user_data,
});

export default reducer;