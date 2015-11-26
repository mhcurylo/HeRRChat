import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './SignalingPad.styl'

export default React.createClass({
	mixins: [PureRenderMixin],

	render: function() {
	    return <div className="chat__element chat__signalingPad">
		    <div className="SignalingPad_column">
			    <h4>Sender</h4>
			</div>
		    <div className="SignalingPad_column">
			    <button className="signalingPad__action">broadcast</button>
			    <button className="signalingPad__action">go</button>
			</div>
				<textarea className="signalingPad__textArea" placeholder="Signal..." value={this.props.noise}/>
		    </div>;
	}
});