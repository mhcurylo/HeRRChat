import React from 'react';

export default React.createClass({
  	render: function() {
	    return 	<span className="space">
		    	 {this.props.space.get('id')} 
	    	</span>;
	 
  	}
});