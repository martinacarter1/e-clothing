import React from 'react';
import './App.css';
import HomePage from './pages/hompage/homepage';
import ShopPage from './pages/shop/shop.js';
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
