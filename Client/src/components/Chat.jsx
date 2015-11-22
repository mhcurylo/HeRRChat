import React from 'react';

export default React.createClass({
  getChat: function() {
    console.log('this.props.chatData')
    return this.props.chatData || [];
  },
  render: function() {
    return <div className="chat">
        {'ddd'}  
    </div>;
  }
});