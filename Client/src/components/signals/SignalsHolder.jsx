import React from 'react';
import SingleSignal from './SingleSignal';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './Signals.styl'

export default React.createClass({
    mixins: [PureRenderMixin],
	render: function() {

		return <div className="chat__element chat__signals">
			<h4>Signals</h4> 
			{this.props.signalsBySpace.map(signal => 
					<SingleSignal signal={
						this.props.signals.get(signal)}/>)}
		</div>;
	}
});