

import React, { Component } from 'react';
import { getCart, deleteItemInCart, updateQuantityItem } from './../actions/index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class CartPage extends Component {
  constructor(props) {
    super(props);
  }

  
  componentDidMount() {
    this.props.fetchProductsInCart();
  }
  
  updateQuantity = (index, num) => {
    let cart = this.props.cart;
    let quantity = cart.items[index].quantity;
    quantity += num;
    if (quantity > 0 && quantity <= 10) {
      cart.items[index].quantity = quantity;
      this.props.updateQuantityItem(cart);
    }
  }

  deleteItem = (id) => {
    this.props.deleteItemInCart(id);
  }

  checkout = () => {
    if(this.props.cart && this.props.cart.items.length > 0) {
      this.props.history.push('checkout');
    }
  }

  showProductsInCart = (cart) => {
    var eleProducts = null;
    if (cart.items && cart.items.length > 0)
    { 
      const items =  cart.items;
        eleProducts = items.map((item, index) => {
          return(
              <tr key={index}>
                <td className="table-id"><div className="item-id">{index+1}</div></td>
                <td className="table-image"><img className="item-img table-td" src="/assets/img/product/product-1.jpg" /></td>
                <td className="table-name"><div className="item-name">Buttons tweed blazer</div></td>
                <td className="table-qty"><div className="item-qty">
                  <button type='button' className="btn btn-sub" onClick={() => this.updateQuantity(index, -1)}>-</button>
                  <input className="" type="text" name="quantity" value={item.quantity} readOnly/>
                  <button type='button' className="btn btn-plus" onClick={() => this.updateQuantity(index, +1)}>+</button>
                </div></td>
                <td className="table-price"><div className="item-price">$ {item.product.price}</div></td>
                <td className="table-action">
                  <button type='button' className="btn btn-del" onClick={() => this.deleteItem(index)}>
                    <i className="fa fa-trash-o fa-lg" aria-hidden="true"></i>
                  </button>
                </td>
              </tr>
          );
        });
    } else {
      eleProducts = (
        <tr>
          <td className="not-item">Product not found</td>
        </tr>
      );
    }
    return eleProducts;
  }
  render() {
    const cart = this.props.cart;
    return(
      <div className="container-fluid main cart-cover">
        <div className="row">
          <div className="col-lg-7 col-md-6 col-sm-12 mix">
            <table className="table-cart">
              <tbody>
                {this.showProductsInCart(cart)}
              </tbody>
            </table>
          </div>
          <div className="col-lg-5 col-md-6 col-sm-12 mix">
            <div className="details_order">
              <h6 className="title">Details Order</h6>
              <table className="list-item table-details">
                <thead className="head">
                  <tr>
                    <th className="col-title">item name</th>
                    <th className="col-quantity">quantity</th>
                    <th className="col-amounts">amounts</th>
                  </tr>
                </thead>
                <tbody>
                {cart.items.map((item, index) => {
                  return(
                    <tr key={index} className="item">
                      <td>Buttons tweed blazer</td>
                      <td className="td-quantity">{item.quantity}</td>
                      <td>$ {item.quantity * item.product.price}</td>
                    </tr>
                  );
                })}
                </tbody>
              </table>
              <div className="total_amount">Total Amount: $ {cart.totalAmounts}</div>
              <div className="cover-checkout">
                <button type='button' className="btn-checkout btn btn-success" onClick={this.checkout}>checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchProductsInCart: () => {
      dispatch(getCart());
    },
    deleteItemInCart: (id) => {
      dispatch(deleteItemInCart(id));
    },
    updateQuantityItem: (cart) => {
      dispatch(updateQuantityItem(cart));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CartPage));