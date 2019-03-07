import React, { Component } from 'react';
import MyBooks from './MyBooks'
import SearchResults from './SearchResults'
import ListBooks from './ListBooks'

class BookContent extends Component {
  //renderContent is conditional, depending on whether you've entered a book search, clicked on a list or clicked on all books it will return either the MyBooks , list or SearchResults component.
  renderContent = () => {
    if(this.props.searchSubmitted){
      return <SearchResults
                currentUser={this.props.currentUser}
                searchSubmitted={this.props.searchSubmitted}
                books={this.props.searchResults}/>
    } else if(this.props.clickedList){
      return <ListBooks
                currentUser={this.props.currentUser}
                {...this.props.clickedListBooks}/>
    } else if (this.props.allBooksTab === "is-active") {
      return <MyBooks books={this.props.allBooks}/>
    }
    else {
      return <MyBooks {...this.props}/>
    }
  }

  render() {
    // console.log('BOOKCONTENT', this.props)
    return (
      <div className="tile is-ancestor" id="book-content">
        {this.renderContent()}
      </div>
    );
  }

}

export default BookContent;

// <MyBooks />
