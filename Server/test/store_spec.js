import {Map, fromJS} from 'immutable';
import {expect} from 'chai';
import {INITIAL_STATE} from '../src/initial';

import makeStore from '../src/store';

describe('store', () => {

  it('does the store dispatch', () => {

    const store = makeStore();

    expect(store.getState()).to.equal(INITIAL_STATE);

    const expectedState = INITIAL_STATE.deleteIn(['users', 'PrawdziwyKazio']);

    store.dispatch({type: 'LOGOUT_USER', user: 'PrawdziwyKazio'});

    expect(store.getState()).to.equal(expectedState);

  });

});