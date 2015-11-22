import React from 'react';
import SingleSignal from './SingleSignal';

export default React.createClass({
	render: function() {
		return <div className="signalsHolder">
			{this.props.signals.map(signal => 
					<SingleSignal signal={signal}/>)}
		</div>;
	}
});