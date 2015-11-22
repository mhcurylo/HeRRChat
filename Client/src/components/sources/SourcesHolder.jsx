import React from 'react';
import SingleSource from './SingleSource';

export default React.createClass({
	render: function() {
		return <div className="sourcesHolder">
			{this.props.sourcesLast.map(source =>
				 <SingleSource key={source} 
				 	sisource={this.props.sources.get(source)}
				 	url={this.props.url}/>)} 
		</div>;
	}
});