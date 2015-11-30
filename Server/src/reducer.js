import {loginSource, logoutSource} from './functions/log';
import {addToSpace, removeFromSpace} from './functions/space';
import {newMessage} from './functions/msg';
import {INITIAL_STATE} from './initial';

export default function reducer (state=INITIAL_STATE, action)  {
    switch (action.type) {
    case 'BROADCAST_NAME':
        return state.update('sources', sources => loginSource(sources, action.name, action.space));
    case 'LOGOUT_USER':
        return state.update('users', users => logoutSource(users, action.user));
    case 'ADD_TO_SPACE':
        return addToSpace(state, action.user, action.space);
    case 'REMOVE_FROM_SPACE':
        return removeFromSpace(state, action.user, action.space);
    case 'NEW_MESSAGE':
        return state.update('messages', messages => 
                                newMessage(messages, 
                                    state.get('spaces'), action.message));
    default:
        return state;
    }
}
