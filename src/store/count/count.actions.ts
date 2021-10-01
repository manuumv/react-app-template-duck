import { createAction } from '@reduxjs/toolkit';

export const enum CountActionTypes {
  INCREMENT = 'COUNT/INCREMENT',
  DECREASE = 'COUNT/DECREASE',
  SET_VALUE = 'COUNT/SET_VALUE',
}

export const incrementCountAction = createAction(CountActionTypes.INCREMENT);
export const decreaseCountAction = createAction(CountActionTypes.DECREASE);
export const setCountValueAction = createAction<number>(CountActionTypes.SET_VALUE);
