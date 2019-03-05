import React from 'react'
import reading from '../assets/reading.png'

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
      <div className="columns is-centered is-vcentered" id="sign-up">
        <div className="column is-2"></div>

        <div className="column is-4">
          <img src={reading}  alt="Welcome to Good Reader!"/>
        </div>

        <div className="column is-4">
          <div className="subtitle is-6">
            <p><strong>New User? Create an account!</strong></p>
          </div>
          <div>
            <form className="form" onSubmit={(event)=>this.props.signupUser(event, this.state)}>
              <div className="field">
                <div className="control">
                  <input className="input" type="text" name="username" placeholder="Username" onChange={this.handleChange}/>
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input className="input" type="password" name="password" placeholder="Password" onChange={this.handleChange}/>
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input className="button is-primary" type="submit" value="Sign up"/>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="column is-3"></div>

      </div>
    )
  }
}

export default SignUp;
