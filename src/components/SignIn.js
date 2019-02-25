import React from 'react'

class SignIn extends React.Component {

  handleChange = () => {
    console.log("Something is happening!");
  }

  render() {

    console.log(this.state)
    return (
      <div className="signin">
      Signin!
        <form >
          <input type="text" name="username" placeholder="Username" onChange={this.handleChange}/>
          <input type="text" name="password" placeholder="Password" onChange={this.handleChange}/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

export default SignIn;
