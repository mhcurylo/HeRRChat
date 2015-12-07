import {Map} from 'immutable';

export function receiveSignal (state, action) {
    const id = state.get('signals').size;
    return state.setIn(['signals', id], Map({
        id: id,
        signal: action.signal,
        source: action.source,
        space: action.space
    })).update('signalsOrder', so => so.unshift(id))
        .update('signalsFiltered', sf => sf.unshift(id));
}