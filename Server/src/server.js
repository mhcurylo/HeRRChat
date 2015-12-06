import Server from 'socket.io';
import sandwich from './sandwich';
import ioDispatch from './ioDispatch';
import preDispatcher from './preDispatcher';
import postDispatcher from './postDispatcher';


export default function startServer(store) {

	const io = new Server().attach(8090);

	const postDispatch = ioDispatch(store, io, postDispatcher);
	
	const preDispatch = ioDispatch(store, io, preDispatcher);

	const chow = sandwich(store, postDispatch, preDispatch);

	io.on('connection', (socket) => {
		socket.on('action', action => {
							console.log(chow(action));
						});
		//io.sockets.socket(savedSocketId).emit(...)
		socket.emit('id', socket.id);
		console.log(socket.id);
	});
}