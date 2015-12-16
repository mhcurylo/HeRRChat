import { Map, Set, OrderedSet } from 'immutable';


export function removeFromSpace(state, sid, space) {
  return state.updateIn(['sources', sid, 'spaces'],
                (spaces = new OrderedSet()) => spaces.delete(space))
              .updateIn(['spaces', space, 'sources'],
                (sources = new Set()) => sources.delete(sid));
}

function updateSourceSpaces(state, sid, url) {
  const oldurl = state.getIn(['sources', sid, 'url']) || url;
  const spaces = (state.getIn(['sources', sid, 'spaces']) ||
                  new OrderedSet()).add(oldurl).add(url).delete(url);
  switch (spaces.size) {
    case 5:
      return removeFromSpace(state.updateIn(['sources', sid],
                  (source = new Map()) =>
                    source.set('url', url).set('spaces', spaces)),
                  sid, spaces.first());
    default:
      return state.updateIn(['sources', sid],
                  (source = new Map()) =>
                    source.set('url', url).set('spaces', spaces));
  }
}

export function addToSpace(state, sid, url) {
  return updateSourceSpaces(state, sid, url)
        .updateIn(['spaces', url, 'sources'],
          (sources = new Set()) => sources.add(sid));
}
