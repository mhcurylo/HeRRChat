import * as types from '../constants/constants';

export function setFilter (url) {
    return {
        type: types.SET_FILTER,
        url
    }
}

export function writePad (noise) {
    return {
        type: types.WRITE_PAD,
        noise
    };
}

export function setSid (sid) {
    return {
        type: types.SET_SID,
        sid
    };
}

export function brodcastUrl (url) {
    return {
        meta: {remote: true},
        type: types.CHANGE_URL,
        url
    };
}

export function broadcastName (name, space, sid) {
    return {
        meta: {remote: true},
        type: types.BROADCAST_NAME,
        name,
        space,
        sid
    };
}

export function broadcastSignal (signal, space, sid) {
    return {
        meta: {remote: true},
        type: types.BROADCAST_SIGNAL,
        signal,
        space,
        sid
    };
}

