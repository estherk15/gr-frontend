import React from 'react';

class GoogleAPIAdapter extends React.Component {

  //fetches search result from google books API
  static fetchBooksFromGoogle(searchInput){ //searchInput from Content.js
    return fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchInput}`)
    .then(response => response.json())
    .then(json => {
      return json.items.map(item => this.createBook(item)) //returns an array of objects created from the createBook fn.
    })
  }

  //These belong in the Google Books API
  static createBook = (bookObj) => { //volumeInfo is a key in google data

    const bookData = bookObj.volumeInfo
    const categories = bookData.title.categories ? (bookData.title.categories) : "No available categories"
    const title = bookData.title ? bookData.title : "No available Title"
    const description = bookData.description ? bookData.description : "No description available"
    // const cover_url = bookData.imageLinks.thumbnail

    const cover_url = () => {
      if(bookData.imageLinks && bookData.imageLinks.thumbnail) {
        return bookData.imageLinks.thumbnail
      } else {
        return bookData.imageLinks
      }
    }

    const authors = () => {
      if (bookData.authors && bookData.authors.length > 1) {
        return bookData.authors.join(", ")
      } else {
        return bookData.authors
      }
    }

    return {
      title: title,
      id: bookObj.id, //Google has a string of characters attached to each book ex. "wrOQLV6xB-wC"
      authors: authors(),
      description: description,
      categories: categories, //this is an array
      cover_url: cover_url(),
      info_link: bookObj.volumeInfo.infoLink
    }
  }
}

export default GoogleAPIAdapter



// class GoogleAPIAdapter {
  // doSomething(){ //instance
  // }

  // static doSomething(){ //class
  // }

// export default GoogleAPIAdapter

  //
  // const inst = new GoogleAPIAdapter() //instance
  // inst.doSomething()

  // GoogleAPIAdapter.doSomething() //class
