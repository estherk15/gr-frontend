import React from 'react';
import BookContent from './BookContent'
import SideBar from './SideBar'
import SearchAllBooks from '../components/SearchAllBooks'
import GoogleAPIAdapter from '../components/GoogleAPIAdapter'


// const fetchBooksFromGoogle = (searchInput) => { //fetches search result from google books API
//   return fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchInput}`)
//   .then(response => response.json())
//   .then(json => {
//     return json.items.map(item => createBook(item)) //returns an array of objects created from the createBook fn.
//   })
// }
//
// //These belong in the Google Books API
// const createBook = (bookObj) => { //volumeInfo is a key in google data
//   const categories = bookObj.volumeInfo.title.categories ? bookObj.volumeInfo.title.categories : null
//   return {
//     title: bookObj.volumeInfo.title,
//     id: bookObj.id, //Google has a string of characters attached to each book ex. "wrOQLV6xB-wC"
//     authors: bookObj.volumeInfo.authors,
//     description: bookObj.volumeInfo.description,
//     categories: categories, //this is an array
//     cover_url: bookObj.volumeInfo.imageLinks.thumbnail,
//     infoLink: bookObj.volumeInfo.infoLink
//   }
// }

class Content extends React.Component {
  state = {
    searchInput: '',
    searchSubmitted: false,
    searchResults: [],
    clickedList: false,
    clickedListBooks: [],
    allBooksTab: "is-active",
  }

  //This fn will take the search input and fire off fetchBooksFromGoogle fn within GoogleAPIAdapter class
  fetchSearchResults = (searchInput) => {
    GoogleAPIAdapter.fetchBooksFromGoogle(searchInput)
    .then(books =>{
      this.setState({
        searchSubmitted: true,
        allBooksTab: null,
        searchResults: books,
        clickedList: false,
      })
    })
  }

  //When Reader submits their search input, fire off the fetchSearchResults fn with search input
  searchSubmit = (event, searchInput) => {
    event.preventDefault()
    this.fetchSearchResults(searchInput)
    // event.target.reset()
  }

  handleClickList = (id) => { //when a user clicks a list in sidebar, this fetches all books in that list for display
    fetch(`http://localhost:3000/api/v1/lists/${id}`)
    .then(response => response.json())
    .then(listBooks => this.setState({
      searchSubmitted: false, //so the search results page doesn't render
      clickedList: true,
      clickedListBooks: listBooks,
    }))
  }

  showAllBooks = () => { //Click event that shows all books.
    this.setState({
      searchSubmitted: false,
      allBooksTab: "is-active",
      clickedList: false,
    })
  }

  render() {
    // console.log  (this.state);
    return (
      <div className="columns">
        <div className="column is-full">
          <div className="section">
            <SearchAllBooks searchSubmit={this.searchSubmit} />
          </div>
          <div className="columns">
            <div className="column is-3">
              <div className="tile is-ancestor">
                <SideBar handleClickList={this.handleClickList} currentUser={this.props.currentUser}/>
              </div>
            </div>
            <div className="column">
            <div className="tabs is-right">
              <ul>
                <li className={this.state.allBooksTab} onClick={this.showAllBooks}><a>Back to All Books</a></li>
              </ul>
            </div>
              <BookContent
                currentUser={this.props.currentUser}
                searchSubmitted={this.state.searchSubmitted}
                searchResults={this.state.searchResults}
                clickedList={this.state.clickedList}
                clickedListBooks={this.state.clickedListBooks}/>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Content

//Content sends down the user's info lf all their books as well as state which holds the search information.
