
import Reac from 'react';
import HomePage from './pages/home_page';
import ProductPage from './pages/product_page';
import ProductDetailsPage from './pages/product_details_page';
import NotFound from './pages/NotFound';
import CartPage from './pages/cart';
import LoginPage from './pages/login_page';
import RegisterPage from './pages/register_page';
import Checkout from './pages/checkout';
import Success from './pages/success';
import Wishlist from './pages/wishlist';
import Men from './pages/men';
import Women from './pages/women';
import Kids from './pages/kids';
import Cosmetics from './pages/cosmetics';
import Accessories from './pages/accessories';


const routes = [
  {
    path: '/',
    exact: true,
    main: ({location}) => <HomePage location={location}/>
  },
  {
    path: '/category/:id/details',
    exact: true,
    main: ({location, match}) => <ProductPage location={location} match={match}/>
  },
  {
    path: '/product/:id',
    exact: true,
    main: ({location, match}) => <ProductDetailsPage location={location} match={match} />
  },
  {
    path: '/men',
    exact: true,
    main: ({location, match}) => <Men location={location} match={match} />
  },
  {
    path: '/women',
    exact: true,
    main: ({location, match}) => <Women location={location} match={match} />
  },
  {
    path: '/kids',
    exact: true,
    main: ({location, match}) => <Kids location={location} match={match} />
  },
  {
    path: '/cosmetics',
    exact: true,
    main: ({location, match}) => <Cosmetics location={location} match={match} />
  },
  {
    path: '/accessories',
    exact: true,
    main: ({location, match}) => <Accessories location={location} match={match} />
  },
  {
    path: '/cart',
    exact: true,
    main: ({location, match}) => <CartPage location={location} match={match} />
  },
  {
    path: '/wishlist',
    exact: true,
    main: ({location}) => <Wishlist location={location} />
  },
  {
    path: '/login',
    exact: true,
    main: ({location}) => <LoginPage location={location} />
  },
  {
    path: '/register',
    exact: true,
    main: ({location}) => <RegisterPage location={location}/>
  },
  {
    path: '/checkout',
    exact: true,
    main: ({location}) => <Checkout location={location} />
  },
  {
    path: '/success',
    exact: true,
    main: ({location}) => <Success location={location} />
  },
  {
    path: '',
    exact: true,
    main: () => <NotFound/>
  },
];

export default routes;