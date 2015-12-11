const RECEIVE_SIGNAL = function (name, action) {
    return {
        type: 'RECEIVE_SIGNAL',
        source: name,
        signal: action.signal,
        space: action.space
    }

}

const broadcastSignal = function (store, io, action) {

    const sourcesSids = store.getState().getIn(['spaces', action.space, 'sources']);

    const signal = RECEIVE_SIGNAL(store.getState().getIn(['sources', action.sid, 'name']), action);
    
    sourcesSids ? sourcesSids.forEach(s => io.to(s).emit('action', signal)) : '';

};


export default function (store, io, action) {
    
    switch(action.type) {
            case 'BROADCAST_URL':
                action.loggedSpaces = store.getState().getIn(['sources', action.sid, 'spaces']);
                break;   
            case 'BROADCAST_SIGNAL':
                broadcastSignal(store, io, action); 
                break;   
        default:
            console.log('sumfink else, pre');
    }

    return action;
}