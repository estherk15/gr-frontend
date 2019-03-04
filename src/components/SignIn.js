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
      <nav className="level" id="sign-in">

        <div className="level-left">
          <div className="level-item">
            <p className="subtitle is-3">
              <strong>Good Reader</strong>
            </p>
          </div>
        </div>

        <div className="level-right">
          <strong className="level-item">Sign In </strong>
          <form className="level-item" onSubmit={(event) => this.props.signinUser(event, this.state)}>
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
        
      </nav>

    )
  }
}

export default SignIn;


// <div className="level-right">
//   <form className='form' className="level-item"onSubmit={(event) => this.props.signinUser(event, this.state)}>
//     <div className='field'>
//       <div className='control'>
//         <input className="input" type="text" name="username" placeholder="Username" onChange={this.handleChange}/>
//       </div>
//     </div>
//     <div className='field'>
//       <div className='control'>
//         <input className="input" type="password" name="password" placeholder="Password" onChange={this.handleChange}/>
//       </div>
//     </div>
//     <div className='field'>
//       <div className='control'>
//         <input className="button is-primary" type="submit" value="Submit"/>
//       </div>
//     </div>
//   </form>
// </div>
