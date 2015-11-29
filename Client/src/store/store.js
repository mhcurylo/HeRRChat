import {createStore} from 'redux';
import reducer from '../reducers/reducer';

export const store = createStore(reducer);
console.log(store);

