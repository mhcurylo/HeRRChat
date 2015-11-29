import {List, Map, Set} from 'immutable';
import {expect} from 'chai';

import {addToSpace, removeFromSpace} from '../src/functions/space';

describe('Space Movement', () => {

   it('addsToSpace', () => {

        const inState = Map({
            spaces: Map({
                'uhrSpace': Map({
                    id: 'uhrSpace',
                    users: Set.of()
                })
            }),
            users: Map({
                'Kazio': Map({
                    id: 'Kazio',
                    spaces: Set.of() 
                })
            })
        });

        const outState = addToSpace(inState, 'Kazio', 'uhrSpace');

        expect(outState).to.equal(Map({
            spaces: Map({
                'uhrSpace': Map({
                    id: 'uhrSpace',
                    users: Set.of('Kazio')
                })
            }),
            users: Map({
                'Kazio': Map({
                    id: 'Kazio',
                    spaces: Set.of('uhrSpace')
                })
            })
        }));
    });

    it('removesFromSpace', () => {

        const inState = Map({
            spaces: Map({
                'uhrSpace': Map({
                    id: 'uhrSpace',
                    users: Set.of('Kazio')
                })
            }),
            users: Map({
                'Kazio': Map({
                    id: 'Kazio',
                    spaces: Set.of('uhrSpace')
                })
            })
        });

        const outState = removeFromSpace(inState, 'Kazio', 'uhrSpace');

        expect(outState).to.equal(Map({
            spaces: Map({
                'uhrSpace': Map({
                    id: 'uhrSpace',
                    users: Set.of()
                })
            }),
            users: Map({
                'Kazio': Map({
                    id: 'Kazio',
                    spaces: Set.of()
                })
            })
        }));
    });
});


