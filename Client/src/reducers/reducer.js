import {Map, Stack, List, fromJS, OrderedSet} from 'immutable';
import {writePad, receiveName} from './functions/signalingpad';
import {receiveSignal} from './functions/signalsHolder';
import {receiveSpaces} from './functions/spacesHolder';
import {receiveSources} from './functions/sourcesHolder';
import {INITIAL_STATE} from './initial';
import * as types from '../constants/constants';

export default function reducer (state=INITIAL_STATE, action) {
    switch (action.type) {
        case types.WRITE_PAD:
            return state.set('noise', writePad(action.noise));
        case types.WRITE_PAD:
            return state.set('noise', writePad(action.noise));
        case types.BROADCAST_NAME:
        case types.BROADCAST_SIGNAL:
            return state.set('noise', '');
        case types.BROADCAST_SIGNAL:
            return state.set('noise', writePad(action.noise));
        case types.RECEIVE_NAME:
            return state.set('name', receiveName(action.name));
        case types.RECEIVE_SIGNAL:
            return state.updateIn(['signals', action.space], (s = List()) => receiveSignal(s, action));
        case types.RECEIVE_SPACES:
            return receiveSpaces(state, action.url, OrderedSet(action.spacesOrder));
        case types.RECEIVE_SOURCES:
            console.log(state.get('sources').toJS());
            return state.setIn(['sources', action.space], receiveSources(action.sources));
        case types.SET_SID:
            return state.set('sid', action.sid);
        default:
            return state;
    }
}