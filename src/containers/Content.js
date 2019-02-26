import React from 'react';
import BookContent from './BookContent'
import SideBar from './SideBar'

const Content = (props) => {
  //FUNCTIONAL COMPONENT!!!!!!! NO THIS!!!!!

  return (
    <div className="container">
      Content Container
      <SideBar currentUser={props.currentUser}/>
      <BookContent
        currentUser={props.currentUser}
        {...props}/>
    </div>
  )
}

export default Content
