import React, { Component } from 'react';
import SearchMyBooks from '../components/SearchMyBooks'
import ListsContainer from '../containers/ListsContainer'

class SideBar extends Component {

  render() {
    // console.log(this.props.currentUser)
    return (
      <div className="tile is-ancestor">
      SideBar Container
        <div className="tile is-vertical is-parent">
          <div className="tile">
            <SearchMyBooks />
          </div>
          <div>
            <ListsContainer currentUser={this.props.currentUser}/>
          </div>
        </div>
      </div>
    );
  }

}

export default SideBar;
