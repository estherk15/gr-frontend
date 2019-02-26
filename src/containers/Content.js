import React from 'react';
import BookContent from './BookContent'
import SideBar from './SideBar'

const Content = (props) => {
  return (
    <div className="container">
      Content Container
      <SideBar />
      <BookContent />
    </div>
  )
}

export default Content
