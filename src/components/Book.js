import React from 'react';
import ListButton from './ListButton'

const Book = (props) => {
  return(
    <div className="list-button">
      <div className="book-info">
        <p>Title: {props.title}</p>

      </div>
      <ListButton props={props}/>
    </div>
  )

}

export default Book

//if you add any amplifying information to each Book card, you have to make sure the information matches the user json and
