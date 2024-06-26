import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./Header/Header";
import Auth from "./Authentication/Auth";
import Product from "./Product/Product";
import ForgotPassword from "./Authentication/ForgotPassword/ForgotPassword";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/forgotpassword" exact component={ForgotPassword}/>
        <Route path="/products" exact component={Product} />
        <Route path="/" exact component={Auth} />
      </Switch>
    </div>
  );
}

export default App;
