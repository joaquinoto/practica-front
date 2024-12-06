// src/components/ReservaForm.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addReserva } from '../features/reservaSlice';

const ReservaForm = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [numeroEd, setNumeroEd] = useState('');
  const [fechaReserva, setFechaReserva] = useState('');
  const [turno, setTurno] = useState('Tarde');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find((u) => u.nombre === nombre && u.apellido === apellido && u.numeroEd === parseInt(numeroEd));
    if (!user) {
      setError('Usuario no encontrado');
      return;
    }
    dispatch(addReserva({ nombre, apellido, numeroEd, fechaReserva, turno }));
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" required />
      <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} placeholder="Apellido" required />
      <input type="number" value={numeroEd} onChange={(e) => setNumeroEd(e.target.value)} placeholder="Número de Edificio" required />
      <input type="date" value={fechaReserva} onChange={(e) => setFechaReserva(e.target.value)} required />
      <select value={turno} onChange={(e) => setTurno(e.target.value)}>
        <option value="Tarde">Tarde</option>
        <option value="Noche">Noche</option>
      </select>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Reservar</button>
    </form>
  );
};

export default ReservaForm;