import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from '../store/store';
import {fromJS} from 'immutable';
import {Router, Route}  from 'react-router';
import App from './App';
import {ChatContainer} from '../components/Chat';

store.dispatch({
	type: 'WRITE_PAD',	noise: 'wrrrr \n wwwr \n wrrr \n  wrrrrrrrr \n wwwwr'
});

const routes = <Route component={App}>
  <Route path="*" component={ChatContainer} />
</Route>;

ReactDOM.render(
  <Provider store={store}>
    <Router>{routes}</Router>
  </Provider>,
  document.getElementById('rrchc')
 );


console.log('does it work?')