import React, { Component } from 'react';
import SearchMyBooks from '../components/SearchMyBooks'
import ListsContainer from '../containers/ListsContainer'

class SideBar extends Component {

  render() {
    // console.log(this.props.currentUser)
    return (
      <div className="tile is-parent is-vertical" id="sidebar">
        <div className="tile is-child">
          <strong className="title">My Reading Lists</strong>
        </div>

        <div className="tile is-vertical is-parent">
          <ListsContainer handleClickList={this.props.handleClickList} currentUser={this.props.currentUser}/>
        </div>

      </div>
    );
  }

}

export default SideBar;
// <div className="tile is-parent">
//   <SearchMyBooks />
// </div>
