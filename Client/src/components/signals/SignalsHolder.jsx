import React from 'react';
import SingleSignal from './SingleSignal';
import PureRenderMixin from 'react-addons-pure-render-mixin';


export default React.createClass({

    mixins: [PureRenderMixin],
    render: function() {  
        return <div className="chat__element chat__signals">
            <h4>Signals</h4>
            {this.props.signalsFiltered.map(signal =>
                    <SingleSignal key={signal} signal={this.props.signals.get(signal)}/>)}
        </div>;
    }
});