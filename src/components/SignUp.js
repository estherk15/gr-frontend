import React from 'react'

class SignUp extends React.Component {
  state = {
    username: '',
    password: '',
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
        <div className="signup">
          New User? Create an account!
          <form onSubmit={(event)=>this.props.signupUser(event, this.state)}>
            <input type="text" name="username" placeholder="Username" onChange={this.handleChange}/><br/>
            <input type="password" name="password" placeholder="Password" onChange={this.handleChange}/>  <br/>
            <input type="submit" value="Sign up"/>
          </form>
        </div>
    )
  }
}

export default SignUp;
