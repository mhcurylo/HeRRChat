// function changeUrl_orderUpdate (spacesOrder, url, ol){

// 	switch (spacesOrder.size) {
// 		case 5:
// 			return spacesOrder.rest().add(url)
// 		default:
// 			return spacesOrder.add(url)
// 	}
// };

export function receiveSpaces (state, url, spacesOrder) {
	
	return state.set('url', url).set('spacesOrder', spacesOrder);
}