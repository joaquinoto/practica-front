import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:8080/reserva';

// Acción para obtener reservas
export const fetchReservations = createAsyncThunk(
  'reservations/fetchReservations',
  async () => {
    const response = await axios.get(API_URL);
    return response.data;
  }
);

// Acción para agregar una reserva
export const addReservation = createAsyncThunk(
  'reservations/addReservation',
  async (reservationData) => {
    const response = await axios.post(`${API_URL}/add`, reservationData);
    return response.data;
  }
);

const reservationsSlice = createSlice({
  name: 'reservations',
  initialState: {
    reservations: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Obtener reservas
      .addCase(fetchReservations.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchReservations.fulfilled, (state, action) => {
        state.loading = false;
        state.reservations = action.payload;
      })
      .addCase(fetchReservations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Agregar reserva
      .addCase(addReservation.fulfilled, (state, action) => {
        state.reservations.push(action.payload);
      });
  },
});

export default reservationsSlice.reducer;
