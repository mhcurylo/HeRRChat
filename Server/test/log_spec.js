import {fromJS, Set, Map} from 'immutable';
import {expect} from 'chai';

import makeStore from '../src/store';

describe('login', () => {

    const store = makeStore();

    describe('logingUser', () => {

 

        it('adds if new name', () => {


            store.dispatch({type: 'BROADCAST_NAME', name: 'Józef', sid:'1234a'});

            expect(store.getState().getIn(['sources', '1234a'])).to.equal(fromJS({
                name: 'Józef'
            }));
            expect(store.getState().get('names')).to.equal(Set.of('Józef'));

        })

        it('change name and add if name exists', () => {


            store.dispatch({type: 'BROADCAST_NAME', name: 'Józef', sid:'1235a'});

            expect(store.getState().getIn(['sources', '1235a'])).to.equal(fromJS({
                name: 'Józef_'
            }));
            expect(store.getState().get('names')).to.equal(Set.of('Józef', 'Józef_'));

        })
    });

    describe('logoutUser', () => {

      it('removes user and name (basic for now)', () => {

            store.dispatch({type: 'LOGOUT_SOURCE', sid:'1234a'});
            store.dispatch({type: 'LOGOUT_SOURCE', sid:'1235a'});
            expect(store.getState().getIn(['sources'])).to.equal(fromJS({}));
            expect(store.getState().get('names')).to.equal(Set.of());

        });


    });
});
