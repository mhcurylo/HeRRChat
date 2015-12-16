function receiveSignal(name, action) {
  return {
    type: 'RECEIVE_SIGNAL',
    source: name,
    signal: action.signal,
    space: action.space };
}

function broadcastSignal(store, io, action) {
  const sourcesSids = store.getState()
                            .getIn(['spaces', action.space, 'sources']);

  const signal = receiveSignal(store.getState()
                                    .getIn(['sources', action.sid, 'name']), action);

  if (sourcesSids) {sourcesSids.forEach(s => io.to(s).emit('action', signal));}
}


export default function (store, io, action) {
  switch (action.type) {
    case 'BROADCAST_URL':
      action.loggedSpaces = store.getState().getIn(['sources', action.sid, 'spaces']);
      break;
    case 'BROADCAST_SIGNAL':
      broadcastSignal(store, io, action);
      break;
    default:
  }

  return action;
}
