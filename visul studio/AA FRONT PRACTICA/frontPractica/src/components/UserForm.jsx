// src/components/UserForm.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../features/userSlice';

const UserForm = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [DNI, setDNI] = useState('');
  const [direccion, setDireccion] = useState('');
  const [numeroEd, setNumeroEd] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser({ nombre, apellido, DNI, direccion, numeroEd, password }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" required />
      <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} placeholder="Apellido" required />
      <input type="number" value={DNI} onChange={(e) => setDNI(e.target.value)} placeholder="DNI" required />
      <input type="text" value={direccion} onChange={(e) => setDireccion(e.target.value)} placeholder="Dirección" required />
      <input type="number" value={numeroEd} onChange={(e) => setNumeroEd(e.target.value)} placeholder="Número de Edificio" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" required />
      <button type="submit">Agregar Usuario</button>
    </form>
  );
};

export default UserForm;