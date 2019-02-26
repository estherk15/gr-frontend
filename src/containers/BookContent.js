import React, { Component } from 'react';
import Sort from '../components/Sort'

class BookContent extends Component {

  render() {
    return (
      <div className='book-content'>
        Book Content Container
        <Sort />
      </div>
    );
  }

}

export default BookContent;
