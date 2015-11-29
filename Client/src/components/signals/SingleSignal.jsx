import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';


export default React.createClass({
	mixins: [PureRenderMixin],
  	render: function() {
	    return 	<blockquote>{this.props.signal.get('signal')}<br/>
	     	<cite>{this.props.signal.get('source')}</cite></blockquote>;
  	}
});