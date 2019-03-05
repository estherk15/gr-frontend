import React, { Component } from 'react';
import './App.css'

import LoginContainer from './containers/LoginContainer'
import Main from './containers/Main'

class App extends Component {

  state = {
    currentUserId: '2',
    currentUser:
    // null,
    {
id: 2,
username: "m",
lists: [
{
id: 4,
title: "Currently Reading"
},
{
id: 5,
title: "Want to Read"
},
{
id: 6,
title: "Read"
}
],
books: [
{
id: 7,
title: "World Cheese Book",
authors: [
"Juliet Harbutt"
],
cover_url: "http://books.google.com/books/content?id=kMvlBwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
book_list: "Read"
},
{
id: 6,
title: "Beautiful Corn",
authors: [
"Anthony Boutard"
],
cover_url: "http://books.google.com/books/content?id=gTlvzuG4bIoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
book_list: "Want to Read"
},
{
id: 8,
title: "A Bag of Marbles",
authors: [
"Joseph Joffo"
],
cover_url: "http://books.google.com/books/content?id=BHIUSd6psgIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
book_list: "Read"
}
]
},
    loggedIn: true,
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
    console.log(this.state)
    const loggedIn = this.state.loggedIn;

    return (
      <section className='section'>
        {loggedIn ? (<Main {...this.state}/>)
          :
          (<LoginContainer
          signinUser={this.signinUser}
          signupUser={this.signupUser}/>)}
      </section>
    );
  }
}

export default App;


//TODO:
//styling: find a way to make the error message appear on the screen by the form field.
