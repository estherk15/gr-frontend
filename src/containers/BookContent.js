import React, { Component } from 'react';
import MyBooks from './MyBooks'
import SearchResults from './SearchResults'

class BookContent extends Component {
  //renderContent is conditional, depending on whether you've entered a book search, it will return either the MyBooks or SearchResults component.
  renderContent = () => {
    if(this.props.searchSubmitted){
      return <SearchResults
                currentUser={this.props.currentUser}
                searchSubmitted={this.props.searchSubmitted}
                books={this.props.searchResults}/>
    } else {
      return <MyBooks {...this.props}/>
    }
  }

  render() {
    // console.log('BOOKCONTENT', this.props)
    return (
      <div className='book-content'>
        Book Content Container
        {this.renderContent()}
      </div>
    );
  }

}

export default BookContent;

// <MyBooks />
