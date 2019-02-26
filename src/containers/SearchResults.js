import React, { Component } from 'react';
import Filter from '../components/Filter'
import BookList from './BookList'

class SearchResults extends Component {

  state = {

  }


  render() {
    console.log(this.props.searchInput)
    return (
      <div className='search-results'>
        Search Results
        <Filter />
        <BookList />
      </div>
    );
  }

}

export default SearchResults;
