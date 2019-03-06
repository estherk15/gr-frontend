import React from 'react';
import ListButton from './ListButton'

class Book extends React.Component {

  render() {
    // console.log('BOOK', this.props);
    return(
      <div className="tile is-child">
        <article className="media">
          <figure className="media-left">
            <p className="image is-50x50">
              <img src={this.props.cover_url} height='50' width='50'/>
            </p>
          </figure>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.title}</strong>
                <br/>
                <strong>Written By: </strong>{this.props.authors}
                <br/>
                {this.props.description}
              </p>
            </div>

          </div>
          <div className="media-right has-text-right">
            <ListButton {...this.props}/>
            <a href={this.props.info_link} targer="_blank" rel="noopener">More details</a>
          </div>
          <div className="media-right">

          </div>
        </article>
      </div>
    )
  }


}

export default Book

//if you add any amplifying information to each Book card, you have to make sure the information matches the user json and
