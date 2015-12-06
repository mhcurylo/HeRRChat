import React from 'react';
import SingleSpace from './SingleSpace';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Link} from 'react-router';

export default React.createClass({
    mixins: [PureRenderMixin],
    render: function() {
        return <div className="chat__element chat__spaces">
            <div className="column--1of2">
                <h4>Spaces</h4>
            </div>
            <div className="column--1of2">
                <div className="spaces-url">
                        <Link to={this.props.url}>{this.props.url}
                        </Link>
                </div>
            </div>
            <div className="column--1of1">
                <ul className="spaces">
                    {this.props.spacesOrder.map(space =>
                         <SingleSpace key={space} space={space}/>)} 
                </ul>
            </div>
        </div>;
    }
});