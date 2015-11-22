import {List, Map, Set} from 'immutable';


export function loginUser(stateUsers, name) {
    if (!stateUsers.get(name)) {

        return stateUsers.set(name, 
            Map({
                id: name,
                spaces: Set.of()
            }));

    } else {

        return loginUser(stateUsers, name+'_');

    }
}

export function logoutUser(stateUsers, name) {

    return stateUsers.delete(name);

}
