

import React, {Component} from 'react';
import { Route, NavLink, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import jwtDecode from 'jwt-decode';

const CustomLink = ({label, to, isExact}) => {
  return (
    <Route path={to} exact={isExact} children={(match) => {
      return (
        <NavLink to={to} exact className=''>{label}</NavLink>
      );
    }} />
  );
}


class Header extends Component {
  state = {
    items: 0,
    wishlistItems: 0,
  };



  logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('refresh');
  }

  authUser = () => {
    const user = this.props.user;
    if (user) {
      return(
        <div className="header__right__auth">
            <div className="user">
              {user}
              <div className="sub-menu-user">
                <div className="profile">profiles</div>
                <div className="logout" onClick={this.logout}>logout</div>
              </div>
            </div>
        </div>
      );
    } else {
      return (
        <div className="header__right__auth">
          <a href="/login">Login</a>
        </div>
      );
    }
  }
  render() {
    if (this.props.token) {
      const decoded = jwtDecode(this.props.token);
      const accessExp = parseInt(decoded.exp) * 1000;
      if (accessExp < Date.now()) {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        localStorage.removeItem('refresh');
      }
    }
    var items = this.props.cart.items.length;
    var wishlistItems = this.props.wishlist.length;
  return (
    <header className="header">
            <div className="container-fluid">
            <div className="row">
            <div className="col-xl-3 col-lg-2">
            <div className="header__logo">
            <a href="#"><img src="assets/img/logo.png" alt=""/></a>
            </div>
            </div>
            <div className="col-xl-6 col-lg-7">
            <nav className="header__menu">
            <ul>
              <li><NavLink to={{pathname:'/', state: {'prevPath': '/'}}} exact>Home</NavLink></li>
              <li><NavLink to={{pathname:'/men', state: {'prevPath': '/products'}}} exact>Men</NavLink></li>
              <li><NavLink to={{pathname:'/women', state: {'prevPath': '/products'}}} exact>Women's</NavLink></li>
              <li><NavLink to={{pathname:'/kids', state: {'prevPath': '/products'}}}>Kids</NavLink></li>
              <li><NavLink to={{pathname:'/accessories', state: {'prevPath': '/products'}}}>accessories</NavLink>
                <ul className="dropdown">
                <li><NavLink to="#">Product Details</NavLink></li>
                <li><NavLink to="#">Shop Cart</NavLink></li>
                <li><NavLink to="#">Checkout</NavLink></li>
                <li><NavLink to="#">Blog Details</NavLink></li>
                </ul>
              </li>
              <li><NavLink to='/product'>About</NavLink></li>
            </ul>
            </nav>
            </div>
            <div className="col-lg-3">
            <div className="header__right">
            {this.props.user ? (
              <div className="header__right__auth">
                  <div className="user">
                    {this.props.user}
                    <div className="sub-menu-user">
                      <div className="profile">profiles</div>
                      <div className="logout" onClick={this.logout}>logout</div>
                    </div>
                  </div>
              </div>
              ) : (
                <div className="header__right__auth">
                  <NavLink to="/login">Login</NavLink>
                </div>
              )}
            <ul className="header__right__widget">
              <li><span className="icon_search search-switch"></span></li>
              <li>
                <NavLink to="/wishlist"><span className="icon_heart_alt"></span>
                  <div className="tip">{wishlistItems}</div>
                </NavLink>
              </li>
              <li>
                <NavLink to="/cart"><span className="icon_bag_alt"></span>
                  <div className="tip">{items}</div>
                </NavLink>
              </li>
            </ul>
            </div>
            </div>
            </div>
            <div className="canvas__open">
            <i className="fa fa-bars"></i>
            </div>
            </div>
            </header>
            
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user_data.user,
    token: state.user_data.token,
    cart: state.cart,
    wishlist: state.wishlist,
  };
}

export default connect(mapStateToProps)(Header);