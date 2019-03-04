import React, { Component } from 'react';

class SearchAllBooks extends Component {

  state = {
    searchInput: '',
  }

  handleChange = (event) => {
    this.setState({
      searchInput: event.target.value
    })
  }

  render() {
    return (

        <div className="level">
          <div className="level-left"></div>

          <form className="level-right" onSubmit={(e)=>this.props.searchSubmit(e, this.state.searchInput)}>
            <div className="level-item">
              <input className="input" type="text" name="searchInput" placeholder="Search for a book" onChange={this.handleChange}/>
            </div>
            <div className="level-item">
              <input className="button is-primary" type="submit" value="Search"/>
            </div>
          </form>

          <div className="level-right"></div>
        </div>
    
    );
  }
}

export default SearchAllBooks;
