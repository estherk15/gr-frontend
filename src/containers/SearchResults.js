import React, { Component } from 'react';
import Filter from '../components/Filter'
import BookList from './BookList'

class SearchResults extends Component {
  // cleanData = (props) => {
  //   return {
  //
  //   }
  // }

  render() {
    // console.log('PROPS in Search Result', this.props)
    return (
      <div className='search-results'>
        Search Results
        <Filter />
        <BookList books={this.props.books}/>
      </div>
    );
  }

}

export default SearchResults;
