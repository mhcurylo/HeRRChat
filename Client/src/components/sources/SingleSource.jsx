import React from 'react';

export default React.createClass({
  	render: function() {
	    return 	<span className="source">
		    	 {this.props.sisource.get('id')} 
	    	</span>;
	 
  	}
});