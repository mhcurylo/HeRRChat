import {toJS, toArray, orderedSet} from 'immutable';

export default socket => store => next => action => {
    if (action.meta && action.meta.remote) {
    	console.log(action, 'sending');
        socket.emit('action', action);
    }
    return next(action);
}