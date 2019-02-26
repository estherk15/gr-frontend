import React, { Component } from 'react';
import Book from '../components/Book'

class BookList extends Component {

  render() {
    return (
      <div className="book-list">
        Book List Container
        <Book />
      </div>
    );
  }

}

export default BookList;
