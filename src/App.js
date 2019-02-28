import React, { Component } from 'react';
import './App.css'

import LoginContainer from './containers/LoginContainer'
import Main from './containers/Main'

class App extends Component {

  state = {
    currentUserId: '',
    currentUser: null,
      // {
      //   id: 1,
      //   username: "Meghan",
      //   lists: [
      //             {
      //               id: 1,
      //               title: "Want to Read",
      //               description: "Reading Wishlist"
      //             },
      //             {
      //               id: 2,
      //               title: "Currently Reading",
      //               description: "Books I am currenlty reading"
      //             }
      //           ],
      //   books: [ ],
      //   responses: [ ]
      // },
    loggedIn: false,
  }

  //takes the information from login form and posts to backend, response should be confirmation of user or error that username/password do not match.
  signinUser = (event, userInfo) => {
    event.preventDefault()
    fetch('http://localhost:3000/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(userInfo)
    })
    .then(response => response.json())
    .then(data => {
      if(data.error){
        alert(data.error)
      } else {
        this.setState({
          currentUserId: data.id,
          currentUser: data,
          loggedIn: true,
        })
      }
    })
  }

  //takes user input in sign up form and creates a new user.
  signupUser = (event, userInfo) => {
    event.preventDefault()
    fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(userInfo),
    })
    .then(response => response.json())
    .then(data => this.setState({
      currentUserId: data.id,
      currentUser: data,
      loggedIn: true,
    }))
  }

  render() {
<<<<<<< HEAD
    const loggedIn = this.state.loggedIn;
    
=======
    console.log(this.state)
    const loggedIn = this.state.loggedIn;

>>>>>>> search
    return (
      <div>
        {loggedIn ? (<Main {...this.state}/>)
          :
          (<LoginContainer
          signinUser={this.signinUser}
          signupUser={this.signupUser}/>)}
      </div>
    );
  }
}

export default App;


//TODO:
//styling: find a way to make the error message appear on the screen by the form field.
