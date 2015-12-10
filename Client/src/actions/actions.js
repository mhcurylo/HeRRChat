import * as types from '../constants/constants';

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
export function goTo (url) {
    console.log('goin')
    return {
        meta: 'changeUrl',
        type: types.GO_TO,
        url
    }
}

export function broadcastUrl (url) {
    return {
        meta: {remote: true},
        type: types.BROADCAST_URL,
        url
    };
}

export function broadcastName (name, sid) {
    return {
        meta: {remote: true},
        type: types.BROADCAST_NAME,
        name,
        // sid
    };
}

export function broadcastSignal (signal, space, sid) {
    return {
        meta: {remote: true},
        type: types.BROADCAST_SIGNAL,
        signal,
        space,
        // sid
    };
}

