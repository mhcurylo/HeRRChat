import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducers/reducer';
import io from 'socket.io-client';
import remoteMiddleware from '../middleware/remoteMiddleware';
import historyMiddleware from '../middleware/historyMiddleware';
import history from '../history/history';
import {fromJS, OrderedSet} from 'immutable';
import {setSid} from '../actions/actions'

const socket = io(`${location.hostname}:8090`);

let sid = '';

export const store = applyMiddleware(
    remoteMiddleware(socket),
    historyMiddleware(history)
)(createStore)(reducer);

socket.on('action', action => {
    console.log('rec', action);
    store.dispatch(action);
});

socket.on('id', id => {
        sid = id;
        console.log('id', sid);
        store.dispatch(setSid(id));
});

