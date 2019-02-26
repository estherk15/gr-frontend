import React from 'react';

const List = (props) => {
  console.log(props)
  return (
    <div className="list-item">
      <h1>{props.title}</h1>
      
    </div>
  )
}

export default List
