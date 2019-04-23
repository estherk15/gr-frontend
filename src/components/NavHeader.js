import React, { Component } from 'react';

class NavHeader extends Component {

  refreshPage() { //Refresh the window, this is a fake logout, replace this with React Router
    window.location.reload()
  }

  render() {
    return (
      <div className="level" id="navheader">
        <div className="level-left">
          <div className="level-item subtitle is-4">
            <strong>Good Reader</strong>
          </div>
        </div>
        <div className="level-item has-centered-text">
          <div className="level-item subtitle is-4">
            Welcome {this.props.username}!
          </div>
        </div>
        <div className="level-right">
          <div className="level-item">
            <button className="button is-primary" onClick={()=>this.refreshPage()}> Logout </button>
          </div>
        </div>
      </div>

    )
  }
}

export default NavHeader;
