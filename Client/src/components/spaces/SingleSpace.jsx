import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './Spaces.styl';

export default React.createClass({
	mixins: [PureRenderMixin],
  	render: function() {
	    return 	<li className="space">
		    	 {this.props.space.get('id')} 
	    	</li>;
	 
  	}
});