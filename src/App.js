import React, { Component } from 'react';
import './App.css';

//React Router
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { connect } from 'react-redux'
//Components
import NavHeader from './components/NavHeader'


class App extends Component {

  state = {

  }

  render() {
    return (
      // <Router>
      //   <Route path="/new" />
      // </Router>

      <Router>
        <div>
        Inside App.js
          <NavHeader/>

        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => { //must return an object
  return {

  }
}

// const mapDispatchToProps = () => {
//
// }

export default connect(mapStateToProps)(App);
