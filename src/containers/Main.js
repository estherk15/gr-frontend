import React from 'react';
import NavHeader from '../components/NavHeader'
import Content from './Content'

class Main extends React.Component {

  render() {

    return (
      <div className='container'>
        <NavHeader username={this.props.currentUser.username}/>
        <Content currentUser={this.props.currentUser}/>
      </div>
    );
  }
}

export default Main;

  // <NavHeader searchSubmit={this.searchSubmit}/>
