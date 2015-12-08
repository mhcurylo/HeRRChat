import React from 'react';
import SingleSource from './SingleSource';
import PureRenderMixin from 'react-addons-pure-render-mixin';


export default React.createClass({
    mixins: [PureRenderMixin],
    render: function() {
        return <div className="chat__element chat__sources">
            <h4>Sources</h4>
            <ul className="sources">
            {this.props.sources ? this.props.sources.map(source =>
                 <SingleSource source={source}/>) : ''}
            </ul>
        </div>;
    }
});
