import { configureStore } from '@reduxjs/toolkit';
import reservationsReducer from './features/reservationsSlice';
import usersReducer from './features/usersSlice';

const store = configureStore({
  reducer: {
    reservations: reservationsReducer,
    users: usersReducer,
  },
});

export default store;