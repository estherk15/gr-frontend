import React from 'react';
import NavHeader from '../components/NavHeader'
import Content from './Content'


const fetchBooksFromGoogle = (word) => {
  return fetch(`https://www.googleapis.com/books/v1/volumes?q=${word}`)
  .then(response => response.json())
  .then(json => {
    return items.map(item => createBook(item))
  })
}

class Main extends React.Component {

  state = {
    searchInput: '',
    searchSubmitted: false,
    searchResults: [],
  }

  searchSubmit = (event, searchInput) => {
    event.preventDefault()
    this.fetchSearchResults(searchInput)
    event.target.reset()
  }

  fetchSearchResults = (word) => {
    // fetchBooksFromGoogle(word)
    // .then(books => {
    //   this.setState({
    //     searchSubmitted: true,
    //     searchResults: books
    //   })
    // })
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${word}`)
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
