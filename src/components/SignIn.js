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
      <div className="level">
        <div className="level-right">
          <strong>Sign In </strong>
          <form className="level-item"onSubmit={(event) => this.props.signinUser(event, this.state)}>
            <input className="input" type="text" name="username" placeholder="Username" onChange={this.handleChange}/>
            <input className="input" type="password" name="password" placeholder="Password" onChange={this.handleChange}/>
            <input className="button is-primary" type="submit" value="Submit"/>
          </form>
        </div>
      </div>
    )
  }
}

export default SignIn;
