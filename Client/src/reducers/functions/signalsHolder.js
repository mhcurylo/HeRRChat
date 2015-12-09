import {Map} from 'immutable';

export function receiveSignal (signal, action) {
    return signal.unshift(Map({
        signal: action.signal,
        source: action.source,
        space: action.space,
        id: signal.size
    }));
}