import {List, Map, OrderedSet} from 'immutable';
import {expect} from 'chai';

import {store} from '../../src/store/store';
import {changeUrl} from '../../src/actions/actions'

describe('Action+Store+Reducer/changeUrl', () => {

	it('changing to new Space adds a Space, changes url.', () => {

		store.dispatch(changeUrl('/cats'));

		expect(store.getState().get('url')).to.equal('/cats');
		expect(store.getState().get('spacesOrder')).to.equal(OrderedSet.of('/cats'));

		store.dispatch(changeUrl('/'));
		
		expect(store.getState().get('url')).to.equal('/');
		expect(store.getState().get('spacesOrder')).to.equal(OrderedSet.of('/cats', '/'));


	});

	it('changing to old Space does not add a space, changes url.', () => {

		store.dispatch(changeUrl('/cats'));

		expect(store.getState().get('url')).to.equal('/cats');
		expect(store.getState().get('spacesOrder')).to.equal(OrderedSet.of('/cats', '/'));

	});


	it('adding many Spaces discards the oldest ones', () => {

		store.dispatch(changeUrl('/cats1'));
		store.dispatch(changeUrl('/cats2'));
		store.dispatch(changeUrl('/cats3'));
		store.dispatch(changeUrl('/cats4'));
		store.dispatch(changeUrl('/cats5'));

		expect(store.getState().get('url')).to.equal('/cats5');
		expect(store.getState().get('spacesOrder')).to.equal(OrderedSet.of('/cats1', '/cats2', '/cats3', '/cats4', '/cats5'));
		
	});

});