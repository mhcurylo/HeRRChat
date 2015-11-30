import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from '../store/store';
import {Router, Route}  from 'react-router';
import App from './App';
import {ChatContainer} from '../components/Chat';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import {changeUrl} from '../actions/actions';


const routes = <Route component={App}>
	<Route path="*" component={ChatContainer} />
</Route>;

let history = createBrowserHistory({
	queryKey: false
});

history.listen(location => store.dispatch(changeUrl(location.hash)));

ReactDOM.render(
	<Provider store={store}>
    	<Router history={history}>{routes}</Router>
	</Provider>,
	document.getElementById('rrchc')
);
