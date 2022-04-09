import { ThemeProvider } from '@emotion/react';
import { addDecorator, addParameters } from '@storybook/react';
import * as React from 'react';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import i18n from 'core/locale/locale.service';
import { createStore } from 'core/store/create';
import { defaultTheme } from '../src/styles/theme';
import { parameters } from './config/parameters';

const store = createStore();

addParameters(parameters);

addDecorator((story) => (
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={defaultTheme}>{story()}</ThemeProvider>
    </I18nextProvider>
  </Provider>
));

