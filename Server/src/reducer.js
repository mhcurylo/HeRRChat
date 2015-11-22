import {loginUser, logoutUser} from './log';
import {addToSpace, removeFromSpace} from './space';
import {newMessage} from './msg';
import {INITIAL_STATE} from './initial';

export default function reducer (state=INITIAL_STATE, action)  {
    switch (action.type) {
    case 'LOGIN_USER':
        return state.update('users', users => loginUser(users, action.user));
    case 'LOGOUT_USER':
        return state.update('users', users => logoutUser(users, action.user));
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
