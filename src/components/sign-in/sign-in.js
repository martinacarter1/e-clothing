import React, { useState } from "react";
import CustomButton from "../custom-button/custom-button";
import FormInput from "../form-input/form-input";
import "./sign-in.styles.scss";

import { auth, signInWithGoogle } from "../../firebase/firebase-utils";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();

    try{
        await auth.signInWithEmailAndPassword(email, password)
        setEmail("");
        setPassword("");
    }catch(error){
      console.log(error)
    }

  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    if (name === "password") {
      setPassword(value);
    } else {
      setEmail(value);
    }
  };

  return (
    <div className="sign-in">
      <h2>I Already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          handleChange={handleChange}
          required
          label="Email"
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          required
          label="Password"
        />
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton type="button" isGoogleSignIn onClick={signInWithGoogle}>
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};
export default SignIn;
