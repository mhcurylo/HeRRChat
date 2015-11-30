import Server from 'socket.io';

export default function startServer(store) {
	const io = new Server().attach(8090);

	store.subscribe(
		() => io.emit('state', store.getState().toJS())
	);

	io.on('connection', (socket) => {
		//socket.on('action', store.dispatch.bind(store));
		//io.sockets.socket(savedSocketId).emit(...)
		socket.emit('id', socket.id);
		console.log(socket.id);
	});
}