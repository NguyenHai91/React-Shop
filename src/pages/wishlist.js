
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProductToCart, deleteProductInWishlist } from './../actions/index';


class Wishlist extends Component {

  deleteItem = (index) => {
    this.props.deleteProductInWishlist(index);
  }

  showItemsInWishlist = (items) => {
    let elementItems;
    if (items.length > 0) {
      elementItems = items.map((item, index) => {
        return (
            <tr key={index}>
              <td className="table-id"><div className="item-id">{index+1}</div></td>
              <td className="table-image"><img className="item-img table-td" src="/assets/img/product/product-1.jpg" /></td>
              <td className="table-name"><div className="item-name">Buttons tweed blazer</div></td>
              <td className="table-price"><div className="item-price">$ {item.price}</div></td>
              <td className="table-action">
                <button type='button' className="btn btn-del" onClick={() => this.deleteItem(index)}><i className="fa fa-trash-o fa-lg" aria-hidden="true"></i></button>
              </td>
            </tr>
        );
      });
    } else {
      elementItems = (
        <tr>
          <td className="not-item">Not item found</td>
        </tr>
      );
    }
    return elementItems;
  }

  render() {
    const {wishlist} = this.props;
    console.log(wishlist);
    return(
      <div className="container-fluid main wishlist">
        <div className="row">
          <div className="col-lg-7 col-md-6 col-sm-12 mix">
            <table className="table-cart">
              <tbody>
                { this.showItemsInWishlist(wishlist) }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    wishlist: state.wishlist,
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    addProductToCart: (id) => {
      dispatch(addProductToCart(id));
    },
    deleteProductInWishlist: (index) => {
      dispatch(deleteProductInWishlist(index));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);