import React, { Component } from 'react';

class SearchAllBooks extends Component {

  state = {
    searchInput: '',
  }

  handleChange = (event) => {
    this.setState({
      searchInput: event.target.value
    })
  }

  render() {
    return (
      <div className="search-form">
        <form onSubmit={(e)=>this.props.searchSubmit(e, this.state.searchInput)}>
          <input type="text" name="searchInput" placeholder="Search for a book" onChange={this.handleChange}/>
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default SearchAllBooks;
