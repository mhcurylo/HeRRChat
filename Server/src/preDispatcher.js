// const RECEIVE_NAME = function (action, store) {
// 	return {
// 		type: 'RECEIVE_NAME',
// 		name: store.getState().getIn(['sources', action.sid, 'name'])
// 	}
// }
// const RECIEVE_SIGNAL (signal, source, space) {
//     return {
//         type: types.RECIEVE_SIGNAL,
//         signal,
//         source,
//         space
//     };
// }

//io.sockets.socket(savedSocketId).emit(...)

export default function (store, io, action) {
	
	switch(action.type) {
		// case 'BROADCAST_SIGNAL':
		// 	const receivers = store.getIn([]);
		// 	io.to(action.sid).emit('action', RECEIVE_NAME(action, store));
		// 	return;			
		default:
			console.log('sumfink else, pre');
	}

	return action;
}