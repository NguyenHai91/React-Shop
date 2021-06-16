

import Category from '../components/category';
import Product from '../components/product';
import Trend from '../components/trend';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { requestListProducts, getProductsWithCategory } from './../actions/index';


class ProductPage extends Component {

  componentDidMount() {
    const { match } = this.props;
    const id = match.params.id;
    this.props.fetchProductsWithCategory(id);
  }
  
  render() {
    return(
      <div>
        <Product />
        <Trend />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {

  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchProductsWithCategory: (id_cate) => {
      dispatch(getProductsWithCategory(id_cate));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);