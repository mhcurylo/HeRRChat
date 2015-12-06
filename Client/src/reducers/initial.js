import {Map, OrderedSet, List} from 'immutable';

export const INITIAL_STATE =Map({
    signals: Map({}),
    sources: List.of(),
    name: '',
    signalsFiltered: List.of(),
    signalsOrder: List.of(),
    spacesOrder: OrderedSet.of(),
    url: '',
    noise: '',
    action: '',
    sid: ''
})