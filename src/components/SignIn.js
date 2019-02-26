import React from 'react'

class SignIn extends React.Component {

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
      <div className="signin">
      Signin!
        <form onSubmit={(event) => this.props.signinUser(event, this.state)}>
          <input type="text" name="username" placeholder="Username" onChange={this.handleChange}/>
          <input type="password" name="password" placeholder="Password" onChange={this.handleChange}/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

export default SignIn;
