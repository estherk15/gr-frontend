import React from 'react';

class ListButton extends React.Component {

  state={
    active:'',
  }



  addBookToList = (event) => {
    // console.log(event.target.name)
    console.log('ONCLICK HANDLER',this.props)
    const listId = event.target.value
    const listTitle=event.target.name
    const bookData = {
      google_id: this.props.id,
      title: this.props.title,
      authors: this.props.authors,
      cover_url: this.props.imgUrl,
      lists: [
       {
         id: 1 ,
         title: "Currently Reading"
       }
      ]
    }
    console.log(bookData)
    fetch('http://localhost:3000/api/v1/add_book', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(bookData),
    })
    .then(response => response.json())
    .then(console.log)
  }

  render() {
    console.log('LIST BUTTON', this.props.currentUser.lists)
    // console.log('LISTS', this.props.currentUser.lists);
    const option = this.props.currentUser.lists.map(list => {
      return (

          <option className='dropdown-item'>{list.title}</option>

      )
    })

    return (
      <div className='select' >
        <select onChange={this.addBookToList}>
          <option>Add a Book</option>
          {option}
        </select>
      </div>
    )
  }
}

export default ListButton

// <option value='Read'>Read</option>
//PROPS authors: ["J.K. Rowling"]
// categories: null
// description: ""Turning the envelope over, his hand trembling, Harry saw a purple wax seal bearing a coat of arms; a lion, an eagle, a badger and a snake surrounding a large letter 'H'." Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. Then, on Harry's eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry. An incredible adventure is about to begin! Pottermore has now launched the Wizarding World Book Club. Visit Pottermore to sign up and join weekly Twitter discussions at WW Book Club."
// id: "wrOQLV6xB-wC"
// imgUrl: "http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
// infoLink: "https://play.google.com/store/books/details?id=wrOQLV6xB-wC&source=gbs_api"
// title: "Harry Potter and the Sorcerer's Stone"
// key: (...)


//List drop downs are hardcoded, how can you get it to be iterative so that they will reflect the user's actual lists?

// <select name="lists" form="listform" onChange={this.addBookToList}>
//   <option>Add to List</option>
//   <option value='1'>Currently Reading</option>
//   <option value='2'>Want to Read</option>
//   <option value='3'>Read</option>
// </select>
