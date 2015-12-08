import {Map, OrderedSet, Stack, List} from 'immutable';

export const INITIAL_STATE =Map({
    signals: Map({}),
    sources: Map({}),
    spacesOrder: OrderedSet.of(),
    name: '',
    url: '',
    noise: '',
    action: '',
    sid: ''
})