import { CountState } from 'model/countState';
import { mapCountStateToVM } from './count.mapper';
import { CountViewModel } from './viewModel/count';

describe('Count selectors', () => {
  // Arrange
  const testCases: [CountState, CountViewModel][] = [
    [null, { value: 0, clicks: 0 }],
    [
      { value: 0, clicks: null },
      { value: 0, clicks: 0 },
    ],
    [
      { value: null, clicks: 0 },
      { value: 0, clicks: 0 },
    ],
    [
      { value: 4, clicks: 1 },
      { value: 4, clicks: 1 },
    ],
  ];

  test.each(testCases)('case %s should return %s', (testCase, expectedResult) => {
    // Act
    const result = mapCountStateToVM(testCase);

    // Assert
    expect(result).toEqual(expectedResult);
  });
});
