
export default function (store, io, dispatcher) {
    return function (action) {
        return dispatcher(store, io, action);
    }
}