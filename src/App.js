import React, { Component } from 'react';
import './App.css'

import LoginContainer from './containers/LoginContainer'
import Main from './containers/Main'

class App extends Component {

  state = {
    currentUserId: '1',
    currentUser:
     // null,
     {
 id: 1,
 username: "e",
 lists: [
 {
 id: 1,
 title: "Currently Reading"
 },
 {
 id: 2,
 title: "Want to Read"
 },
 {
 id: 3,
 title: "Read"
 }
 ],
 books: [
 {
 id: 1,
 title: "Harry Potter and the Cursed Child – Parts One and Two (Special Rehearsal Edition)",
 authors: [
 "J.K. Rowling",
 "John Tiffany",
 "Jack Thorne"
 ],
 cover_url: "http://books.google.com/books/content?id=tcSMCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
 },
 {
 id: 2,
 title: "Adventure Cats",
 authors: [
 "Laura J. Moss"
 ],
 cover_url: "http://books.google.com/books/content?id=TpNkDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
 },
 {
 id: 3,
 title: "Jesus",
 authors: [
 "Michael Grant"
 ],
 cover_url: "http://books.google.com/books/content?id=zVUxICZlgYIC&printsec=frontcover&img=1&zoom=1&source=gbs_api"
 },
 {
 id: 4,
 title: "Clementina's Cactus",
 authors: [
 "Ezra Jack Keats"
 ],
 cover_url: "http://books.google.com/books/content?id=B5MwDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
 },
 {
 id: 5,
 title: "Flowers",
 authors: [
 "Gail Saunders Smith"
 ],
 cover_url: "http://books.google.com/books/content?id=ogs_KDUQLSsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
 }
 ],
 responses: [ ]
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
