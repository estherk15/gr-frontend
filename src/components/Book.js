import React from 'react';

const Book = (props) => {
  return(
    <div>
      <p>Title: {props.title}</p>

      <p>Author: {props.authors.map(author=> author)}</p>

    </div>
  )

}

export default Book
