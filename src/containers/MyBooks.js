import React, { Component } from 'react';
import Sort from '../components/Sort'
import BookList from './BookList'

class MyBooks extends Component {

  render() {
    return (
      <div>
        MyBooks
        <Sort />
        <BookList />
      </div>
    );
  }

}

export default MyBooks;
