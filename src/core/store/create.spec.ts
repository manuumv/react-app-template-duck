import { createStore } from './create';
import { ReduxState } from '../model/reduxState';

describe('create store', () => {
  it('should return the expected state and not add module hot', () => {
    const state: ReduxState = {
      count: { clicks: 0, value: 0 },
    };
    const expectedResult = state;

    const result = createStore();

    expect(result.getState()).toEqual(expectedResult);
  });
});
