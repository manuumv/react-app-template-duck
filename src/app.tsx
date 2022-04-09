import { Global, ThemeProvider } from '@emotion/react';
import * as React from 'react';
import { globalStyles } from './app.styles';
import { AppRouter } from 'core/route/router';
import { defaultTheme } from 'styles/theme';
import 'core/locale/locale.service';
import { Provider } from 'react-redux';
import { createStore } from 'core/store/create';

const store = createStore();

export const App: React.VFC = () => (
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <Global styles={globalStyles} />
        <AppRouter />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
