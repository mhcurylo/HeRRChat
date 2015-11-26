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
        		signalsBySpace={this.props.chatData.getIn([
        			'signalsBySpace', this.props.chatData.get('url')])}/>
        	<SpacesHolder
        		spaces={this.props.chatData.get('spaces')} 
        		spacesLast={this.props.chatData.get('spacesLast')}
        		url={this.props.chatData.get('url')}/>
        	<SourcesHolder
        		sources={this.props.chatData.get('sources')}
        		sourcesLast = {this.props.chatData.get('sourcesLast')}
        		url={this.props.chatData.get('url')}/>
        	<SignalingPad noise={this.props.chatData.get('noise')}/>
        </div>;
}
});