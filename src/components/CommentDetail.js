import React, { Fragment } from 'react';

const CommentDetail = ({ author, timeAgo, content, avatar }) => <Fragment>
  <div className="comment">
    <a href="/" className="avatar">
      <img 
        alt={ `${author} Avatar` } 
        title={ `${author} Avatar` } 
        src={ avatar }
      />
    </a>
    <div className="content">
      <a href="/" className="author">{ author }</a>
      <div className="metadata">
        <span className="date">{ timeAgo }</span>
      </div>
      <div className="text">{ content }</div>
    </div>
  </div>
</Fragment>;

export default CommentDetail;
