import {Map, Set, List} from 'immutable';

export const INITIAL_STATE = Map({
    sources: Map({
        'PrawdziwyKazio': Map({
            id: 'PrawdziwyKazio',
            spaces: Set.of()
        })    
    }),
    spaces: Map({
        'uhrSpace': Map({
            id: 'uhrSpace',
            sources: Set.of()
        })
    }),
    signals: List.of(Map({
        receivers: Set.of('PrawdziwyKazio'),
        source: 'PrawdziwyKazio',
        signal: 'Wiadomość z próbowki',
        space: '#/'
    }))
});
