import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import pollReducer from './modules/poll/redux/pollReducer';
import userReducer from './modules/users/redux/userReducer';

export const store = configureStore({
    reducer: {
        userReducer: userReducer,
        pollReducer: pollReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }).concat(logger),
});