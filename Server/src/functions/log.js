import {List, Map, Set} from 'immutable';


export function loginSource(stateSources, name, space, sid) {
    if (!stateSources.get(name)) {

        return stateSources.set(sid, 
            Map({
                name: name,
                sid: sid,
                spaces: Set.of(space)
            }));

    } else {

        return loginSource(stateSources, name+'_', space, sid);

    }
}

export function logoutSource(stateSources, name) {

    return stateSources.delete(name);

}