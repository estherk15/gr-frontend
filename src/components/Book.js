import React from 'react';
import ListButton from './ListButton'

class Book extends React.Component {

  render() {
    // console.log('BOOK', this.props);
    return(
      <div className="tile is-child">
      <div className="list-button">
        <div className="book-info">
          <p>Title: {this.props.title}</p>
          <p>Author(s): {this.props.authors}</p>
        </div>
        <ListButton {...this.props}/>
      </div>

      <article className="media">
        <figure className="media-left">
          <p className="image is-64x64">
            <img src="https://bulma.io/images/placeholders/128x128.png" />
          </p>
        </figure>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
              <br/>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
            </p>
          </div>
          <nav className="level is-mobile">
            <div className="level-left">
              <a className="level-item">
                <span className="icon is-small"><i className="fas fa-reply"></i></span>
              </a>
              <a className="level-item">
                <span className="icon is-small"><i className="fas fa-retweet"></i></span>
              </a>
              <a className="level-item">
                <span className="icon is-small"><i className="fas fa-heart"></i></span>
              </a>
            </div>
          </nav>
        </div>
        <div className="media-right">
          <button className="delete"></button>
        </div>
      </article>
      </div>
    )
  }


}

export default Book

//if you add any amplifying information to each Book card, you have to make sure the information matches the user json and

// {this.props.searchSubmitted ? <ListButton {...this.props}/> : null}
