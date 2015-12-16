import { fromJS, Set, Map, OrderedSet } from 'immutable';
import { expect } from 'chai';

import makeStore from '../src/store';

describe('broadcast_url', () => {
  const store = makeStore();
  describe('put source in space', () => {
    it('adds url and no space if user has no spaces. logs user in space.', () => {
      store.dispatch({ type: 'BROADCAST_URL', url: '/dd', sid: '1234a' });
      expect(store.getState().getIn(['sources', '1234a'])).to.equal(fromJS(
      { url: '/dd',
        spaces: new OrderedSet() }
      ));
      expect(store.getState().getIn(['spaces', '/dd', 'sources'])).to.equal(Set.of('1234a'));
    });

    it('moves old url to space. log user to new space.', () => {
      store.dispatch({ type: 'BROADCAST_URL', url: '/bb', sid: '1234a' });

      expect(store.getState().getIn(['sources', '1234a'])).to.equal(fromJS(
      { url: '/bb',
        spaces: OrderedSet.of('/dd') }
      ));
      expect(store.getState().getIn(['spaces', '/dd', 'sources'])).to.equal(Set.of('1234a'));
      expect(store.getState().getIn(['spaces', '/bb', 'sources'])).to.equal(Set.of('1234a'));
    });


    it('can switch space with url.', () => {
      store.dispatch({ type: 'BROADCAST_URL', url: '/dd', sid: '1234a' });

      expect(store.getState().getIn(['sources', '1234a'])).to.equal(fromJS(
      { url: '/dd',
        spaces: OrderedSet.of('/bb') }
      ));
    });

    it('can be in up to 5 spaces.', () => {
      store.dispatch({ type: 'BROADCAST_URL', url: '/d1', sid: '1234a' });
      store.dispatch({ type: 'BROADCAST_URL', url: '/d2', sid: '1234a' });
      store.dispatch({ type: 'BROADCAST_URL', url: '/d3', sid: '1234a' });
      store.dispatch({ type: 'BROADCAST_URL', url: '/d4', sid: '1234a' });
      store.dispatch({ type: 'BROADCAST_URL', url: '/d5', sid: '1234a' });

      expect(store.getState().getIn(['sources', '1234a'])).to.equal(fromJS(
        { url: '/d5',
          spaces: OrderedSet.of('/d1', '/d2', '/d3', '/d4') }
      ));
    });
    it('and deletes the user from the old room', () => {
      expect(store.getState().getIn(['spaces'])).to.equal(new Map(
      { '\/bb': new Map({ sources: Set.of() }),
        '\/dd': new Map({ sources: Set.of() }),
        '\/d1': new Map({ sources: Set.of('1234a') }),
        '\/d2': new Map({ sources: Set.of('1234a') }),
        '\/d3': new Map({ sources: Set.of('1234a') }),
        '\/d4': new Map({ sources: Set.of('1234a') }),
        '\/d5': new Map({ sources: Set.of('1234a') }) }
      ));
    });
  });

  describe('delete source from space', () => {
    it('removes source and url, as in previous test.', () => {
      store.dispatch({ type: 'REMOVE_FROM_SPACE', url: '/d1', sid: '1234a' });
      store.dispatch({ type: 'REMOVE_FROM_SPACE', url: '/d2', sid: '1234a' });
      store.dispatch({ type: 'REMOVE_FROM_SPACE', url: '/d3', sid: '1234a' });
      store.dispatch({ type: 'REMOVE_FROM_SPACE', url: '/d4', sid: '1234a' });

      expect(store.getState().getIn(['spaces'])).to.equal(new Map(
      { '\/bb': new Map({ sources: Set.of() }),
        '\/dd': new Map({ sources: Set.of() }),
        '\/d1': new Map({ sources: Set.of() }),
        '\/d2': new Map({ sources: Set.of() }),
        '\/d3': new Map({ sources: Set.of() }),
        '\/d4': new Map({ sources: Set.of() }),
        '\/d5': new Map({ sources: Set.of('1234a') }) }
        ));
    });
    it('accepts werid value.', () => {
      store.dispatch({ type: 'REMOVE_FROM_SPACE', url: '/ddede', sid: '1234a' });
      expect(store.getState().getIn(['spaces'])).to.equal(new Map(
        { '\/bb': new Map({ sources: Set.of() }),
          '\/dd': new Map({ sources: Set.of() }),
          '\/d1': new Map({ sources: Set.of() }),
          '\/d2': new Map({ sources: Set.of() }),
          '\/d3': new Map({ sources: Set.of() }),
          '\/d4': new Map({ sources: Set.of() }),
          '\/d5': new Map({ sources: Set.of('1234a') }),
          '\/ddede': new Map({ sources: Set.of() }) }
      ));
    });
  });
});
