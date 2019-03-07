import React from 'react';
import NavHeader from '../components/NavHeader'
import Content from './Content'

class Main extends React.Component {

  render() {

    return (
      <div>
        <div className='container is-fluid'>
          <NavHeader username={this.props.username}/>
        </div>

        <div className="container is-fluid">
          <Content currentUser={this.props.currentUser}/>
        </div>

      </div>

    );
  }
}

export default Main;

  // <NavHeader searchSubmit={this.searchSubmit}/>
