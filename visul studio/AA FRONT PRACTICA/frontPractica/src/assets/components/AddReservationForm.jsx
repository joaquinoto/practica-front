import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addReservation } from '../redux/features/reservationsSlice';

const AddReservationForm = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    date: '',
    shift: '',
    residentId: '', // Suponiendo que eliges el residente por ID
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addReservation(form));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="date" type="date" value={form.date} onChange={handleChange} />
      <select name="shift" value={form.shift} onChange={handleChange}>
        <option value="">Seleccione turno</option>
        <option value="Tarde">Tarde</option>
        <option value="Noche">Noche</option>
      </select>
      <input name="residentId" value={form.residentId} onChange={handleChange} placeholder="ID Residente" />
      <button type="submit">Reservar</button>
    </form>
  );
};

export default AddReservationForm;