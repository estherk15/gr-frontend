import React, { Component } from 'react';
// import Filter from '../components/Filter'
import BookList from './BookList'

class SearchResults extends Component {

  render() {
    console.log('PROPS in Search Result', this.props)
    return (
      <div className="tile is-parent is-vertical">
      <div className="tile is-child">
        <p className="title">Search Results</p>
      </div>


        <BookList
          books={this.props.books}
          searchSubmitted={this.props.searchSubmitted}
          currentUser={this.props.currentUser}/>
      </div>
    );
  }

}

export default SearchResults;
// <Filter />
