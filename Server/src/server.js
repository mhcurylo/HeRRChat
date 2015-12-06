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
        const sid = socket.id;
		socket.on('action', action => {
                            action.sid = action.sid ? action.sid : sid;
							console.log(chow(action));
						});
		//io.sockets.socket(savedSocketId).emit(...)
		socket.emit('id', sid);
		console.log(sid);
	});
}