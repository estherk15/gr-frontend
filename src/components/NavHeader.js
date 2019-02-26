import React, { Component } from 'react';

const NavHeader = (props) => {

  return (
    <div className="navbar">
      <h1>Navigation bar</h1>
      <div className="link">
        <h2> Placeholder for Home link </h2>
      </div>
      <div className="search-form">
        <form >
          <input type="text" name="searchInput" placeholder="Search for a book"/>
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="link">
        <h2> Placeholder for Logout link </h2>
      </div>
    </div>
  )
}

export default NavHeader;
