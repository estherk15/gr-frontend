import React, { Component } from 'react';

class NavHeader extends Component {

  state={
    searchInput:'',
  }

  handleChange = (event) => {
    this.setState({
      searchInput: event.target.value
    })
  }

  render() {
    // console.log(this.state)
    return (
      <div className="navbar">
        <h1>Navigation bar</h1>
        <div className="link">
          <h2> Placeholder for Home link </h2>
        </div>
        <div className="search-form">
          <form onSubmit={(e)=>this.props.searchSubmit(e, this.state.searchInput)}>
            <input type="text" name="searchInput" placeholder="Search for a book" onChange={this.handleChange}/>
            <button type="submit">Search</button>
          </form>
        </div>
        <div className="link">
          <h2> Placeholder for Logout link </h2>
        </div>
      </div>

    )
  }
}

export default NavHeader;
