import { loginSource, logoutSource } from './functions/log';
import { addToSpace, removeFromSpace } from './functions/space';
import { INITIAL_STATE } from './initial';
import { Map } from 'immutable';

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'BROADCAST_NAME':
    // to fix
      const state = state.updateIn(['sources', action.sid],
        (source = new Map()) => loginSource(source, action.name, action.sid, state.get('names')));
      return state.update('names', names =>
        names.add(state.getIn(['sources', action.sid, 'name'])));
    case 'LOGOUT_SOURCE':
      return logoutSource(state, action.sid);
    case 'BROADCAST_URL':
      return addToSpace(state, action.sid, action.url);
    case 'REMOVE_FROM_SPACE':
      return removeFromSpace(state, action.sid, action.url);
    default:
      return state;
  }
}
