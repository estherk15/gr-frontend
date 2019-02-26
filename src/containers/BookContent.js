import React, { Component } from 'react';
import MyBooks from './MyBooks'
import SearchResults from './SearchResults'

class BookContent extends Component {
  //renderContent is conditional, depending on whether you've entered a book search, it will return either the MyBooks or SearchResults component.
  renderContent = () => {
    if(this.props.searchSubmitted){
      return <SearchResults {...this.props}/>
    } else {
      return <MyBooks />
    }
  }

  render() {

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
