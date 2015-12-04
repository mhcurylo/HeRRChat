import {List, Map, Set} from 'immutable';


export function loginSource(stateSources, name, space, sid, spaces) {
    if (!stateSources.get(name)) {

        return stateSources.set(sid, 
            Map({
                name: name,
                sid: sid,
                spaces: Set.of(spaces)
            }));

    } else {

        return loginSource(stateSources, name+'_', space, sid, spaces);

    }
}

export function logoutSource(stateSources, name) {

    return stateSources.delete(name);

}