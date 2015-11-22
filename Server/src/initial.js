import {Map, Set, List} from 'immutable';

export const INITIAL_STATE = Map({
    users: Map({
        'PrawdziwyKazio': Map({
            id: 'PrawdziwyKazio',
            spaces: Set.of()
        })    
    }),
    spaces: Map({
        'uhrSpace': Map({
            id: 'uhrSpace',
            users: Set.of()
        })
    }),
    messages: List.of(Map({
        receivers: Set.of('PrawdziwyKazio'),
        sender: 'PrawdziwyKazio',
        message: 'Wiadomość z próbowki'
    }))
});
