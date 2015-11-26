import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
	mixins: [PureRenderMixin],
  	render: function() {
	    return 	<span className="chat__space">
		    	 {this.props.space.get('id')} 
	    	</span>;
	 
  	}
});