import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from '../store/store';
import {Router, Route}  from 'react-router';
import App from './App';
import {ChatContainer} from '../components/Chat';
import createHashHistory from 'history/lib/createHashHistory';
import {broadcastUrl } from '../actions/actions';

let history = createHashHistory({
    queryKey: false
});

history.listen(location => store.dispatch(broadcastUrl(location.pathname)));

const routes = <Route component={App}>
    <Route path="*"  history={history} component={ChatContainer} />
</Route>;

console.log(history);


ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>{routes}</Router>
    </Provider>,
    document.getElementById('rrchc')
);
