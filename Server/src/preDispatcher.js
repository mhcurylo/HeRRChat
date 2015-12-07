
export default function (store, io, action) {
    
    switch(action.type) {
            case 'BROADCAST_URL':
                action.loggedSpaces = store.getState().getIn(['sources', action.sid, 'spaces']);
                break;      
        default:
            console.log('sumfink else, pre');
    }

    return action;
}