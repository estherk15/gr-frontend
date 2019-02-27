import React from 'react';
import NavHeader from '../components/NavHeader'
import Content from './Content'


// const fetchBooksFromGoogle = (searchInput) => {
//   return fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchInput}`)
//   .then(response => response.json())
//   .then(json => {
//     return json.items.map(item => createBook(item))
//   })
// }
//
// const createBook = (bookObj) => { //volumeInfo is a key in google data
//   return {
//     title: bookObj.volumeInfo.title,
//     authors: bookObj.volumeInfo.authors,
//     description: bookObj.volumeInfo.description,
//     snippet: bookObj.volumeInfo.searchInfo.textSnippet,
//     categories: bookObj.volumeInfo.title.categories, //this is an array
//     imgUrl: bookObj.volumeInfo.imageLinks.thumbnail,
//     infoLink: bookObj.volumeInfo.infoLink
//   }
// }

class Main extends React.Component {

  state = {
    searchInput: '',
    searchSubmitted: false,
    searchResults: [],
  }

  //When Reader submits their search input, fire off the fetchSearchResults fn with search input
  searchSubmit = (event, searchInput) => {
    event.preventDefault()
    this.fetchSearchResults(searchInput)
    event.target.reset()
  }

  //This fn will take the search input and fire off fetchBooksFromGoogle fn with
  fetchSearchResults = (searchInput) => {
  //   fetchBooksFromGoogle(searchInput)
  //   .then(books => {
  //     this.setState({
  //       searchSubmitted: true,
  //       searchResults: books,
  //     })
  //   })
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchInput}`)
    .then(response => response.json())
    .then(results => {
      // console.log('results from API', results);
      this.setState({
        searchSubmitted: true,
        searchResults: results.items
      })
    })
  }

  componentDidMount() {
    fetch(`http://localhost:3000/api/v1/users/${this.props.currentUserId}`)
    .then(response => response.json())
    .then(userInfo => this.setState({ userInfo }))
  }

  render() {
    console.log('RENDERING', this.state.searchResults)
    return (
      <div className="main-container">
        <NavHeader searchSubmit={this.searchSubmit}/>
        <Content
          searchSubmit={this.searchSubmit}
          {...this.state} currentUser={this.props.currentUser}/>


      </div>
    );
  }
}

export default Main;
