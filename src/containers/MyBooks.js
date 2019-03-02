import React, { Component } from 'react';
import Sort from '../components/Sort'
import BookList from './BookList'

class MyBooks extends Component {

  render() {
    // console.log("passed down to myBook", this.props)
    return (
      <div>
        MyBooks
        <Sort />
        <BookList
          currentUser={this.props.currentUser}
          searchSubmitted={this.props.searchSubmitted}
          books={this.props.currentUser.books}/>
      </div>
    );
  }

}

export default MyBooks;
