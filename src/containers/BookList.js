import React from 'react';
import Book from '../components/Book'

const BookList = (props) => {
  // console.log('BOOKLIST PROPS', props)
  return (
    <div className="book-list">
      Book List Container
      {props.books.map(book => <Book key={book.id} {...book}/>)}
    </div>
  );
}

export default BookList;
