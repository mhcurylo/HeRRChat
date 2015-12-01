import Server from 'socket.io';
import {ether} from './echo';

export default function startServer(store) {
	const io = new Server().attach(8090);
	const echo = ether(store, io);

	// store.subscribe(
	// 	() =>{ 
	// 		io.emit('state',
	// 		store.getState().toJS());
	// 	}
	// );

	io.on('connection', (socket) => {
		socket.on('action', action => {
							echo(store.dispatch(action));
						});
		//io.sockets.socket(savedSocketId).emit(...)
		socket.emit('id', socket.id);
		console.log(socket.id);
	});
}