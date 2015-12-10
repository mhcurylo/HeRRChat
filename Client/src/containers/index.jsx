import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from '../store/store';
import {Router, Route}  from 'react-router';
import App from './App';
import {ChatContainer} from '../components/Chat';
import history from '../history/history';
import {broadcastUrl } from '../actions/actions';


let listner = {
    store: history.listen(
        location => store.dispatch(broadcastUrl(location.pathname))
    ),
    home: history.listen(location => {
        if (location.pathname === '/') {
            history.push({
                pathname: '/HeRRo!'
            });
        }
    })
}

console.log(history);



const routes = <Route component={App}>
    <Route path="*"  history={history} component={ChatContainer} />
</Route>;

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>{routes}</Router>
    </Provider>,
    document.getElementById('rrchc')
);