import {List, Map, fromJS} from 'immutable';


export function newMessage (stateMessages, stateSpaces, message){

    return stateMessages.push(
		Map({
			receivers: stateSpaces.getIn([message.get('space'), 'users']),
			message: message.get('message'),
			sender: message.get('user')
 		})
	);
}
