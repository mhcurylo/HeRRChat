import {List, Map, OrderedSet} from 'immutable';
import {expect} from 'chai';

import {store} from '../../src/store/store';
import {changeUrl} from '../../src/actions/actions'

describe('Action+Store+Reducer/receiveSpaces', () => {

	it('sets the spaces according to data', () => {

		store.dispatch(receiveSpaces('/cats'));

		expect(store.getState().get('url')).to.equal('/cats');
		expect(store.getState().get('spacesOrder')).to.equal(OrderedSet.of(''));

		store.dispatch(changeUrl('/'));
		
		expect(store.getState().get('url')).to.equal('/');
		expect(store.getState().get('spacesOrder')).to.equal(OrderedSet.of('/cats'));


	});

});