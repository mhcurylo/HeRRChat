function changeUrl_orderUpdate (spacesOrder, url){

	switch (spacesOrder.size) {
		case 5:
			return spacesOrder.rest().add(url)
		default:
			return spacesOrder.add(url)
	}
};

export function changeUrl (state, url) {
	
	return state.set('url', url)
				.update('spacesOrder', spacesOrder => 
					changeUrl_orderUpdate(spacesOrder, url));
}