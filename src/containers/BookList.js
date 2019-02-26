import React, { Component } from 'react';
import Book from '../components/Book'

class BookList extends Component {

  render() {
    console.log('BOOKLIST PROPS', this.props)
    return (
      <div className="book-list">
        Book List Container
        {this.props.books.map(book => <Book key={book.id} {...book}/>)}
      </div>
    );
  }

}

export default BookList;
