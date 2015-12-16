export function loginSource(stateSources, name, sid, names) {
  if (!names.has(name) && (name !== '')) {
    return stateSources.set('name', name);
  }
  return loginSource(stateSources, name + '_', sid, names);
}

export function logoutSource(state, sid) {
  return state.update('sources', sources => sources.delete(sid))
              .update('names',
                names => names.delete(state.getIn(['sources', sid, 'name'])));
}
