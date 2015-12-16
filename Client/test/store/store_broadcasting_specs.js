
import { expect } from 'chai';

import { store } from '../../src/store/store';
import { writePad } from '../../src/actions/actions';

describe('Action+Store+Reducer/Broadcasting', () => {
  it('/writePad/ creates noise.', () => {
    store.dispatch(writePad('myhmy'));
    expect(store.getState().get('noise')).to.equal('myhmy');
  });
});
