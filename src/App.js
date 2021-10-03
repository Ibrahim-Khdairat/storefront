import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Cart from './components/Cart';
import "./App.scss"

export default function App() {
  return (
    <div className = "app">

      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <Main />
          </Route>

          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  )
}
