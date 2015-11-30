import * as types from '../constants/constants';

export function writePad (noise) {
    return {
        type: types.WRITE_PAD,
        noise
    };
}

export function changeUrl (url) {
    return {
        meta: {remote: true},
        type: types.CHANGE_URL,
        url
    };
}

export function broadcastName (name, space) {
    return {
        meta: {remote: true},
        type: types.BROADCAST_NAME,
        name,
        space
    };
}

export function receiveName (name) {
    return {
        type: types.RECIEVE_NAME,
        name
    };
}


export function broadcastSignal (signal, source, space) {
    return {
        meta: {remote: true},
        type: types.BROADCAST_SIGNAL,
        signal,
        source,
        space
    };
}

export function receiveSignal (signal, source, space) {
    return {
        type: types.RECIEVE_SIGNAL,
        signal,
        source,
        space
    };
}