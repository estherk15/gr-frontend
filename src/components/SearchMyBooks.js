import React, { Component } from 'react';

class SearchMyBooks extends Component {

  state = {
    searchInput: '',
  }

  render() {
    return (
      <div >
        <div className="control">
          <input className="input is-small"type='text' placeholder="Search My Books"/>
        </div>
      </div>
    );
  }

}

export default SearchMyBooks;
