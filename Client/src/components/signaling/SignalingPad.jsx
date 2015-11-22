import React from 'react';

export default React.createClass({
  render: function() {
    return <div className="signalingPad">
    {this.props.noise}
    </div>;
  }
});