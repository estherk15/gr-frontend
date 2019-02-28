import React, { Component } from 'react';

class SearchMyBooks extends Component {

  state = {
    searchInput: '',
  }

  render() {
    return (
      <div >
        <input type='text' placeholder="Search My Books"/>
      </div>
    );
  }

}

export default SearchMyBooks;
