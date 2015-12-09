import {Map, Stack} from 'immutable';

export function receiveSources (sources) {
    return Stack(sources.map((s, i) => Map({
        name: s.name,
        spaces: Stack.of(s.spaces).unshift(s.url),
        id: i
    })));
}