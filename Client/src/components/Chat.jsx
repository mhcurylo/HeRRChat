import React from 'react';
import SignalsHolder from './signals/SignalsHolder';
import SpacesHolder from './spaces/SpacesHolder';
import SourcesHolder from './sources/SourcesHolder';
import SignalingPad from './signaling/SignalingPad';
import './chat.styl';
import { connect } from 'react-redux';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import * as actionCreators from '../actions/actions.js';


const Chat = React.createClass({
  mixins: [PureRenderMixin],
  render: function render() {
    return (<div className="chat">
      <SignalsHolder
        signals={this.props.signals.get(this.props.url)}/>
      <SpacesHolder
        spacesOrder={this.props.spacesOrder}
        url={this.props.url}/>
      <SourcesHolder
        sources={this.props.sources.get(this.props.url)}/>
      <SignalingPad
        sid = {this.props.sid}
        url = {this.props.url}
        writePad = {this.props.writePad}
        goTo = {this.props.goTo}
        broadcastName = {this.props.broadcastName}
        broadcastSignal = {this.props.broadcastSignal}
        name = {this.props.name} 
        noise = {this.props.noise}/>
    </div>);
  } }
);

function mapStateToProps(state) {
  return {
    sid: state.get('sid'),
    signals: state.get('signals'),
    sources: state.get('sources'),
    spacesOrder: state.get('spacesOrder'),
    url: state.get('url'),
    name: state.get('name'),
    noise: state.get('noise') };
}

export const ChatContainer = connect(mapStateToProps, actionCreators)(Chat);
