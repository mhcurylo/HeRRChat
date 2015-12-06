import {Map, List} from 'immutable';
import {writePad, receiveName} from './functions/signalingpad';
import {receiveSignal} from './functions/signalsHolder';
import {receiveSpaces} from './functions/spacesHolder';
import {INITIAL_STATE} from './initial';
import * as types from '../constants/constants';

export default function reducer (state=INITIAL_STATE, action) {
    switch (action.type) {
        case types.SET_FILTER:
            return setFilter(state);
        case types.WRITE_PAD:
            return state.set('noise', writePad(action.noise));
        case types.RECEIVE_NAME:
            return state.set('name', receiveName(action.name));
        case types.RECEIVE_SIGNAL:
            return receiveSignal(state);
        case types.RECEIVE_SPACES:
            return receiveSpaces(state, action.url, action.spacesOrder);
        case types.RECEIVE_SOURCES:
            return receiveSources(state);
        case types.SET_SID:
            return state.set('sid', action.sid);
        default:
            return state;
    }
}