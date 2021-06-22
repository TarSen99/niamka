import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";
import Home from "@/views/Home/Home.js";
import Product from "@/views/Product/Product.js";

function App() {
  return (
    <div className="app">
      <Router>
        <div className="app__content">
          <Switch>
            <Route path="/about">About</Route>
            <Route path="/product/:id">
              <Product />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
