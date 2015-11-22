import {List, Map, Set, fromJS} from 'immutable';
import {expect} from 'chai';

import reducer from '../src/reducer';
import {INITIAL_STATE} from '../src/initial';

describe('Reduce works', () => {

   it('reduces LOGOUT_USER', () => {

		const action =  {type: 'LOGOUT_USER', user: 'PrawdziwyKazio'};

		const stateOut = reducer(INITIAL_STATE, action);

		const expectedState = INITIAL_STATE.deleteIn(['users', 'PrawdziwyKazio']);

		expect(stateOut).to.equal(expectedState);

    });

   it('reduces a mix of every operation', () => {

		const actions =  [
			{type: 'LOGIN_USER', user: 'PrawdziwyKazio'},
			{type: 'LOGOUT_USER', user: 'PrawdziwyKazio'},
			{type: 'ADD_TO_SPACE', user: 'PrawdziwyKazio_', space: 'uhrSpace'},
			{type: 'LOGIN_USER', user: 'Zbysiu'},
			{type: 'ADD_TO_SPACE', user: 'Zbysiu', space: 'uhrSpace'},
			{type: 'NEW_MESSAGE', message: fromJS({
									user: 'Zbysiu', 
									space: 'uhrSpace', 
									message: 'Jo'})},
			{type: 'REMOVE_FROM_SPACE', user: 'PrawdziwyKazio_', space: 'uhrSpace'},

		];

		const stateOut = actions.reduce(reducer, INITIAL_STATE);

		const expectedState = Map({
		    users: Map({
		        'PrawdziwyKazio_': Map({
		            id: 'PrawdziwyKazio_',
		            spaces: Set.of()
		        }),
		        'Zbysiu': Map({
		            id: 'Zbysiu',
		            spaces: Set.of('uhrSpace')
		        })        
		    }),
		    spaces: Map({
		        'uhrSpace': Map({
		            id: 'uhrSpace',
		            users: Set.of('Zbysiu')
		        })
		    }),
		    messages: List.of(
		    	Map({
		            receivers: Set.of('PrawdziwyKazio'),
		            sender: 'PrawdziwyKazio',
		            message: 'Wiadomość z próbowki'
		        }),
		    	Map({
		        	receivers: Set.of('PrawdziwyKazio_', 'Zbysiu'),
		            sender: 'Zbysiu',			            
		            message: 'Jo'
	        })
	        )
		});

		expect(stateOut).to.equal(expectedState);

    });

});