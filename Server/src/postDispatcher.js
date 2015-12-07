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

const RECEIVE_SOURCES = function (sources) {
    return {
        type: 'RECEIVE_SOURCES',
        sources: sources
    }

}

const broadcastChangeInSources = function (store, io, url) {

    const sourcesSids = store.getState().getIn(['spaces', url, 'sources']);
    const sourcesStore = store.getState().get('sources');
    const sources = sourcesSids.map(s => sourcesStore.get(s).toJS());

    sourcesSids.forEach(s => io.to(s).emit('action', RECEIVE_SOURCES(sources)));
};

const broadcastChangeInName = function (store, io, action) {
    const source = store.getState().getIn(['sources', action.sid]);
    const spaces = source.get('spaces').add(source.get('url'));
    console.log('s', spaces);
    spaces.forEach(u => broadcastChangeInSources(store, io, u));
}


export default function (store, io, action) {
    
    switch(action.type) {
            case 'BROADCAST_NAME':
                io.to(action.sid).emit('action', RECEIVE_NAME(action, store));
                broadcastChangeInName(store, io, action);
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

