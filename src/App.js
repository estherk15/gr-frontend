import React, { Component } from 'react';
import './App.css'

//React Router
// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom'
import { connect } from 'react-redux'

//Components
// import NavHeader from './components/NavHeader'
import LoginContainer from './containers/LoginContainer'

class App extends Component {

  // componentDidMount() {
  //   fetch('http://localhost:3000/api/v1/books')
  //   .then(res => res.json())
  //   .then(data => console.log(data))
  // }

  render() {
    console.log(this.props)
    return (
      <LoginContainer/>
    );
  }
}

const mapStateToProps = (state) => {
  return { //always returns an object, this will ultimately go in props
    currentUser: state.currentUser,
    testing: state.testing,
  }
}

const mapDispatchToProps = (dispatch) => {
  return { //always returns an object, key value, value is function.
    setUser: (currentUser) => dispatch({ type: 'SET_USER', payload: currentUser})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
