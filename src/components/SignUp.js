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
      <div className="container" id="sign-up">
        <div className="level-left">
          <figure className="image">
            <img src={reading} className="level-item" alt="Welcome to Good Reader!"/>
          </figure>
        </div>

        <div className="level-right">
          <p classname="level-item">
            <strong className="subtitle is-5">New User? Sign Up Here!</strong>
          </p>

          <div className="level-item">
            <form className="form" onSubmit={(event)=>this.props.signupUser(event, this.state)}>
            <div className="level-item">
              <input className="input" type="text" name="username" placeholder="Username" onChange={this.handleChange}/>
            </div>
            <div className="level-item">
              <input className="input" type="password" name="password" placeholder="Password" onChange={this.handleChange}/>
            </div>
            <div className="level-item">
              <input className="button is-primary" type="submit" value="Submit"/>
            </div>
            </form>
          </div>
        </div>

      </div>
    )
  }
}

export default SignUp;
