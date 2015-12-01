import Server from 'socket.io';
import {echo} from './echo';

export default function startServer(store) {
	const io = new Server().attach(8090);

	// store.subscribe(
	// 	() =>{ 
	// 		io.emit('state',
	// 		store.getState().toJS());
	// 	}
	// );

	io.on('connection', (socket) => {
		socket.on('action', action => {
							echo(store.dispatch(action), store, io);
						});
		//io.sockets.socket(savedSocketId).emit(...)
		socket.emit('id', socket.id);
		console.log(socket.id);
	});
}