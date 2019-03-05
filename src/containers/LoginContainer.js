import React from 'react';
//Components
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'

const LoginContainer = (props) => {
  return (
    <div className="section">
      <div className="container is-fluid">
        <SignIn signinUser={props.signinUser}/>
        <SignUp signupUser={props.signupUser}/>
      </div>
    </div>
  );

}

export default LoginContainer;
