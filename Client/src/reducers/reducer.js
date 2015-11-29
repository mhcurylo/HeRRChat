import {Map, List} from 'immutable';
import {writePad} from './functions/signalingpad';
import {changeUrl} from './functions/spacesHolder';
import {INITIAL_STATE} from './initial';
import * as types from '../constants/constants';

export default function reducer (state=INITIAL_STATE, action) {
	switch (action.type) {
		case types.WRITE_PAD:
		    return state.set('noise', writePad(action.noise));
		case types.CHANGE_URL:
			return changeUrl(state, action.url);
		default:
		  	return state;
	}
			
}