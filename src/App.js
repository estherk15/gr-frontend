import React, { Component } from 'react';
//React Router
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

// const NewRoute = () => {
//   <div>
// }
class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/new" />
      </Router>
    );
  }
}

export default App;
