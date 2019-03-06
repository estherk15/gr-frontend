import React, { Component } from 'react';
import './App.css'

import LoginContainer from './containers/LoginContainer'
import Main from './containers/Main'

class App extends Component {

  state = {
    currentUserId: '',
    currentUser:
    null,

//     {
// id: 1,
// username: "esther",
// lists: [
// {
// id: 1,
// title: "Currently Reading"
// },
// {
// id: 2,
// title: "Want to Read"
// },
// {
// id: 3,
// title: "Read"
// }
// ],
// books: [
// {
// id: 2,
// title: "James and the Giant Peach",
// authors: [
// "Roald Dahl"
// ],
// cover_url: "http://books.google.com/books/content?id=o5-dBrmqAJ0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
// book_list: "Read",
// description: "From the bestselling author of Charlie and the Chocolate Factory and The BFG! After James Henry Trotter's parents are tragically eaten by a rhinoceros, he goes to live with his two horrible aunts, Spiker and Sponge. Life there is no fun, until James accidentally drops some magic crystals by the old peach tree and strange things start to happen. The peach at the top of the tree begins to grow, and before long it's as big as a house. Inside, James meets a bunch of oversized friends—Grasshopper, Centipede, Ladybug, and more. With a snip of the stem, the peach starts rolling away, and the great adventure begins! From the Trade Paperback edition.",
// info_link: null
// },
// {
// id: 3,
// title: "Half a Lifelong Romance",
// authors: [
// "Eileen Chang",
// "Ailing Zhang"
// ],
// cover_url: "http://books.google.com/books/content?id=nAbTCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
// book_list: "Want to Read",
// description: "Shanghai, 1930s. Shen Shijun, a young engineer, has fallen in love with his colleague, the beautiful Gu Manzhen. He is determined to resist his family's efforts to match him with his wealthy cousin so that he can marry the woman he truly loves. But dark circumstances--a lustful brother-in-law, a treacherous sister, a family secret--force the two young lovers apart. As Manzhen and Shijun go on their separate paths, they lose track of one another, and their lives become filled with feints and schemes, missed connections and tragic misunderstandings. At every turn, societal expectations seem to thwart their prospects for happiness. Still, Manzhen and Shijun dare to hold out hope--however slim--that they might one day meet again. A glamorous, wrenching tale set against the glittering backdrop of an extraordinary city, Half a Lifelong Romance is a beloved classic from one of the essential writers of twentieth-century China--",
// info_link: null
// },
// {
// id: 1,
// title: "The Cactus",
// authors: [
// "Sarah Haywood"
// ],
// cover_url: "http://books.google.com/books/content?id=-xE1DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
// book_list: "Currently Reading",
// description: "“Wonderfully funny and astute…. Fans of Eleanor Oliphant Is Completely Fine will love The Cactus.” —Red magazine In this witty and heartfelt debut, one woman’s unconventional journey to motherhood means learning to embrace the unexpected Even the prickliest cactus has its flower… For Susan Green, messy emotions don’t fit into the equation of her perfectly ordered life. She has a flat that is ideal for one, a job that suits her passion for logic and an “interpersonal arrangement” that provides cultural and other, more intimate, benefits. But suddenly confronted with the loss of her mother and the news that she is about to become a mother herself, Susan’s greatest fear is realized. She is losing control. When she learns that her mother’s will inexplicably favors her indolent brother, Edward, Susan’s already dismantled world is sent flying into a tailspin. As Susan’s due date draws near and her family problems become increasingly difficult to ignore, Susan finds help and self-discovery in the most unlikely of places. Featuring an endearing cast of characters and tremendous heart, The Cactus is a poignant debut and a delightful reminder that some things can’t be explained by logic alone.",
// info_link: null
// }
// ]
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
