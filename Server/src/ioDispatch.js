
export default function (store, io, dispatcher) {
  return function shortpatched(action) {
    return dispatcher(store, io, action);
  };
}
