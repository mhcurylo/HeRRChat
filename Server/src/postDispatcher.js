import { Set } from 'immutable';


function receiveName(action, store) {
  return {
    type: 'RECEIVE_NAME',
    name: store.getState().getIn(['sources', action.sid, 'name']) };
}

function receiveSpaces(action, store) {
  const source = store.getState().getIn(['sources', action.sid]);
  return {
    type: 'RECEIVE_SPACES',
    url: source.get('url'),
    spacesOrder: source.get('spaces').toArray() };
}

function receiveSources(sources, space) {
  return {
    type: 'RECEIVE_SOURCES',
    sources,
    space };
}

function broadcastChangeInSources(store, io, url) {
  const sourcesSids = store.getState().getIn(['spaces', url, 'sources']);
  const sourcesStore = store.getState().get('sources');
  const sources = sourcesSids ? sourcesSids.map(s => sourcesStore.get(s).toJS()) : '';

  const signal = receiveSources(sources, url);

  if (sourcesSids) {sourcesSids.forEach(s => io.to(s).emit('action', signal));}
}

function broadcastChangeInName(store, io, action) {
  const source = store.getState().getIn(['sources', action.sid]);
  const spaces = source.update('spaces', (s = new Set()) => s.add(source.get('url')));
  spaces.forEach(u => broadcastChangeInSources(store, io, u));
}

export default function (store, io, action) {
  switch (action.type) {
    case 'BROADCAST_NAME':
      io.to(action.sid).emit('action', receiveName(action, store));
      broadcastChangeInName(store, io, action);
      break;
    case 'BROADCAST_URL':
      io.to(action.sid).emit('action', receiveSpaces(action, store));
      broadcastChangeInSources(store, io, action.url);
      break;
    default:
  }

  return action;
}
