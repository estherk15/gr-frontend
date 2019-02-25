import React, { Component } from 'react';

// import { connect } from 'react-redux'
//Components

import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'

class LoginContainer extends Component {

  render() {
    return (
      <div className="login">
        <SignIn />
        <SignUp />
      </div>
    );
  }
}

export default LoginContainer;
