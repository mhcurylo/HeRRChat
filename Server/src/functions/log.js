import {List, Map, Set} from 'immutable';


export function loginSource(stateSources, name, space) {
    if (!stateSources.get(name)) {

        return stateSources.set(name, 
            Map({
                id: name,
                spaces: Set.of(space)
            }));

    } else {

        return loginSource(stateSources, name+'_');

    }
}

export function logoutSource(stateSources, name) {

    return stateSources.delete(name);

}