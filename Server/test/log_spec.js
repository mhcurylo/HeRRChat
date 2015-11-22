import {List, Map, Set, fromJS} from 'immutable';
import {expect} from 'chai';

import {loginUser, logoutUser} from '../src/log';

describe('login', () => {

    describe('logingUser', () => {
        it('adds if new name', () => {

            const inStateUsers = Map();
            const outStateUsers = loginUser(inStateUsers, 'Kazio');         
            expect(outStateUsers).to.equal(Map({
                'Kazio': Map({
                    id: 'Kazio',
                    spaces: Set.of()
                })
            }));

        });

      it('changes name and ads if name already exists', () => {

            const inStateUsers = Map({
                'Kazio': Map({
                    id: 'Kazio',
                    spaces: Set.of()
                })
            });


            const outStateUsers = loginUser(inStateUsers, 'Kazio');    
            expect(outStateUsers).to.equal(Map({
               'Kazio': Map({
                    id: 'Kazio',
                    spaces: Set.of()
                }),
                'Kazio_': Map({
                    id: 'Kazio_',
                    spaces: Set.of()
                })
            }));

        });


    });

    describe('logoutUser', () => {

      it('removes user', () => {

            const inStateUsers = Map({
                'Kazio': Map({
                    id: 'Kazio',
                    spaceIds: Set.of()
                })
            });

            const outStateUsers = logoutUser(inStateUsers, 'Kazio');    
            expect(outStateUsers).to.equal(Map({
            }));

        });


    });
});
