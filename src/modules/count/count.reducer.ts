import { ActionReducerMapBuilder, createReducer, PayloadAction } from '@reduxjs/toolkit';
import * as actions from './count.actions';
import { CountState } from 'model/countState';

export const countInitialState: CountState = {
  clicks: 0,
  value: 0,
};

const defaultCase = (state: CountState): CountState => state;

const handleIncrement = (state: CountState): CountState => ({
  clicks: state.clicks + 1,
  value: state.value + 1,
});

const handleDecrease = (state: CountState): CountState => ({
  clicks: state.clicks + 1,
  value: state.value - 1,
});

const handleSetValue = (state: CountState, action: PayloadAction<number>): CountState => ({
  ...state,
  value: action.payload,
});

const reduceBuilder = (builder: ActionReducerMapBuilder<CountState>): void => {
  builder.addCase(actions.incrementCountAction, handleIncrement);
  builder.addCase(actions.decreaseCountAction, handleDecrease);
  builder.addCase(actions.setCountValueAction, handleSetValue);
  builder.addDefaultCase(defaultCase);
};

export const countReducer = createReducer<CountState>(countInitialState, reduceBuilder);
