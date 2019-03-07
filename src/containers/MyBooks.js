import React, { Component } from 'react';
// import Sort from '../components/Sort'
import BookList from './BookList'

class MyBooks extends Component {

  render() {
    console.log("passed down to myBook", this.props)
    return (
      <div className="tile is-parent is-vertical">
        <div className="tile is-child">
          <p className="title">My Books</p>
        </div>

        <BookList
          books={this.props.currentUser.books}
          searchSubmitted={this.props.searchSubmitted}
          currentUser={this.props.currentUser}/>
      </div>
    );
  }

}

export default MyBooks;

// <Sort />
