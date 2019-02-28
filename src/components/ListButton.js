import React from 'react';

class ListButton extends React.Component {
  // state = {
  //   selectedList: '',
  // }

  // handleChange = (event) => {
  //   // console.log(event.target.value);
  //   this.setState({
  //     selectedList: event.target.value
  //   }, () => this.addToList())
  // }

  addToList = (list) => {
    console.log(this.props)
    // if(list !== 'Add to List'){
    //   fetch('')
    // }

  }

  render() {
    // console.log(this.props.title)
    return (

      <div className='list-dropdown'>
        <select name="lists" form="listform" onChange={(e)=>this.addToList(e.target.value)}>
          <option>Add to List</option>
          <option value='Currently Reading'>Currently Reading</option>
          <option value='Want to Read'>Want to Read</option>
        </select>
      </div>
    )

  }

}

export default ListButton

// <option value='Read'>Read</option>
