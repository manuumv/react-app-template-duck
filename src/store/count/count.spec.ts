import { AnyAction } from '@reduxjs/toolkit';
import { CountState } from 'model/countState';
import * as actions from './count.actions';
import { ReduxState } from '../reduxState';
import { countInitialState, countReducer } from './count.reducer';
import { selectCountState } from './count.selectors';

describe('count store', () => {
  describe('selectors', () => {
    it('should return the expected count state', () => {
      // Arrange
      const rootState = { count: countInitialState } as ReduxState;
      const expectedResult: CountState = countInitialState;

      // Act
      const result = selectCountState(rootState);

      // Assert
      expect(result).toEqual(expectedResult);
    });
  });

  describe('reducer', () => {
    it('should return the current state if action type is unknown', () => {
      // Arrange
      const action: AnyAction = { type: null };
      const expectedResult: CountState = countInitialState;

      // Act
      const result = countReducer(countInitialState, action);

      // Assert
      expect(result).toEqual(expectedResult);
    });

    it('should increment the value and click if action type is incrementCountAction.type', () => {
      // Arrange
      const action: AnyAction = { type: actions.incrementCountAction.type };
      const expectedResult: CountState = { value: 1, clicks: 1 };

      // Act
      const result = countReducer(countInitialState, action);

      // Assert
      expect(result).toEqual(expectedResult);
    });

    it('should decrease the value and increase click if action type is decreaseCountAction.type', () => {
      // Arrange
      const action: AnyAction = { type: actions.decreaseCountAction.type };
      const expectedResult: CountState = { value: -1, clicks: 1 };

      // Act
      const result = countReducer(countInitialState, action);

      // Assert
      expect(result).toEqual(expectedResult);
    });

    it('should set the given value if action type is setCountValueAction.type', () => {
      // Arrange
      const action: AnyAction = {
        type: actions.setCountValueAction.type,
        payload: 4,
      };
      const expectedResult: CountState = { value: 4, clicks: 0 };

      // Act
      const result = countReducer(countInitialState, action);

      // Assert
      expect(result).toEqual(expectedResult);
    });
  });

  describe('actions', () => {
    describe('actions', () => {
      it('incrementAction', () => {
        // Act
        const result = actions.incrementCountAction();

        // Assert
        expect(result.type).toEqual(actions.CountActionTypes.INCREMENT);
        expect(result.payload).toBeUndefined();
      });

      it('decreaseAction', () => {
        // Act
        const result = actions.decreaseCountAction();

        // Assert
        expect(result.type).toEqual(actions.CountActionTypes.DECREASE);
        expect(result.payload).toBeUndefined();
      });

      it('setValueAction', () => {
        // Arrange
        const value = 2;

        // Act
        const result = actions.setCountValueAction(value);

        // Assert
        expect(result.type).toEqual(actions.CountActionTypes.SET_VALUE);
        expect(result.payload).toEqual(value);
      });
    });
  });
});
