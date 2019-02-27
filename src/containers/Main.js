import React from 'react';
import NavHeader from '../components/NavHeader'
import Content from './Content'

class Main extends React.Component {

  render() {
    return (
      <div className="main-container">
        <NavHeader {...this.props.currentUser}/>
        <Content currentUser={this.props.currentUser}/>
      </div>
    );
  }
}

export default Main;

  // <NavHeader searchSubmit={this.searchSubmit}/>
