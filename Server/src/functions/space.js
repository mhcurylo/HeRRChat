import {Map, Set, OrderedSet} from 'immutable';

function updateSourceSpaces (state, sid, url) {
    const oldurl = state.getIn(['sources', sid, 'url']) || url;
    const spaces = (state.getIn(['sources', sid, 'spaces']) || OrderedSet()).add(oldurl).add(url).delete(url);
    switch (spaces.size) {
        case 5: 
            return removeFromSpace(state.updateIn(['sources', sid], 
                        (source=Map()) => source.set('url', url).set('spaces', spaces)),
                        sid, spaces.first());
        default:
            return state.updateIn(['sources', sid], 
                        (source=Map()) => source.set('url', url).set('spaces', spaces));
    }

}

export function addToSpace (state, sid, url) {
    return updateSourceSpaces(state, sid, url)
            .updateIn(['spaces', url, 'sources'], (sources=Set()) => sources.add(sid));
}

export function removeFromSpace (state, sid, space) {
    return state.updateIn(['sources',sid,'spaces'], (spaces=OrderedSet()) => spaces.delete(space))
        .updateIn(['spaces', space, 'sources'], (sources=Set()) => sources.delete(sid));
}

