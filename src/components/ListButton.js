import React from 'react';

class ListButton extends React.Component {
  state ={
    value:'',
  }

  addBookToList = (event) => { //Adds a book to a list
    const listId = event.target.value
    const bookData = {
      google_id: this.props.id,
      title: this.props.title,
      authors: this.props.authors,
      cover_url: this.props.imgUrl,
      list: {id: listId}
    }

    fetch('http://localhost:3000/api/v1/add_book', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(bookData),
    })
  }

  changeList = (event) => { //Updates the book's list
    const listId = event.target.value
    const bookId = this.props.id

    fetch(`http://localhost:3000/api/v1/books/${bookId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        list_id: listId,
      })
    })
    .then(response => response.json())
    .then(console.log)
  }

  render() {
    const dropdown = () => {
      if(this.props.searchSubmitted){
        return (
          <div className='select' >
            <select onChange={this.addBookToList}>
              <option>Add a Book</option>
              <option value='1'>Currently Reading</option>
              <option value='2'>Want to Read</option>
              <option value='3'>Read</option>
            </select>
          </div>
        )
      } else {
        return (
          <div className='select' >
            <select onChange={this.changeList}>
              <option>Change List</option>
              <option value='1'>Currently Reading</option>
              <option value='2'>Want to Read</option>
              <option value='3'>Read</option>
            </select>
          </div>

        )
      }
    }


    // <i class="fas fa-times"></i>

    return (
      <div>
        {dropdown()}
      </div>

    )
  }
}

export default ListButton
