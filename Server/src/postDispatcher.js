//import () from 'immutable';

const RECEIVE_NAME = function (action, store) {
    return {
        type: 'RECEIVE_NAME',
        name: store.getState().getIn(['sources', action.sid, 'name'])
    }
}

const RECEIVE_SPACES = function (action, store) {
    const source = store.getState().getIn(['sources', action.sid]);
    return {
        type: 'RECEIVE_SPACES',
        url: source.get('url'),
        spacesOrder: source.get('spaces').toArray()
    }
}

const RECEIVE_SOURCES = function (sourcesSids, store) {
    return {
        type: 'RECEIVE_SOURCES',
        sources: (sourcesSids = store.getState().get('sources')).toList().toJS()
    }

}

const broadcastChangeInSources = function (store, io, url) {
    const sourcesSids = store.getState().getIn(['spaces', url, 'sources']);
    io.to(sourcesSids.toJS()).emit('action', RECEIVE_SOURCES(sourcesSids, store));
};




export default function (store, io, action) {
    
    switch(action.type) {
            case 'BROADCAST_NAME':
                io.to(action.sid).emit('action', RECEIVE_NAME(action, store));
                break;
            case 'BROADCAST_URL':
                io.to(action.sid).emit('action', RECEIVE_SPACES(action, store));
                broadcastChangeInSources(store, io, action.url);
                break;
            default:
                console.log('sumfink else, post');
    }

    return action;
}

