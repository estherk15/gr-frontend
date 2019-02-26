import React, { Component } from 'react';
import SearchMyBooks from '../components/SearchMyBooks'
import ListsContainer from '../containers/ListsContainer'

class SideBar extends Component {

  render() {
    return (
      <div className="sidebar">
      SideBar Container
        <SearchMyBooks />
        <ListsContainer />

      </div>
    );
  }

}

export default SideBar;
