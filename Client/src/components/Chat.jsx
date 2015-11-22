import React from 'react';
import SignalsHolder from './signals/SignalsHolder';
import SpacesHolder from './spaces/SpacesHolder';
import SourcesHolder from './sources/SourcesHolder';
import SignalingPad from './signaling/SignalingPad';

export default React.createClass({
  render: function() {
    return <div className="chat">
    	<SignalsHolder 
    		signals={this.props.chatData.getIn([
    			'signals', 
    			this.props.chatData.get('url')])} />
    	<SpacesHolder
    		spaces={this.props.chatData.get('spaces')} 
    		url={this.props.chatData.get('url')}/>
    	<SourcesHolder
    		sources={this.props.chatData.get('sources')} 
    		url={this.props.chatData.get('url')}/>
    	<SignalingPad noise={this.props.chatData.get('noise')}/>
    </div>;
  }
});