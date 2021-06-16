
import './../App.scss';
import React, {Component} from 'react';

import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { requestListProducts } from './../actions/index';

class Product extends Component {
  componentDidMount() {
  }

  showProducts(products) {
    var result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return (
          <div key={index} className="col-lg-3 col-md-4 col-sm-6 mix">
            <div className="product__item">
            <div style={{backgroundImage: `url(${product.image})`}} className="product__item__pic set-bg" data-setbg="assets/img/product/product-8.jpg">
            <ul className="product__hover">
              <li><a href="assets/img/product/product-1.jpg" className="image-popup"><span className="arrow_expand"></span></a></li>
              <li><a href="#"><span className="icon_heart_alt"></span></a></li>
              <li><a href="#"><span className="icon_bag_alt"></span></a></li>
            </ul>
            </div>
            <div className="product__item__text">
            <h6><NavLink to={`/product/${product.id}`}>Buttons tweed blazer</NavLink></h6>
            
            <div className="product__price">$ 59.0</div>
            </div>
            </div>
            </div>
        );
      });
    }
    return result;
  }

  render() {
    
    var { products }  = this.props;
  return(
    <section className="product spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <div className="section-title">
              <h4>New product</h4>
              </div>
            </div>
            <div className="col-lg-8 col-md-8">
            </div>
          </div>
          <div className="row property__gallery">
            { this.showProducts(products) }
          </div>
        </div>
    </section>
  );
}
}

const mapStateToProps = state => {
  return {
    products: state.products,
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);