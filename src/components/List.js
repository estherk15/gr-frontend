import React from 'react';

const List = (props) => {
  // console.log('LIST', props)
  return (
    <div onClick={()=>props.handleClickList(props.title)}>
      <p className="is-size-5"> {props.title} </p>
      <hr/>
    </div>
  )
}

export default List
