import { Global, ThemeProvider } from '@emotion/react';
import * as React from 'react';
import { globalStyles } from './app.styles';
import { AppRouter } from 'core/router';
import { defaultTheme } from 'styles/theme';
import 'core/translation';
import { Provider } from 'react-redux';
import { createStore } from 'store/create';

const store = createStore();

export const App: React.FC = () => (
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <Global styles={globalStyles} />
        <AppRouter />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
