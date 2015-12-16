import * as types from '../constants/constants';

export function writePad(noise) {
  return {
    type: types.WRITE_PAD,
    noise };
}

export function disconnected() {
  return {
    type: types.RECEIVE_NAME,
    name: '' };
}

export function setSid(sid) {
  return {
    type: types.SET_SID,
    sid };
}
export function goTo(url) {
  return {
    meta: { changeUrl: true },
    type: types.GO_TO,
    url };
}

export function broadcastUrl(url) {
  return {
    meta: { remote: true },
    type: types.BROADCAST_URL,
    url };
}

export function broadcastName(name) {
  return {
    meta: { remote: true },
    type: types.BROADCAST_NAME,
    name };
}

export function broadcastSignal(signal, space) {
  return {
    meta: { remote: true },
    type: types.BROADCAST_SIGNAL,
    signal,
    space };
}
