import React from 'react';

export default React.createClass({
  render: function() {
    return <div className="signalingPad">
    <h4>noisy</h4><br/>
    {this.props.noise}
    </div>;
  }
});