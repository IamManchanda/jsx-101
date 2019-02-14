import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './components/CommentDetail';
import ApprovalCard from './components/ApprovalCard';

const App = class extends Component {
  render() {
    return <Fragment>
      <div className="ui container comments">
        <ApprovalCard>
          <CommentDetail 
            author="Sam"
            timeAgo="Today at 04:45 PM"
            content="Nice Blog Post, Job well done!"
            avatar={ faker.image.avatar() }
          />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail 
            author="Alex"
            timeAgo="Today at 02:00 AM"
            content="I like this awesome Subject!"
            avatar={ faker.image.avatar() } 
          />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetail 
            author="Jane"
            timeAgo="Yesterday at 05:00 PM"
            content="Love your writting and the Article!"
            avatar={ faker.image.avatar() } 
          />
        </ApprovalCard>
      </div>
    </Fragment>;
  }
};

ReactDOM.render(<App />, document.getElementById('root'));
