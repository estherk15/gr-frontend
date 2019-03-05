import React, { Component } from 'react';

class NavHeader extends Component {


  render() {
    // console.log(this.props)
    return (
      <div className="level" id="navheader">
        <div className="level-left">
          <div className="level-item subtitle is-5">
            <strong>Good Reader</strong>
          </div>
        </div>
        <div className="level-item has-centered-text">
          <div className="level-item subtitle is-5">
            Welcome {this.props.username}!
          </div>
        </div>
        <div className="level-right">
          <div className="level-item">
            <button className="button is-primary"> Placeholder for Logout link </button>
          </div>
        </div>
      </div>

    )
  }
}

export default NavHeader;
