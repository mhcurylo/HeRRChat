
const RECIVE_NAME = function (action, store) {
	return store.getState().toJS();
}


export function echo (action, store, io) {
	switch(action.type) {
		case 'BROADCAST_NAME':
			io.to(action.sid).emit('buhaha', RECIVE_NAME(action, store));
			break;
		default:
			console.log('sumfink else');
	}
}