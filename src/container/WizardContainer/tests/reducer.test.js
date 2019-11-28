import { fromJS } from 'immutable';
import wizardContainerReducer from '../reducer';

describe('wizardContainerReducer', () => {
  it('returns the initial state', () => {
    expect(wizardContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
