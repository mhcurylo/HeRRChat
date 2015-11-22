import React from 'react';

export default React.createClass({
  render: function() {
    return <div className="signalsHolder">
    {this.props.spaces.getIn(['/', 'id'])}
    </div>;
  }
});