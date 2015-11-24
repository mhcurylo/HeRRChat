import React from 'react';

export default React.createClass({
  render: function() {
    return <div className="chat__element chat__signalingPad">
    <h4>Sender</h4><br/>
     <input type="text" placeholder="Signal..." value={this.props.noise}/>
     <input type="submit"  value="Broadcast"/>
    </div>;
  }
});