import React from 'react';
import BookContent from './BookContent'
import SideBar from './SideBar'
import SearchAllBooks from '../components/SearchAllBooks'


const fetchBooksFromGoogle = (searchInput) => {
  return fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchInput}`)
  .then(response => response.json())
  .then(json => {
    return json.items.map(item => createBook(item))
  })
}

const createBook = (bookObj) => { //volumeInfo is a key in google data
  return {
    title: bookObj.volumeInfo.title,
    authors: bookObj.volumeInfo.authors,
    description: bookObj.volumeInfo.description,
    categories: bookObj.volumeInfo.title.categories, //this is an array
    imgUrl: bookObj.volumeInfo.imageLinks.thumbnail,
    infoLink: bookObj.volumeInfo.infoLink
  }
}

class Content extends React.Component {
  state = {
    searchInput: '',
    searchSubmitted: false,
    searchResults: [],
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

  componentDidMount() {
    fetch(`http://localhost:3000/api/v1/users/${this.props.currentUser.id}`)
    .then(response => response.json())
    .then(userInfo => this.setState({ userInfo }))
  }

  //When Reader submits their search input, fire off the fetchSearchResults fn with search input
  searchSubmit = (event, searchInput) => {
    event.preventDefault()
    this.fetchSearchResults(searchInput)
    event.target.reset()
  }

  render() {
    return (
      <div className="container">
        Content Container
        <SearchAllBooks searchSubmit={this.searchSubmit} />
        <SideBar currentUser={this.props.currentUser}/>
        <BookContent
          currentUser={this.props.currentUser}
          {...this.state}/>
      </div>
    )
  }
}

export default Content
