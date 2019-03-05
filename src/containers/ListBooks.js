import React, { Component } from 'react';
// import Sort from '../components/Sort'
import BookList from './BookList'

class ListBooks extends Component {

  render() {
    console.log("passed down to LISTBOOKS", this.props)
    return (
      <div className="tile is-parent is-vertical">
        <div className="tile is-child">
          <p className="title">My Books</p>
        </div>

        <BookList
          books={this.props.books}
          description={this.props.books.snippet}
          currentUser={this.props.currentUser}/>
      </div>
    );
  }

}

export default ListBooks;
