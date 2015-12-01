import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducers/reducer';
import io from 'socket.io-client';
import remoteMiddleware from '../middleware/middleware';
import {fromJS} from 'immutable';
import {setSid} from '../actions/actions'

const socket = io(`${location.hostname}:8090`);

let sid = '';


socket.on('action', action => {
			console.log('action', action);
    		store.dispatch(action);
    	});

socket.on('id', id => {
			sid = id;
			console.log('id', sid);
			store.dispatch(setSid(id));
	});

export const store = applyMiddleware(
    remoteMiddleware(socket)
)(createStore)(reducer);