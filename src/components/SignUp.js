import React from 'react'

class SignUp extends React.Component {

  render() {
    return (
        <div className="signup">
          New User? Create an account!
          <form >
            <input type="text" name="username" placeholder="Username" /><br/>
            <input type="password" name="password" placeholder="Password" />  <br/>
            <input type="submit" value="Sign up"/>
          </form>
        </div>
    )
  }
}

export default SignUp;
