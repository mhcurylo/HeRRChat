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
			space: '/'
		},
		'Józek': {
			id: 'Józek',
			space: '/'
		}
	},
	name: 'PrawdziwyKazio',
	url: '/',
	noise: 'Cos tam sszess',
	action: 'go'
})

example.set('noise', 'sssssk');

ReactDOM.render(
  <Chat chatData={example.set('noise', 'sssssk')} />,
  document.getElementById('rrchc')
);

console.log('does it work?')