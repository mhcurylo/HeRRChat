import { OrderedSet } from 'immutable';
import { expect } from 'chai';
import * as types from '../../src/constants/constants';

import { store } from '../../src/store/store';

describe('Store+Reducer/receiveSpaces', () => {
  it('sets the spaces according to data', () => {
    store.dispatch({ type: types.RECEIVE_SPACES,
      url: '/cats',
      spacesOrder: OrderedSet.of('/') }
    );

    expect(store.getState().get('spacesOrder')).to.equal(OrderedSet.of('/'));

    expect(store.getState().get('url')).to.equal('/cats');
  });
});
