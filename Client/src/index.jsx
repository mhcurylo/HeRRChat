import React from 'react';
import ReactDOM from 'react-dom';
import {fromJS} from 'immutable';
import Chat from './components/Chat';

const example = fromJS({
	spaces: {
		'/': {
			id: '/',
			sources: ['Kazio', 'Józek']
		},
		'/rooby': {
			id: '/rooby',
			sources: []
		}
	},
	signalsBySpace: {
		'/': ['0', '1'],
		'/rooby': []
	},
	spacesLast: ['/', '/rooby'],
	sourcesLast: ['Kazio', 'Józek'],
	signals:{
		'0': {
			id: '0',
			source: 'Kazio',
			signal: 'Woooohussss',
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
			space: '/'
		},
		'Józek': {
			id: 'Józek',
			space: '/'
		}
	},
	name: 'PrawdziwyKazio',
	url: '/',
	noise: 'Cos tam pisze'
})

ReactDOM.render(
  <Chat chatData={example} />,
  document.getElementById('rrchc')
);

console.log('does it work?')