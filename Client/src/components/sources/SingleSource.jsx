import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
	mixins: [PureRenderMixin],
  	render: function() {
	    return 	<span className="chat__source">
		    	 {this.props.sisource.get('id')} 
	    	</span>;
	 
  	}
});