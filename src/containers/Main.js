import React from 'react';
import NavHeader from '../components/NavHeader'
import Content from './Content'

class Main extends React.Component {

  componentDidMount() {
    fetch(`http://localhost:3000/api/v1/users/${this.props.currentUserId}`)
    .then(response => response.json())
    .then(userInfo => this.setState({ userInfo }))
  }

  render() {
    return (
      <div className="main-container">
        <NavHeader />
        <Content />

      </div>
    );
  }
}

export default Main;
