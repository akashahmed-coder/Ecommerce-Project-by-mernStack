import React from 'react';
import Login from './auth/Login';
import Register from './auth/Register';
import Cart from './cart/Cart';
import Products from './products/Products';
import NotFound from './utiles/not_Found/NotFound';
import {
  Route,Switch
} from "react-router-dom";


function Pages() {
  return (

    <Switch>
    <Route path="/" exact component={Products}/>
    <Route path="/login" exact component={Login}/>
    <Route path="/register" exect component={Register}/>
    <Route path="/cart" exact component={Cart}/>

    <Route path="*" exact component={NotFound}/>

        
    
  </Switch>

  )
     
  
}

export default Pages;

