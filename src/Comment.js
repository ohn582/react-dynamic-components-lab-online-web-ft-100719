import React, { Component } from 'react';
import BlogPost from './BlogPost'

class Comment extends Component {
  render(){
    return(
      <div className="comment">
        <BlogPost commentText={this.props.commentText} />
      </div>
    )
  }
}

export defualt Comment;
