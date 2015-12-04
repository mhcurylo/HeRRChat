import {loginSource, logoutSource} from './functions/log';
import {addToSpace, removeFromSpace} from './functions/space';
import {INITIAL_STATE} from './initial';

export default function reducer (state=INITIAL_STATE, action)  {
    switch (action.type) {
    case 'BROADCAST_NAME':
        return state.update('sources', sources => loginSource(sources, action.name, action.space, action.sid));
    case 'LOGOUT_USER':
        return state.update('users', users => logoutSource(users, action.user));
    case 'ADD_TO_SPACE':
        return addToSpace(state, action.user, action.space);
    case 'REMOVE_FROM_SPACE':
        return removeFromSpace(state, action.user, action.space);
    default:
        return state;
    }
}
