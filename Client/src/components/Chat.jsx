import React from 'react';
import SignalsHolder from './signals/SignalsHolder';
import SpacesHolder from './spaces/SpacesHolder';
import SourcesHolder from './sources/SourcesHolder';
import SignalingPad from './signaling/SignalingPad';
import './chat.styl';
import {connect} from 'react-redux';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import * as actionCreators from '../actions/actions.js';


const Chat = React.createClass({
    mixins: [PureRenderMixin],
    render: function() {
        return <div className="chat">
            <SignalsHolder 
                signals={this.props.signals} 
                signalsFiltered={this.props.signalsFiltered}/>
            <SpacesHolder
                spacesOrder={this.props.spacesOrder}
                url={this.props.url}/>
            <SourcesHolder
                sources={this.props.sources}
                url={this.props.url}/>
            <SignalingPad 
                sid = {this.props.sid}
                url = {this.props.url}
                writePad = {this.props.writePad}
                broadcastName = {this.props.broadcastName} 
                broadcastSignal  = {this.props.broadcastSignal}
                name = {this.props.name} 
                noise={this.props.noise}/>
        </div>;
}
});

function mapStateToProps(state) {
    return {
        sid: state.get('sid'),
        signals: state.get('signals'),
        signalsFiltered: state.get('signalsFiltered'),
        spacesOrder: state.get('spacesOrder'),
        url: state.get('url'),
        sources: state.get('sources'),
        name: state.get('name'),
        noise: state.get('noise')
    };
}


export const ChatContainer = connect(mapStateToProps, actionCreators)(Chat);
