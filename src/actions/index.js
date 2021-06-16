
import * as types from './../constants/ActionTypes';
import axios from 'axios';
import { endpoint } from './../constants/config'


export const requestListProducts = () => {
  return async dispatch => {
    return axios.get(`${endpoint}/products/list/`, null).then(res => {
      console.log(res.data);
      dispatch({
        type: types.LIST_PRODUCT,
        products: res.data,
      });
    }).catch(error => {});
  }
};

export const getCart = () => {
  return async dispatch => {
    dispatch({
      type: types.GET_CART,
    });
  };
};

export const deleteItemInCart = (id) => {
  return async dispatch => {
    dispatch({
      type: types.DELETE_ITEM_IN_CART,
      id: id,
    });
  };
};

export const addProductToCart = (id) => {
  // const token = localStorage.getItem('token');
  // axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : '';
  // axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
  
  return async dispatch => {
    return axios.get(`${endpoint}/products/${id}/`, null).then(res => {
      if (res && res.data) { 
        dispatch({
          type: types.ADD_PRODUCT_TO_CART,
          product: res.data,
        });
      }
    }).catch(error => {
    });
  };
};

export const updateQuantityItem = (cart) => {
  return dispatch => {
    dispatch({
      type: types.UPDATE_QUANTITY_ITEM,
      cart: cart
    });
  }
}

export const getProduct = (id) => {
  return async dispatch => {
    return axios.get(`${endpoint}/products/${id}/`, null).then(res => {
      dispatch({
        type: types.GET_PRODUCT,
        product: res.data
      });
    }).catch(error => {});
  }
}

export const login = (user) => {
  return async dispatch => {
    return axios.post(`${endpoint}/users/login/`, user).then(res => {
      dispatch({
        type: types.LOGIN,
        user: res.data.full_name,
        token: res.data.access,
        refresh: res.data.refresh,
      });
    }).catch(error => {});
  }
}

export const addProductToWishlist = (id) => {
  return async dispatch => {
    return axios.get(`${endpoint}/products/${id}`, null).then(res => {
      dispatch({
        type: types.ADD_PRODUCT_TO_WISHLIST,
        product: res.data,
      });
    });
  }
}

export const deleteProductInWishlist = (id) => {
  return dispatch => {
    dispatch({
      type: types.DELETE_ITEM_IN_WISHLIST,
      id: id,
    });
  }
}

export const checkout = (data) => {
  return dispatch => {
    dispatch({
      type: types.CHECKOUT_SUCCESS,
    })
  }
}

export const getListCategory = () => {
  return async dispatch => {
    return axios.get(`${endpoint}/category/list/`, null).then(res => {
      dispatch({
        type: types.GET_LIST_CATEGORY,
        data: res.data
      });
    });
  }
}

export const getSubCategories = (id_category) => {
  return async dispatch => {
    return axios.get(`${endpoint}/category/${id_category}/subs/`, null).then(res => {
      dispatch({
        type: types.GET_LIST_CATEGORY,
        data: res.data
      });
    });
  }
};

export const getProductsWithCategory = (id_category) => {
  return async dispatch => {
    return axios.get(`${endpoint}/products/category/${id_category}/details/`, null).then(res => {
      dispatch({
        type: types.GET_PRODUCTS_WITH_CATEGORY,
        products: res.data
      })
    });
  }
};

export const getDifferProductWithCategory = (id_category) => {
  return async dispatch => {
    return axios.get(`${endpoint}/products/category/${id_category}/`, null).then(res => {
      dispatch({
        type: types.GET_DIFFER_PRODUCTS_WITH_CATEGORY,
        products: res.data
      })
    });
  }
}