
import Product from '../components/product';
import Trend from '../components/trend';
import { connect } from 'react-redux';
import React, {Component} from 'react';

import {getSubCategories, getDifferProductWithCategory} from './../actions/index';


class Cosmetics extends Component {
  componentDidMount() {
    this.props.fetchSubCategories(4);
    this.props.fetchDifferProductsWithCategory(4);
  }
  render() {
  return(
    <div>
      <section className="categories">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 p-0">
            <div style={{backgroundImage: "url('assets/img/categories/category-1.jpg')"}} className="category-1 categories__item categories__large__item  set-bg" data-setbg="assets/img/categories/category-1.jpg">
            <div className="categories__text">
            <h1>Jean</h1>
            <p>Sitamet, consectetur adipiscing elit, sed do eiusmod tempor incidid-unt labore
            edolore magna aliquapendisse ultrices gravida.</p>
            <a href="#">Shop now</a>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
        <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-6 p-0">
        <div style={{backgroundImage: "url('assets/img/categories/category-2.jpg')"}} className="categories__item category-2 set-bg" data-setbg="assets/img/categories/category-2.jpg">
        <div className="categories__text">
        <h4>Dress</h4>
        <p>358 items</p>
        <a href="#">Shop now</a>
        </div>
        </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 p-0">
        <div style={{backgroundImage: "url('assets/img/categories/category-3.jpg')"}} className="categories__item category-3 set-bg" data-setbg="assets/img/categories/category-3.jpg">
        <div className="categories__text">
        <h4>Shirt</h4>
        <p>273 items</p>
        <a href="#">Shop now</a>
        </div>
        </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 p-0">
        <div style={{backgroundImage: "url('assets/img/categories/category-4.jpg')"}} className="categories__item category-4 set-bg" data-setbg="assets/img/categories/category-4.jpg">
        <div className="categories__text">
        <h4>Shoes</h4>
        <p>159 items</p>
        <a href="#">Shop now</a>
        </div>
        </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 p-0">
        <div style={{backgroundImage: "url('assets/img/categories/category-5.jpg')"}} className="categories__item category-5 set-bg" data-setbg="assets/img/categories/category-5.jpg">
        <div className="categories__text">
        <h4>Blazzers</h4>
        <p>792 items</p>
        <a href="#">Shop now</a>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
      </section>
      <Product />
      <Trend />
    </div>
  );
}
}

const mapStateToProps = state => {
  return {
    products: state.products,
    categories: state.categories
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return{
    fetchDifferProductsWithCategory: (id_category) => {
      dispatch(getDifferProductWithCategory(id_category));
    },
    fetchSubCategories: (id_cate_main) => {
      dispatch(getSubCategories(id_cate_main));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cosmetics);