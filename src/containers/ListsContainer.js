import React, { Component } from 'react';
import List from '../components/List'

class ListsContainer extends Component {

  render() {
    return (
      <div className="list-container">
      List Container
      {this.props.currentUser.lists.map(list => <List key={list.id} {...list}/>)}
      </div>
    );
  }

}

export default ListsContainer;


//{props.lists.map(list => (<List />))}
