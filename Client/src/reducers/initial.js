import {Map, OrderedSet, List, Set} from 'immutable';

export const INITIAL_STATE =Map({
	spaces: Map({
	}),
	signals: Map({
	}),
	sources: Map({
	}),
	name: '',
	signalsFiltered: List.of(),
	signalsOrder: List.of(),
	spacesOrder: OrderedSet.of(),
	sourcesOrder: OrderedSet.of(),
	url: '',
	noise: '',
	action: ''
})

// const example = fromJS({
// 	spaces: {
// 		'/': {
// 			id: '/',
// 			sources: {'Kazio', 'Józek'}
// 		},
// 		'/uuuu': {
// 			id: '/uuuu',
// 			sources: []
// 		}
// 	},
// 	spacesOrder: ['/', '/uuuu'],
// 	sourcesOrder: ['Kazio', 'Józek'],
// 	signals:{
// 		'0': {
// 			id: '0',
// 			source: 'Kazio',
// 			signal: 'Woooohussss. Ich moochte Deustsche schreiben, aber meinen Tastatur ist Polnish und ich weiss nich wie man Deutsch spriechst.',
// 			space: '/'
// 		},
// 		'1': {
// 			id: '1',
// 			source: 'Józek',
// 			signal: 'Cohaus',
// 			space: '/'
// 		}
// 	},
// 	sources: {
// 		'Kazio': {
// 			id: 'Kazio',
// 			spaces: ['/']
// 		},
// 		'Józek': {
// 			id: 'Józek',
// 			spaces: ['/']
// 		}
// 	},
// 	name: 'Prawdziwy Kazio',
// 	url: '/',
// 	noise: 'Cos tam sszess',
// 	action: 'go'
// })