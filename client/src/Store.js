import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import pollReducer from './modules/poll/redux/pollReducer';
import userReducer from './modules/users/redux/userReducer';

export default configureStore({
    reducer: {
        userState: userReducer,
        pollState: pollReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }).concat(logger),
});