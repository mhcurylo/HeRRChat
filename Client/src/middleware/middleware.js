import {toJS, toArray, orderedSet} from 'immutable';

export default socket => store => next => action => {
    if (action.meta && action.meta.remote) {
        console.log('sending', action);
        socket.emit('action', action);
    }
    return next(action);
}