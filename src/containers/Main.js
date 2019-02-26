import React from 'react';
import NavHeader from '../components/NavHeader'

class Main extends React.Component {

  state = {
    userInfo: null,
  }

  componentDidMount() {
    fetch(`http://localhost:3000/api/v1/users/${this.props.currentUserId}`)
    .then(response => response.json())
    .then(userInfo => this.setState({ userInfo }))
  }

  render() {
    return (
      <div className="main-container">
        <NavHeader/>
        

      </div>
    );
  }
}

export default Main;
