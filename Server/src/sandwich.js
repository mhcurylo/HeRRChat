

export default function (store, bun, mayo) {

    return function consume(action) {

        return bun(store.dispatch(mayo(action)));

    }
}