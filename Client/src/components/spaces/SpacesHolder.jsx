import React from 'react';
import SingleSpace from './SingleSpace';
import PureRenderMixin from 'react-addons-pure-render-mixin';


export default React.createClass({
    mixins: [PureRenderMixin],
	render: function() {
		return <div className="chat__element chat__spaces">
			<h4>Spaces</h4>
			<ul className="spaces">
				{this.props.spacesOrder.map(space =>
					 <SingleSpace key={space} 
					 	space={this.props.spaces.get(space)}
					 	url={this.props.url} 	/>)} 
			</ul>
		</div>;
	}
});