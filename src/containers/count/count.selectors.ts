import { createSelector } from 'reselect';
import { selectCountState } from 'store/count/count.selectors';
import { mapCountStateToVM } from './count.mapper';

export const selectCountViewModel = createSelector(selectCountState, mapCountStateToVM);
