
export function receiveSignal (state, signal, source, space) {
	const id = state.get('signals').size;
    return state.setIn(['signals', id], Map({
    	id: id,
    	signal: signal,
    	source: source,
    	space: space
    }))
}