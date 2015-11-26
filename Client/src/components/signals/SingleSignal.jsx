import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
	mixins: [PureRenderMixin],
  	render: function() {
	    return <div className="chat__signal">
			<span>{this.props.signal.get('source')}: </span>
	     	<span>{this.props.signal.get('signal')}</span>
	    </div>;
  	}
});