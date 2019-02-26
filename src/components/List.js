import React from 'react';

const List = (props) => {
  return (
    <div className="list-item">
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </div>
  )
}

export default List
