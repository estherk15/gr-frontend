import React, { Component } from 'react';

class Sort extends Component {

  render() {
    return (
      <div className="control" >
      Sort Component <br/>
        <label className="radio" >
          <input type="radio" name="title" defaultChecked/>
          Title
        </label>
        <label className="radio" >
          <input type="radio" name="title" />
          Author
        </label>
        <label className="radio" >
          <input type="radio" name="title" />
          Genre
        </label>
      </div>
    );
  }

}

export default Sort;
