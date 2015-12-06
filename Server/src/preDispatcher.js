// const RECEIVE_NAME = function (action, store) {
//  return {
//      type: 'RECEIVE_NAME',
//      name: store.getState().getIn(['sources', action.sid, 'name'])
//  }
// }
// const RECIEVE_SIGNAL (signal, source, space) {
//     return {
//         type: types.RECIEVE_SIGNAL,
//         signal,
//         source,
//         space
//     };
// }

//io.sockets.socket(savedSocketId).emit(...)

export default function (store, io, action) {
    
    switch(action.type) {
            case 'BROADCAST_URL':
                action.loggedSpaces = store.getState().getIn(['sources', action.sid, 'spacesOrder']);
                break;      
        default:
            console.log('sumfink else, pre');
    }

    return action;
}