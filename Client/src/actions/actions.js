import * as types from '../constants/constants';

export function writePad (noise) {
	return {
		type: types.WRITE_PAD,
		noise
	};
}

export function changeUrl (url) {
	return {
		type: types.CHANGE_URL,
		url
	};
}