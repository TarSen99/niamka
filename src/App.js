import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss';
import Home from '@/views/Home/Home.js';
import Login from './views/Login/Login.js'
import SingUp from './views/Login/SingUp.js'
import Product from '@/views/Product/Product.js';
import CheckoutButton from '@/components/general/CheckoutButton/CheckoutButton.js';
import { useSelector } from 'react-redux';

function App() {
  const products = useSelector(state => state.productReducer.value)
  
  return (
    <div className="app">
      <Router>
        <div className={ !products.length ? 'app__content' : 'app__content app__contentWithCheckoutButton' }>
          <Switch>
            <Route path="/about">About</Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/singup">
              <SingUp />
            </Route>
            <Route path="/product/:id">
              <Product />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>

      <CheckoutButton />
    </div>
  );
}

export default App;
