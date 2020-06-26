import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import ReduxThunk from 'redux-thunk';

import redditReducer from './slices/redditSlice';

export const store = configureStore({
  reducer: {
    reddit: redditReducer,
  },
  devTools: true,
  middleware: [ReduxThunk],
});

export const persistor = persistStore(store);
