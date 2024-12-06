// src/App.jsx
import React, { useState, useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './store';
import { fetchUsers } from './features/userSlice';
import ReservaForm from './components/ReservaForm';
import ReservaList from './components/ReservaList';

function App() {
  const [view, setView] = useState('form');
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {
    console.log(users);
  }, [users]);

  return (
    <Provider store={store}>
      <div>
        <h1>Administración del SUM</h1>
        <button onClick={() => setView('form')}>Agregar Reserva</button>
        <button onClick={() => setView('list')}>Ver Reservas</button>
        {view === 'form' && <ReservaForm />}
        {view === 'list' && <ReservaList />}
      </div>
    </Provider>
  );
}

export default App;