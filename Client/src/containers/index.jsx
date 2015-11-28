import React from 'react';
import ReactDOM from 'react-dom';
import {fromJS} from 'immutable';
import Router, {Route}  from 'react-router';
import App from '../components/App';
import Chat from '../components/Chat';

const routes = <Route component={App}>
  <Route path="*" component={Chat} />
</Route>;

ReactDOM.render(
  <Router>{routes}</Router>,
  document.getElementById('rrchc')
 );
// Router.run(routes, Router.HistoryLocation, function (Handler) {
//   React.render(<Handler/>, el);
// });


console.log('does it work?')