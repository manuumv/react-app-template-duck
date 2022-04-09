import { ThemeProvider } from '@emotion/react';
import { render, fireEvent } from '@testing-library/react';
import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'core/store/create';
import { CountContainer } from './count.container';
import { defaultTheme } from 'styles/theme';

describe('count container', () => {
  let mockStore;

  beforeEach(() => {
    mockStore = createStore();
  });

  it('should increase the count state', () => {
    const component = render(
      <Provider store={mockStore}>
        <ThemeProvider theme={defaultTheme}>
          <CountContainer />
        </ThemeProvider>
      </Provider>,
    );
    const buttons = component.getAllByRole('button');
    const label = component.getByText('Clicks', { exact: false });
    const IncrementButton = buttons[0];

    expect(label).toHaveTextContent('Count: 0 Clicks: 0');
    fireEvent.click(IncrementButton);
    expect(label).toHaveTextContent('Count: 1 Clicks: 1');
  });

  it('should decrease the count state', () => {
    const component = render(
      <Provider store={mockStore}>
        <ThemeProvider theme={defaultTheme}>
          <CountContainer />
        </ThemeProvider>
      </Provider>,
    );
    const buttons = component.getAllByRole('button');
    const label = component.getByText('Clicks', { exact: false });
    const DecreaseButton = buttons[1];

    expect(label).toHaveTextContent('Count: 0 Clicks: 0');
    fireEvent.click(DecreaseButton);
    expect(label).toHaveTextContent('Count: -1 Clicks: 1');
  });
});
