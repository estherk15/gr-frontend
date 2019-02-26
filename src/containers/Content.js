import React from 'react';
import BookContent from './BookContent'
import SideBar from './SideBar'

const Content = (props) => {
  //FUNCTIONAL COMPONENT!!!!!!! NO THIS!!!!!

  console.log(props)
  return (
    <div className="container">
      Content Container
      <SideBar />
      <BookContent  {...props}/>
    </div>
  )
}

export default Content
