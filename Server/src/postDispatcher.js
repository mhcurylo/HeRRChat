const RECEIVE_NAME = function (action, store) {
	return {
		type: 'RECEIVE_NAME',
		name: store.getState().getIn(['sources', action.sid, 'name'])
	}
}


export default function (store, io, action) {
	
	switch(action.type) {
			case 'BROADCAST_NAME':
				io.to(action.sid).emit('action', RECEIVE_NAME(action, store));
				break;
			default:
				console.log('sumfink else, post');
	}

	return action;
}

