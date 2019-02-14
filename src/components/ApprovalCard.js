import React, { Fragment } from 'react';

const ApprovalCard = ({ children }) => <Fragment>
  <div class="ui card">
    <div class="content">{ children }</div>
    <div class="extra content">
      <div className="ui two buttons">
        <div className="ui basic green button">Approve</div>
        <div className="ui basic red button">Reject</div>
      </div>
    </div>
  </div>
</Fragment>;

export default ApprovalCard;
