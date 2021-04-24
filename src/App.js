import React, {useEffect, useState} from 'react';
import './App.css';
import HomePage from './pages/hompage/homepage';
import ShopPage from './pages/shop/shop.js';
import { Switch, Route } from 'react-router-dom'
import Header from './components/header/header.js'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.js'

import { auth } from './firebase/firebase-utils'

const  App = () => {

  const [user, setUser] = useState(null)

  useEffect(()=>{
    auth.onAuthStateChanged(user =>{
      setUser(user)
      console.log(user)
    })
  },[user])

  return (  
    <div>
      <Header currentUser={user}/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
        <Route exact path='/signIn' component={SignInAndSignUpPage}/>
      </Switch>
    </div>
  );
}

export default App;
