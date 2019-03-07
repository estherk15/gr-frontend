import React from 'react';
import Book from '../components/Book'

const BookList = (props) => {
  console.log('BOOKLIST PROPS', props)
  return (
    <div className="tile is-parent is-vertical" id="reading-list">

      {props.books.map(book =>
        <Book
          key={book.id}
          {...book}
          description={book.description}
          searchSubmitted={props.searchSubmitted}/>)}
    </div>
  );
}

export default BookList;
