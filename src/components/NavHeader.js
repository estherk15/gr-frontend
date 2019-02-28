import React, { Component } from 'react';

class NavHeader extends Component {


  render() {
    // console.log(this.props)
    return (
      <div className="navbar">
        <h1>Navigation bar</h1>
        <div className="link">
          <h2> Welcome {this.props.username}! </h2>
        </div>
        <div className="link">
          <h2> Placeholder for Logout link </h2>
        </div>
      </div>

    )
  }
}

export default NavHeader;
