import { Map, Stack } from 'immutable';

export function receiveSources(sources) {
  return new Stack(sources.map((s, i) => new Map(
  { name: s.name,
    spaces: Stack.of(s.spaces).unshift(s.url),
    id: i }
  )));
}
