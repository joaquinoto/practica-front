// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import reservaReducer from './features/reservaSlice';
import userReducer from './features/userSlice';

export const store = configureStore({
  reducer: {
    reserva: reservaReducer,
    user: userReducer,
  },
});