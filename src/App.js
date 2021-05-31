import React, {useEffect } from 'react';
import './App.css';
import HomePage from './pages/hompage/homepage';
import ShopPage from './pages/shop/shop.js';
import { Switch, Route } from 'react-router-dom'
import Header from './components/header/header.js'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.js'
import { connect } from 'react-redux'
import { auth, createUserProfileDocument } from './firebase/firebase-utils'
import { setCurrentUser } from './redux/user/user-action'
const  App = ({setCurrentUser}) => {



  const userStateChange = () =>{
    
    auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot)=>{
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      }else{
        setCurrentUser(userAuth)
      }
    })
  }
  useEffect(()=>{
   userStateChange()
  },[])

  return (  
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
        <Route exact path='/signIn' component={SignInAndSignUpPage}/>
      </Switch>
    </div>
  );
}

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))

})

export default connect(null,mapDispatchToProps )(App);
