import React, { useState } from "react";

import { auth, createUserProfileDocument } from "../../firebase/firebase-utils";
import CustomButton from "../custom-button/custom-button";
import FormInput from "../form-input/form-input";
import "./sign-up.styles.scss";

const userIntialState = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUp = () => {
  const [userData, setUserData] = useState(userIntialState);

  const handleSubmit = async(e)=>{

    e.preventDefault()

    if(userData.password !== userData.confirmPassword){
      alert("passwords do not match")
      return
    }

    try{
      const { user } = await auth.createUserWithEmailAndPassword(userData.email, userData.password)
      const { displayName } = userData
      
      await createUserProfileDocument(user, {displayName})
      setUserData(userIntialState)
    }catch(error){
      console.log("error signing up user: ",error.message)
    }
  }

  const handleChange = (e) =>{
      const {name, value} = e.target
      setUserData(
        {
          ...userData,
          [name]: value
          
        }
      )

  }
  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={userData.displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={userData.confirmPassword}
          onChange={handleChange}
          label="Cornfirm Password"
          required
        />
        <CustomButton type='submit'>SIGN UP</CustomButton>
      </form>
    </div>
  );
};
export default SignUp;
