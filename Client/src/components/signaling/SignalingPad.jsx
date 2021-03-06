import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import {writePad} from '../../actions/actions.js';


export default React.createClass({
    mixins: [PureRenderMixin],
    buttonSignal() {
        if (this.props.noise !== '') {
            if (this.props.name !== '') {
                this.props.broadcastSignal(this.props.noise, 
                    this.props.url, this.props.sid);
            } else {
                this.props.broadcastName(this.props.noise, this.props.sid);
            }
        }
    },
    buttonGoTo() {
        this.props.goTo(this.props.noise);
    },
    handleChange(e) {
        this.props.writePad(e.target.value);
    },
    render: function() {
        return <div className="chat__element chat__signalingPad">
            <div className="column--1of2">
                <h4>{this.props.name ||
                    'Enter your name and broadcast it.'}</h4>
            </div>
            <div className="column--1of2">
                <button onClick={this.buttonSignal} className="signalingPad__action">broadcast</button>
                {this.props.name ? <button onClick={this.buttonGoTo} className="signalingPad__action">go</button> : ''}
            </div>
                <textarea className="signalingPad__textArea" 
                    placeholder="Signal..." 
                    value={this.props.noise}
                    onChange={this.handleChange}/>
            </div>;
    }
});


// add button later. 
// 