import React from 'react';
import { NavLink } from 'react-router-dom'

const NavHeader = () => {

  return (
    <div className="NavHeader">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/">My Books</NavLink>

    </div>
  )
}

export default NavHeader;
