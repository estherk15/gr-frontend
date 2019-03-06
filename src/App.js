import React, { Component } from 'react';
import './App.css'

import LoginContainer from './containers/LoginContainer'
import Main from './containers/Main'

class App extends Component {

  state = {
    currentUserId: '1',
    currentUser:
    null,

  //   {
  //   id: 1,
  //   username: "Esther",
  //   lists: [
  //   {
  //   id: 1,
  //   title: "Currently Reading"
  //   },
  //   {
  //   id: 2,
  //   title: "Want to Read"
  //   },
  //   {
  //   id: 3,
  //   title: "Read"
  //   }
  //   ],
  //   books: [
  //   {
  //   id: 1,
  //   title: "Half a Lifelong Romance",
  //   authors: "Eileen Chang, Ailing Zhang",
  //   cover_url: "http://books.google.com/books/content?id=nAbTCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  //   book_list: "Want to Read",
  //   description: "Shanghai, 1930s. Shen Shijun, a young engineer, has fallen in love with his colleague, the beautiful Gu Manzhen. He is determined to resist his family's efforts to match him with his wealthy cousin so that he can marry the woman he truly loves. But dark circumstances--a lustful brother-in-law, a treacherous sister, a family secret--force the two young lovers apart. As Manzhen and Shijun go on their separate paths, they lose track of one another, and their lives become filled with feints and schemes, missed connections and tragic misunderstandings. At every turn, societal expectations seem to thwart their prospects for happiness. Still, Manzhen and Shijun dare to hold out hope--however slim--that they might one day meet again. A glamorous, wrenching tale set against the glittering backdrop of an extraordinary city, Half a Lifelong Romance is a beloved classic from one of the essential writers of twentieth-century China--",
  //   info_link: "http://books.google.com/books?id=nAbTCwAAQBAJ&dq=half+a+lifelong&hl=&source=gbs_api"
  //   },
  //
  //   {
  //   id: 3,
  //   title: "In Other Words",
  //   authors: "["Jhumpa Lahiri"]",
  //   cover_url: "http://books.google.com/books/content?id=ABcrCQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  //   book_list: "Want to Read",
  //   description: "National Best Seller From the best-selling author and Pulitzer Prize winner, a powerful nonfiction debut—an “honest, engaging, and very moving account of a writer searching for herself in words.” —Kirkus Reviews (starred) In Other Words is a revelation. It is at heart a love story—of a long and sometimes difficult courtship, and a passion that verges on obsession: that of a writer for another language. For Jhumpa Lahiri, that love was for Italian, which first captivated and capsized her during a trip to Florence after college. Although Lahiri studied Italian for many years afterward, true mastery always eluded her. Seeking full immersion, she decides to move to Rome with her family, for “a trial by fire, a sort of baptism” into a new language and world. There, she begins to read, and to write—initially in her journal—solely in Italian. In Other Words, an autobiographical work written in Italian, investigates the process of learning to express oneself in another language, and describes the journey of a writer seeking a new voice. Presented in a dual-language format, this is a wholly original book about exile, linguistic and otherwise, written with an intensity and clarity not seen since Vladimir Nabokov: a startling act of self-reflection and a provocative exploration of belonging and reinvention. From the Hardcover edition.",
  //   info_link: "https://play.google.com/store/books/details?id=ABcrCQAAQBAJ&source=gbs_api"
  //   },
  //   {
  //   id: 4,
  //   title: "Ancillary Justice",
  //   authors: "["Ann Leckie"]",
  //   cover_url: "http://books.google.com/books/content?id=obAHf43THvQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
  //   book_list: "Want to Read",
  //   description: "The only novel ever to win the Hugo, Nebula, and Arthur C. Clarke Awards and the first book in Ann Leckie's New York Times bestselling trilogy. On a remote, icy planet, the soldier known as Breq is drawing closer to completing her quest. Once, she was the Justice of Toren - a colossal starship with an artificial intelligence linking thousands of soldiers in the service of the Radch, the empire that conquered the galaxy. Now, an act of treachery has ripped it all away, leaving her with one fragile human body, unanswered questions, and a burning desire for vengeance. In the Ancillary world: 1. Ancillary Justice2. Ancillary Sword3. Ancillary Mercy",
  //   info_link: "https://play.google.com/store/books/details?id=obAHf43THvQC&source=gbs_api"
  //   }
  //   ]
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
    // console.log(this.state)
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
