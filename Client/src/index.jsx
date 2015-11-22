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
	signals:{
		'/': [{
			source: 'Kazio',
			signal: 'Woooohussss',
			space: '/'
		}, {
			source: 'Kazio',
			signal: 'Cohaus',
			space: '/'
		}],
		'/rooby': [{

		}]
	},
	sources: {
		'Kazio': {
			id: 'Kazio',
			space: '/'
		}
	},
	user: {
		spaces: ['/', '/rooby'],
		space: '/',
		id: 'PrawdziwyKazio'
	},
	url: '/',
	noise: 'Cos tam pisze'
})

ReactDOM.render(
  <Chat chatData={example} />,
  document.getElementById('rrchc')
);

console.log('does it work?')