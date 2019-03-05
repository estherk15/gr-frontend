import React from 'react';

class ListButton extends React.Component {
  state ={
    value:'',
    list: this.props.book_list,
  }

  addBookToList = (event) => { //Adds a book to a list
    const listName = event.target.value
    const bookData = {
      user_id: this.props.currentUser.id,
      google_id: this.props.id,
      title: this.props.title,
      authors: this.props.authors,
      cover_url: this.props.cover_url,
      list: {title: listName},
      description: this.props.description,
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

  changeList = (event) => { //Updates the book's list, backend takes the book id and changes its list to the list with the matching title.
    const listName = event.target.value
    const bookId = this.props.id

    fetch(`http://localhost:3000/api/v1/books/${bookId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        id: this.props.id,
        user_id: this.props.currentUser.id,
        title: listName,
      })
    })
    .then(response => response.json())
    .then(newList => this.setState({
      list: newList.book_list
    }))
  }

  render() {
    console.log('LISTBUTTON', this.props);
    const dropdown = () => {
      if(this.props.searchSubmitted){
        return (
          <div className='select' >
            <select onChange={this.addBookToList}>
              <option>Add a Book</option>
              <option value='Currently Reading'>Currently Reading</option>
              <option value='Want to Read'>Want to Read</option>
              <option value='Read'>Read</option>
            </select>
          </div>
        )
      } else {
        return (
          <div className='select' >
            <select value={this.state.list} onChange={this.changeList}>

              <option value='Currently Reading'>Currently Reading</option>
              <option value='Want to Read'>Want to Read</option>
              <option value='Read'>Read</option>
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
