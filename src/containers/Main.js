import React from 'react';
import NavHeader from '../components/NavHeader'
import Content from './Content'

class Main extends React.Component {

  state = {
    searchInput: '',
    searchSubmitted: false,
    searchResults: null,

  }

  searchSubmit = (event, searchInput) => {
    event.preventDefault()
    this.setState({
      // searchInput: searchInput,
      searchSubmitted: true,
    }, this.fetchSearchResults(searchInput))
    event.target.reset()
  }

  fetchSearchResults = (word) => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${word}`)
    .then(response => response.json())
    .then(console.log)
  }


  componentDidMount() {
    fetch(`http://localhost:3000/api/v1/users/${this.props.currentUserId}`)
    .then(response => response.json())
    .then(userInfo => this.setState({ userInfo }))
  }

  render() {

    return (
      <div className="main-container">
        <NavHeader searchSubmit={this.searchSubmit}/>
        <Content searchSubmit={this.searchSubmit} {...this.state}/>

      </div>
    );
  }
}

export default Main;
