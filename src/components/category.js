

import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';


class Category extends Component {
  render() {
    return (
      <section className="categories">
        <div className="container-fluid">
        <div className="row">
        <div className="col-lg-6 p-0">
        <div style={{backgroundImage: "url('assets/img/categories/category-1.jpg')"}} className="category-1 categories__item categories__large__item  set-bg" data-setbg="assets/img/categories/category-1.jpg">
        <div className="categories__text">
        <h1>Women’s fashion</h1>
        <p>Sitamet, consectetur adipiscing elit, sed do eiusmod tempor incidid-unt labore
        edolore magna aliquapendisse ultrices gravida.</p>
        <NavLink to="/women">Shop Now</NavLink>
        </div>
        </div>
        </div>
        <div className="col-lg-6">
        <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-6 p-0">
        <div style={{backgroundImage: "url('assets/img/categories/category-2.jpg')"}} className="categories__item category-2 set-bg" data-setbg="assets/img/categories/category-2.jpg">
        <div className="categories__text">
        <h4>Men’s fashion</h4>
        <p>358 items</p>
        <NavLink to="/men">Shop Now</NavLink>
        </div>
        </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 p-0">
        <div style={{backgroundImage: "url('assets/img/categories/category-3.jpg')"}} className="categories__item category-3 set-bg" data-setbg="assets/img/categories/category-3.jpg">
        <div className="categories__text">
        <h4>Kid’s fashion</h4>
        <p>273 items</p>
        <NavLink to="/kids">Shop Now</NavLink>
        </div>
        </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 p-0">
        <div style={{backgroundImage: "url('assets/img/categories/category-4.jpg')"}} className="categories__item category-4 set-bg" data-setbg="assets/img/categories/category-4.jpg">
        <div className="categories__text">
        <h4>Cosmetics</h4>
        <p>159 items</p>
        <NavLink to="/cosmetics">Shop Now</NavLink>
        </div>
        </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 p-0">
        <div style={{backgroundImage: "url('assets/img/categories/category-5.jpg')"}} className="categories__item category-5 set-bg" data-setbg="assets/img/categories/category-5.jpg">
        <div className="categories__text">
        <h4>Accessories</h4>
        <p>792 items</p>
        <NavLink to="/accessories">Shop Now</NavLink>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
      </section>
    );
  }
}

export default Category;