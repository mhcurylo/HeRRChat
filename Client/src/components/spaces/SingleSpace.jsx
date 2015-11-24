import React from 'react';

export default React.createClass({
  	render: function() {
	    return 	<span className="chat__space">
		    	 {this.props.space.get('id')} 
	    	</span>;
	 
  	}
});