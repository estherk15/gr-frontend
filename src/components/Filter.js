import React, { Component } from 'react';

class Filter extends Component {

  render() {
    return (
      <div className="control" >
      Filter Component <br/>
        <label className="radio" >
          <input type="radio" name="all" defaultChecked/>
          Title
        </label>
        <label className="radio" >
          <input type="radio" name="title" />
          Author
        </label>
        <label className="radio" >
          <input type="radio" name="author" />
          Genre
        </label>
      </div>
    );
  }

}

export default Filter;
