import React, {Component} from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import Cart from "./components/Cart";
import { Route,Switch } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import "./App.css";
import PrivateRoute from "./components/PrivateRoute";

class App extends Component {
render(){
  return(
  <div>
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path="/home" component={Home} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/error" component={ErrorPage} />
      </Switch>
  </div> 
  );  
}
}

export default App;
