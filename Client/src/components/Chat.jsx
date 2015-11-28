import React from 'react';
import SignalsHolder from './signals/SignalsHolder';
import SpacesHolder from './spaces/SpacesHolder';
import SourcesHolder from './sources/SourcesHolder';
import SignalingPad from './signaling/SignalingPad';
import './chat.styl';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
    mixins: [PureRenderMixin],
    render: function() {
        return <div className="chat">
        	<SignalsHolder 
        		signals={this.props.chatData.get('signals')} 
        		signalsFiltered={this.props.chatData.get('signalsFiltered')}/>
        	<SpacesHolder
        		spaces={this.props.chatData.get('spaces')} 
        		spacesOrder={this.props.chatData.get('spacesOrder')}
        		url={this.props.chatData.get('url')}/>
        	<SourcesHolder
        		sources={this.props.chatData.get('sources')}
        		sourcesOrder = {this.props.chatData.get('sourcesOrder')}
        		url={this.props.chatData.get('url')}/>
        	<SignalingPad name = {this.props.chatData.get('name')} noise={this.props.chatData.get('noise')}/>
        </div>;
}
});