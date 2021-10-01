import { ThemeProvider } from '@emotion/react';
import { fireEvent, render } from '@testing-library/react';
import * as React from 'react';
import { defaultTheme } from 'styles/theme';
import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  it('should fire the expected onClick and set the given label', () => {
    const mockLabel = 'test';
    const mockOnClick = jest.fn();
    const component = render(
      <ThemeProvider theme={defaultTheme}>
        <ButtonComponent label={mockLabel} onClick={mockOnClick} />
      </ThemeProvider>,
    );
    const button = component.getByRole('button');

    fireEvent.click(button);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
    expect(button.textContent).toEqual(mockLabel);
  });
});
