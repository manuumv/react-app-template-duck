import { ReduxState } from '../../store/reduxState';
import * as stateSelectors from 'store/count/count.selectors';
import * as mappers from './count.mapper';
import { CountState } from '../../model/countState';
import { CountViewModel } from './viewModel/count';
import { selectCountViewModel } from './count.selectors';

jest.mock('store/count/count.selectors');
jest.mock('./count.mapper');

describe('Count selectors', () => {
  it('should return the expected count state', () => {
    // Arrange
    const mockCountState: CountState = { value: 1, clicks: 0 };
    const reduxState: ReduxState = { count: mockCountState };
    const spyOnSelectCountState = jest.spyOn(stateSelectors, 'selectCountState').mockReturnValue(mockCountState);
    const mockCountVM: CountViewModel = { value: 1, clicks: 0 };
    const spyOnMapCountStateToVM = jest.spyOn(mappers, 'mapCountStateToVM').mockReturnValue(mockCountVM);
    const expectedResult = mockCountVM;

    // Act
    const result = selectCountViewModel(reduxState);

    // Assert
    expect(spyOnSelectCountState).toHaveBeenCalledWith(reduxState);
    expect(spyOnMapCountStateToVM).toHaveBeenCalledWith(mockCountState);
    expect(result).toEqual(expectedResult);
  });
});
