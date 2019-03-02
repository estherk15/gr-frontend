import React from 'react';
import ListButton from './ListButton'

class Book extends React.Component {

  render() {
    // console.log('BOOK', this.props);
    return(
      <div className="list-button">
        <div className="book-info">
          <p>Title: {this.props.title}</p>
          <p>Author(s): {this.props.authors}</p>
        </div>
        {this.props.searchSubmitted ? <ListButton {...this.props}/> : null}

      </div>
    )
  }


}

export default Book

//if you add any amplifying information to each Book card, you have to make sure the information matches the user json and
