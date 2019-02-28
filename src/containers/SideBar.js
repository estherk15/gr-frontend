import React, { Component } from 'react';
import SearchMyBooks from '../components/SearchMyBooks'
import ListsContainer from '../containers/ListsContainer'

class SideBar extends Component {

  render() {
    // console.log(this.props.currentUser)
    return (
      <div className="sidebar">
      SideBar Container
        <SearchMyBooks />
        <ListsContainer currentUser={this.props.currentUser}/>

      </div>
    );
  }

}

export default SideBar;
