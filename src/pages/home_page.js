
import Category from '../components/category';
import Banner from '../components/banner';
import Trend from '../components/trend';
import Discount from '../components/discount';
import Services from '../components/services';
import Socials from '../components/socials';
import Product from '../components/product';
import React, {Component} from 'react';
import { requestListProducts, getListCategory } from './../actions/index';
import { connect } from 'react-redux';


class HomePage extends Component {

  componentDidMount() {
    this.props.fetchProduct();
    this.props.fetchListCategory();
  }

  render() {
    return(
      <div>
        <Category />
        <Product />
        <Banner />
        <Trend />
        <Discount />
        <Services />
        <Socials />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchProduct: () => {
      dispatch(requestListProducts());
    },
    fetchListCategory: () => {
      dispatch(getListCategory());
    },
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);