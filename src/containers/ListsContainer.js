import React, { Component } from 'react';
import List from '../components/List'

class ListsContainer extends Component {

  render() {
    return (
      <div className="tile is-child">
        {this.props.currentUser.lists.map(list => <List key={list.id} handleClickList={this.props.handleClickList} {...list}/>)}
      </div>

    );
  }

}

export default ListsContainer;


//{props.lists.map(list => (<List />))}
