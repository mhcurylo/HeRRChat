import React from 'react';
import Router from 'react-router';
import {fromJS} from 'immutable';

const example = fromJS({
	spaces: {
		'/': {
			id: '/',
			sources: ['Kazio', 'Józek']
		},
		'/uuuu': {
			id: '/uuuu',
			sources: []
		}
	},
	signalsBySpace: {
		'/': ['0', '1'],
		'/uuuu': []
	},
	spacesLast: ['/', '/uuuu'],
	sourcesLast: ['Kazio', 'Józek'],
	signals:{
		'0': {
			id: '0',
			source: 'Kazio',
			signal: 'Woooohussss. Ich moochte Deustsche schreiben, aber meinen Tastatur ist Polnish und ich weiss nich wie man Deutsch spriechst.',
			space: '/'
		},
		'1': {
			id: '1',
			source: 'Kazio',
			signal: 'Cohaus',
			space: '/'
		}
	},
	sources: {
		'Kazio': {
			id: 'Kazio',
			spaces: ['/']
		},
		'Józek': {
			id: 'Józek',
			spaces: ['/']
		}
	},
	name: 'PrawdziwyKazio',
	url: '/',
	noise: 'Cos tam sszess',
	action: 'go'
})

export default React.createClass({
  componentDidMount: function() {
    console.log(this.props.location);
  },
  render: function() {
     return React.cloneElement(this.props.children, {
      chatData: example.set('url', this.props.location.pathname)
    });
  }
});