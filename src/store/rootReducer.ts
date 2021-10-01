import { combineReducers } from 'redux';
import { countReducer } from './count/count.reducer';
import { ReduxState } from './reduxState';

export const rootReducer = combineReducers<ReduxState>({
  count: countReducer,
});
