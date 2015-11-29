import {Map, Set} from 'immutable';

export function addToSpace (state, user, space) {
    return state.updateIn(['users',user,'spaces'], spaces => spaces.add(space))
        .updateIn(['spaces', space, 'users'], users => users.add(user));
}

export function removeFromSpace (state, user, space) {
    return state.updateIn(['users',user,'spaces'], spaces => spaces.delete(space))
        .updateIn(['spaces', space, 'users'], users => users.delete(user));
}

