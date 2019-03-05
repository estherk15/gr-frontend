import React from 'react';
import Book from '../components/Book'

const BookList = (props) => {
  // console.log('BOOKLIST PROPS', props)
  return (
    <div className="tile is-parent is-vertical">

      {props.books.map(book =>
        <Book
          key={book.id}
          {...book}
          description={book.snippet}
          searchSubmitted={props.searchSubmitted}
          currentUser={props.currentUser}/>)}
    </div>
  );
}

export default BookList;
