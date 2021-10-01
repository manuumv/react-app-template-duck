import { AnyAction, configureStore, EnhancedStore } from '@reduxjs/toolkit';
import { ThunkMiddleware } from 'redux-thunk';
import { ReduxState } from './reduxState';
import { rootReducer } from './rootReducer';

export const createStore = (): EnhancedStore<ReduxState, AnyAction, [ThunkMiddleware<ReduxState, AnyAction, undefined>]> => {
  const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
  });

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./rootReducer', () => store.replaceReducer(rootReducer));
  }

  return store;
};
