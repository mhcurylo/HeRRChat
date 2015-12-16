import { Map, OrderedSet } from 'immutable';

export const INITIAL_STATE = new Map(
{ signals: new Map({}),
  sources: new Map({}),
  spacesOrder: OrderedSet.of(),
  name: '',
  url: '',
  noise: '',
  action: '',
  sid: '' }
);
