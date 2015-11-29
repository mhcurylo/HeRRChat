import {Map, List} from 'immutable';
import {writePad} from './functions/signalingpad'
import {INITIAL_STATE} from './initial';
import {WRITE_PAD} from '../constants/constants.js';

export default function reducer (state=INITIAL_STATE, action) {
	switch (action.type) {
		case WRITE_PAD:
		    return state.set('noise', action.noise);
		default:
		  	return state;
	}
			
}