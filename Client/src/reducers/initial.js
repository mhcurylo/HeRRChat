import {Map, OrderedSet, Stack, List} from 'immutable';

export const INITIAL_STATE =Map({
    signals: Map({}),
    sources: List.of(),
    name: '',
    signalsFiltered: Stack.of(),
    signalsOrder: Stack.of(),
    spacesOrder: OrderedSet.of(),
    url: '',
    noise: '',
    action: '',
    sid: ''
})