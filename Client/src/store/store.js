import {createStore, applyMiddleware} from 'redux';
import reducer from '../reducers/reducer';
import io from 'socket.io-client';
import remoteMiddleware from '../middleware/middleware';
import {fromJS} from 'immutable';

const socket = io(`${location.hostname}:8090`);

socket.on('state', state =>
    console.log(state));


export const  store = applyMiddleware(
    remoteMiddleware(socket)
)(createStore)(reducer);