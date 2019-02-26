import React, { Component } from 'react';

// import { connect } from 'react-redux'
//Components

import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'

const LoginContainer = (props) => {
  return (
    <div className="login">
      <SignIn signinUser={props.signinUser}/>
      <SignUp signupUser={props.signupUser}/>
    </div>
  );

}

export default LoginContainer;
