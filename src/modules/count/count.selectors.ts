import { ReduxState } from 'core/model/reduxState';
import { CountState } from 'model/countState';

export const selectCountState = (state: ReduxState): CountState => state.count;
