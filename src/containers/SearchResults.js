import React, { Component } from 'react';
import Filter from '../components/Filter'
import BookList from './BookList'

class SearchResults extends Component {

  render() {
    // console.log('PROPS in Search Result', this.props)
    return (
      <div className='search-results'>
        Search Results
        <Filter />
        <BookList
          books={this.props.books}
          searchSubmitted={this.props.searchSubmitted}
          currentUser={this.props.currentUser}/>
      </div>
    );
  }

}

export default SearchResults;
