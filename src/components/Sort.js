import React, { Component } from 'react';

class Sort extends Component {

  render() {
    return (
      <div class="control" >
      Sort Component <br/>
        <label class="radio" >
          <input type="radio" name="title" checked/>
          Title
        </label>
        <label class="radio" >
          <input type="radio" name="title" />
          Author
        </label>
        <label class="radio" >
          <input type="radio" name="title" />
          Genre
        </label>
      </div>
    );
  }

}

export default Sort;
