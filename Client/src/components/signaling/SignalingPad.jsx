import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import {writePad} from '../../actions/actions.js';


export default React.createClass({
	mixins: [PureRenderMixin],
	handleChange(e) {
    	this.props.writePad(e.target.value);
    },
	render: function() {
	    return <div className="chat__element chat__signalingPad">
		    <div className="SignalingPad_column">
			    <h4>{this.props.name ||
			    	'Enter your name and broadcast it.'}</h4>
			</div>
		    <div className="SignalingPad_column">
			    <button className="signalingPad__action">broadcast</button>
			    
			</div>
				<textarea className="signalingPad__textArea" 
					placeholder="Signal..." 
					value={this.props.noise}
					onChange={this.handleChange}/>
		    </div>;
	}
});


// add button later. 
// <button className="signalingPad__action">go</button>