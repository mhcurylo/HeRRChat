import React from 'react';
import {Link} from 'react-router';
import PureRenderMixin from 'react-addons-pure-render-mixin';


export default React.createClass({
	mixins: [PureRenderMixin],
  	render: function() {

	    return 	<li className="spaces">
		    	 <Link to={this.props.space}>{this.props.space}</Link>
	    	</li>;
  	}
});