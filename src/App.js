import React, { Component } from 'react';
import './App.css'

import LoginContainer from './containers/LoginContainer'
import Main from './containers/Main'

class App extends Component {

  state = {
    currentUserId: '3',
    currentUser:
    // null,
    {
id: 3,
username: "m",
lists: [
{
id: 7,
title: "Currently Reading"
},
{
id: 8,
title: "Want to Read"
},
{
id: 9,
title: "Read"
}
],
books: [
{
id: 5,
title: "Snuggle Puppy!",
authors: [
"Sandra Boynton"
],
cover_url: "http://books.google.com/books/content?id=drdRCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
book_list: "Want to Read",
description: "A great big hug in book form, Snuggle Puppy is a year-round valentine from parent to child. It is bright, chunky, a pleasure to hold, and has a die-cut cover that reveals a glimpse of the joy inside before it's even opened. Best of all, it's packed, of course, with pure Boynton: her inimitable language, her inimitable illustrations, her inimitable sense of fun. OOO, Snuggle Puppy of mine! Everything about you is especially fine. I love what you are. I love what you do. Fuzzy little Snuggle Puppy, I love you. Featuring a sweet and cuddly doggie cast and rhyming verse, Snuggle Puppy is the perfect bedtime book to read last, because of an ending that kids will want again and again: I started with OOO. . . . Now we'll end like this: [BIG SMOOCH!] Oversized lap edition also available—perfect for reading aloud!",
snippet: "A great big hug in book form, Snuggle Puppy is a year-round valentine from parent to child. It is bright, chunky, a pleasure to hold, and has a die-cut cover that reveals a glimpse of the joy inside before it's even opened. Best of all, it's packed, of course, with pure Boynton: her inimitable language, her inimitable illustrations, her inimitable sense of fun. OOO, Snuggle Puppy of mine! Everything about you is especially fine. I love what you are. I love what you do. Fuzzy little Snuggle Puppy..."
},
{
id: 6,
title: "The Red Balloon",
authors: [
"Albert Lamorisse"
],
cover_url: "http://books.google.com/books/content?id=JXEIDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
book_list: "Want to Read",
description: "A small boy follows a red balloon as it drifts around Paris - sometimes just out of reach.",
snippet: "A small boy follows a red balloon as it drifts around Paris - sometimes just out of reach...."
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
