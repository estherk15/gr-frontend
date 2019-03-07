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
          "id": 1,
          "username": "esther",
          "lists": [
              {
                  "id": 1,
                  "title": "Currently Reading"
              },
              {
                  "id": 2,
                  "title": "Want to Read"
              },
              {
                  "id": 3,
                  "title": "Read"
              }
          ],
          "books": [
              {
                  "id": 1,
                  "title": "Americanah",
                  "authors": "Chimamanda Ngozi Adichie",
                  "cover_url": "http://books.google.com/books/content?id=siSlP9JOj2YC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
                  "book_list": "Want to Read",
                  "description": "WINNER 2013 – National Book Critics Circle Award for Fiction FINALIST 2014 – Baileys Women’s Prize for Fiction FINALIST 2014 – Andrew Carnegie Medal for Fiction LONGLISTED 2015 – International IMPAC Dublin Literary Award A searing new novel, at once sweeping and intimate, by the award-winning author of Half of a Yellow Sun: a story of love and race centered around a man and woman from Nigeria who seemed destined to be together--until the choices they are forced to make tear them apart. Ifemelu--beautiful, self-assured--left Nigeria 15 years ago, and now studies in Princeton as a Graduate Fellow. She seems to have fulfilled every immigrant's dream: Ivy League education; success as a writer of a wildly popular political blog; money for the things she needs. But what came before is more like a nightmare: wrenching departure from family; humiliating jobs under a false name. She feels for the first time the weight of something she didn't think about back home: race. Obinze--handsome and kind-hearted--was Ifemelu's teenage love; he'd hoped to join her in America, but post 9/11 America wouldn't let him in. Obinze's journey leads him to back alleys of illegal employment in London; to a fake marriage for the sake of a work card, and finally, to a set of handcuffs as he is exposed and deported. Years later, when they reunite in Nigeria, neither is the same person who left home. Obinze is the kind of successful \"Big Man\" he'd scorned in his youth, and Ifemelu has become an \"Americanah\"--a different version of her former self, one with a new accent and attitude. As they revisit their shared passion--for their homeland and for each other--they must face the largest challenges of their lives. Spanning three continents, entering the lives of a richly drawn cast of characters across numerous divides, Americanah is a riveting story of love and expectation set in today's globalized world. From the Hardcover edition.",
                  "info_link": "http://books.google.com/books?id=siSlP9JOj2YC&dq=americanah&hl=&source=gbs_api"
              },
              {
                  "id": 2,
                  "title": "The Cactus",
                  "authors": "Sarah Haywood",
                  "cover_url": "http://books.google.com/books/content?id=-xE1DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
                  "book_list": "Want to Read",
                  "description": "“Wonderfully funny and astute…. Fans of Eleanor Oliphant Is Completely Fine will love The Cactus.” —Red magazine In this witty and heartfelt debut, one woman’s unconventional journey to motherhood means learning to embrace the unexpected Even the prickliest cactus has its flower… For Susan Green, messy emotions don’t fit into the equation of her perfectly ordered life. She has a flat that is ideal for one, a job that suits her passion for logic and an “interpersonal arrangement” that provides cultural and other, more intimate, benefits. But suddenly confronted with the loss of her mother and the news that she is about to become a mother herself, Susan’s greatest fear is realized. She is losing control. When she learns that her mother’s will inexplicably favors her indolent brother, Edward, Susan’s already dismantled world is sent flying into a tailspin. As Susan’s due date draws near and her family problems become increasingly difficult to ignore, Susan finds help and self-discovery in the most unlikely of places. Featuring an endearing cast of characters and tremendous heart, The Cactus is a poignant debut and a delightful reminder that some things can’t be explained by logic alone.",
                  "info_link": "https://play.google.com/store/books/details?id=-xE1DwAAQBAJ&source=gbs_api"
              },
              {
                  "id": 3,
                  "title": "The Remember Balloons",
                  "authors": "Jessie Oliveros",
                  "cover_url": "http://books.google.com/books/content?id=kcNWDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
                  "book_list": "Want to Read",
                  "description": "A 2019 Schneider Family Award Honor Book! What’s Happening to Grandpa meets Up in this tender, sensitive picture book that gently explains the memory loss associated with aging and diseases such as Alzheimer’s. James’s Grandpa has the best balloons because he has the best memories. He has balloons showing Dad when he was young and Grandma when they were married. Grandpa has balloons about camping and Aunt Nelle’s poor cow. Grandpa also has a silver balloon filled with the memory of a fishing trip he and James took together. But when Grandpa’s balloons begin to float away, James is heartbroken. No matter how hard he runs, James can’t catch them. One day, Grandpa lets go of the silver balloon—and he doesn’t even notice! Grandpa no longer has balloons of his own. But James has many more than before. It’s up to him to share those balloons, one by one.",
                  "info_link": "https://play.google.com/store/books/details?id=kcNWDwAAQBAJ&source=gbs_api"
              },
              {
                  "id": 4,
                  "title": "Rat Terrier",
                  "authors": "",
                  "cover_url": "http://books.google.com/books/content?id=vbSbJtCPDCEC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
                  "book_list": "Want to Read",
                  "description": "The Rat Terrier is part of the Miscellaneous Class of the American Kennel Club (AKC) and is known for his friendly personality and strong-willed nature. This all-inclusive care and health guide provides breed-specific information to help you raise a happy and healthy family companion. The Breed Lover's Guide|™ provides the next level in dog care and training for very special breeds of dogs. Written specifically about those less common breeds, this series includes key subjects like breed characteristics, feeding, grooming, training, and health with expert advice from breeders, vets, and trainers.",
                  "info_link": "http://books.google.com/books?id=vbSbJtCPDCEC&dq=rat+terrier&hl=&source=gbs_api"
              },
              {
                  "id": 5,
                  "title": "Popcorn!",
                  "authors": "Elaine Landau, Brian Lies",
                  "cover_url": "http://books.google.com/books/content?id=g7bVCQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
                  "book_list": "Currently Reading",
                  "description": "Pull up a chair and dig in! POPCORN is chock-full of tidbits about one of America's favorite snack foods. Learn what makes popcorn pop, how Native Americans liked their popcorn, and how television almost wiped out popcorn's future. Cooking tips, recipes, and resources included.",
                  "info_link": "http://books.google.com/books?id=g7bVCQAAQBAJ&dq=popcorn&hl=&source=gbs_api"
              }
          ]
      }
  ,
    loggedIn: true,
    books: [],
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
          books: data.books
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
        {loggedIn
          ?
          (<Main {...this.state}
             books={this.state.books}
             username={this.state.currentUser.username}
             lists={this.state.currentUser.lists}/>)
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
