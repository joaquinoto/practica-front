// src/components/ReservaList.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservas } from '../features/reservaSlice';

const ReservaList = () => {
  const dispatch = useDispatch();
  const reservas = useSelector((state) => state.reserva.reservas);
  const reservaStatus = useSelector((state) => state.reserva.status);

  useEffect(() => {
    if (reservaStatus === 'idle') {
      dispatch(fetchReservas());
    }
  }, [reservaStatus, dispatch]);

  return (
    <div>
      <h2>Lista de Reservas</h2>
      <ul>
        {reservas.map((reserva) => (
          <li key={reserva.id}>
            {reserva.nombre} {reserva.apellido} - {reserva.fechaReserva} - {reserva.turno}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReservaList;