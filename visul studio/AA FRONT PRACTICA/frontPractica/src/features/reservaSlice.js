// src/features/reservaSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchReservas = createAsyncThunk('reserva/fetchReservas', async () => {
  const response = await axios.get('http://localhost:8080/reserva');
  return response.data;
});

export const addReserva = createAsyncThunk('reserva/addReserva', async (reserva) => {
  const response = await axios.post('http://localhost:8080/reserva/add', reserva);
  return response.data;
});

const reservaSlice = createSlice({
  name: 'reserva',
  initialState: {
    reservas: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReservas.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchReservas.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.reservas = action.payload;
      })
      .addCase(fetchReservas.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addReserva.fulfilled, (state, action) => {
        state.reservas.push(action.payload);
      });
  },
});

export default reservaSlice.reducer;