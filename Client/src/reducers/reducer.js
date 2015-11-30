import {Map, List} from 'immutable';
import {writePad, receiveName} from './functions/signalingpad';
import {receiveSignal} from './functions/spacesHolder';
import {changeUrl} from './functions/spacesHolder';
import {INITIAL_STATE} from './initial';
import * as types from '../constants/constants';

export default function reducer (state=INITIAL_STATE, action) {
    switch (action.type) {
        case types.WRITE_PAD:
            return state.set('noise', writePad(action.noise));
        case types.CHANGE_URL:
            return changeUrl(state, action.url);
        case types.BROADCAST_NAME:
            return state;
        case types.BROADCAST_SIGNAL:
            return state;
        case types.RECEIVE_NAME:
            return state.set('name', receiveName(action.name));
        case types.RECEIVE_SIGNAL:
            return receiveSignal(state);
        case types.SET_SID:
            return state.set('sid', action.sid);
        default:
            return state;
    }
}