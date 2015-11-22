import React from 'react';
import ReactDOM from 'react-dom';
import Chat from './components/Chat';
// import {INITIAL_STATE} from '../../Server/src/initial';

const experiment = 'i co?'

ReactDOM.render(
  <Chat chatData={experiment} />,
  document.getElementById('rrchc')
);

console.log('does it work?')