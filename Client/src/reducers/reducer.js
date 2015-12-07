import {Map, List} from 'immutable';
import {writePad, receiveName} from './functions/signalingpad';
import {receiveSignal} from './functions/signalsHolder';
import {receiveSpaces} from './functions/spacesHolder';
import {receiveSources} from './functions/sourcesHolder';
import {INITIAL_STATE} from './initial';
import {fromJS, OrderedSet} from 'immutable';
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
            return receiveSignal(state, action);
        case types.RECEIVE_SPACES:
            return receiveSpaces(state, action.url, OrderedSet(action.spacesOrder));
        case types.RECEIVE_SOURCES:
            return receiveSources(state, fromJS(action.sources));
        case types.SET_SID:
            return state.set('sid', action.sid);
        default:
            return state;
    }
}