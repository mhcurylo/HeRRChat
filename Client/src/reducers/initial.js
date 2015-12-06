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
	action: '',
	sid: ''
})