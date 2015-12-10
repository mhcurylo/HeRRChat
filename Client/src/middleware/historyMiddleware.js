import {toJS, toArray, orderedSet} from 'immutable';

export default history => store => next => action => {
    if (action.meta && action.meta.changeUrl) {
        history.push({
            pathname: action.url
        });
    }
    console.log('clicked');

    return next(action);
}