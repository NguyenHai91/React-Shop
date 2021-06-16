
import React, {Component} from 'react';
import './App.scss';
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import Search from './components/search';
import MobileMenu from './components/layout/mobile_menu';
import Loader from './components/loader';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import routes from './routes';




class App extends Component {
  showRoutes = () => {
    var result = null;
    if(routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    return result;
  }
  render() {
    return (
      <Router >
        <div className="App maincontainer">
        
          <Loader />
          <MobileMenu />
          <Header />
          
          <Switch>
            {/* <Route path='/' exact component={HomePage} />
            <Route path='/product' component={ProductPage} />
            <Route component={NotFound} /> */}
            { this.showRoutes(routes) }
          </Switch>

          <Footer />
          <Search />
        
        </div>
      </Router>
    );
  }
}

export default App;
