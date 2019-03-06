import React, { Component } from 'react';

class SearchMyBooks extends Component {

  state = {
    searchInput: '',
  }

  render() {
    return (

      <div className="tile is-child">
        <div className="field">
          <div className="control">
            <input className="input is-small" type='text' placeholder="Search My Books"/>
            <div className="level">
              <div className="level-item is-left"></div>
              <div className="level-item is-pulled-right">
                <input className="button is-small is-primary" type="submit" placeholder="Search" />
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default SearchMyBooks;
