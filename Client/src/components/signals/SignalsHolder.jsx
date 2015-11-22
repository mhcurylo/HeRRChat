import React from 'react';
import SingleSignal from './SingleSignal';

export default React.createClass({
	render: function() {

		return <div className="signalsHolder">
			<h4>Signals</h4>
			{this.props.signalsBySpace.map(signal => 
					<SingleSignal signal={
						this.props.signals.get(signal)}/>)}
		</div>;
	}
});