

export function receiveSpaces (state, url, spacesOrder) {
	
	return state.set('url', url).set('spacesOrder', spacesOrder);
}