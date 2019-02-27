import React, { Component } from 'react';
import Sort from '../components/Sort'
import BookList from './BookList'

class MyBooks extends Component {

  render() {
    // console.log(this.props)
    return (
      <div>
        MyBooks
        <Sort />
        <BookList {...this.props}/>
      </div>
    );
  }

}

export default MyBooks;
