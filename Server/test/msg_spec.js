import {List, Map, Set, fromJS} from 'immutable';
import {expect} from 'chai';

import {newMessage} from '../src/functions/msg';

describe('Messages', () => {
    
    it('produces message to distribute', () => {
        
        const inState = fromJS([]);
        const inSpaces = fromJS({
        	"uhrRoom": {
        		"users": ['Kaziu']
        	}
        });
        const inMessage = fromJS({
        	"space": "uhrRoom",
        	"message": "Much love",
        	"user": "Kaziu"
        });

        const outState = newMessage(inState, inSpaces, inMessage);

        expect(outState).to.equal(fromJS([{
			receivers: ['Kaziu'],
			message: "Much love",
			sender: "Kaziu"
        }]));

    });
});
