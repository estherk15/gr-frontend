import React from 'react';
import BookContent from './BookContent'
import SideBar from './SideBar'
import SearchAllBooks from '../components/SearchAllBooks'


const fetchBooksFromGoogle = (searchInput) => { //fetches search result from google books API
  return fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchInput}`)
  .then(response => response.json())
  .then(json => {
    return json.items.map(item => createBook(item)) //returns an array of objects created from the createBook fn.
  })
}

//These belong in the Google Books API
const createBook = (bookObj) => { //volumeInfo is a key in google data
  const categories = bookObj.volumeInfo.title.categories ? bookObj.volumeInfo.title.categories : null
  return {
    title: bookObj.volumeInfo.title,
    id: bookObj.id, //Google has a string of characters attached to each book ex. "wrOQLV6xB-wC"
    authors: bookObj.volumeInfo.authors,
    description: bookObj.volumeInfo.description,
    categories: categories, //this is an array
    imgUrl: bookObj.volumeInfo.imageLinks.thumbnail,
    infoLink: bookObj.volumeInfo.infoLink
  }
}

class Content extends React.Component {
  state = {
    searchInput: '',
    searchSubmitted: false,
    searchResults: [],
    clickedList: null,
    clickedListBooks: [],
  }

  //This fn will take the search input and fire off fetchBooksFromGoogle fn with
  fetchSearchResults = (searchInput) => {
    fetchBooksFromGoogle(searchInput)
    .then(books =>{
      this.setState({
        searchSubmitted: true,
        searchResults: books,
      })
    })
  }

  //When Reader submits their search input, fire off the fetchSearchResults fn with search input
  searchSubmit = (event, searchInput) => {
    event.preventDefault()
    this.fetchSearchResults(searchInput)
    event.target.reset()
  }

  handleClickList = (clickedList) => {

    fetch('')
    this.setState({
      searchSubmitted: false,
      clickedList,
    })
  }


  render() {
    console.log(this.state);
    return (
      <div className="columns">
        <div className="column is-full">
          Content Container
          <SearchAllBooks searchSubmit={this.searchSubmit} />
          <div className="columns">
            <div className="column is-3">
              <div className="tile is-ancestor">
                <SideBar handleClickList={this.handleClickList} currentUser={this.props.currentUser}/>
              </div>
            </div>
            <div className="column">
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
