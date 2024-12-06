// src/App.jsx
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import ReservaForm from './components/ReservaForm';
import ReservaList from './components/ReservaList';
import UserLoader from './components/UserLoader';

function App() {
  const [view, setView] = useState('form');
  const [refreshKey, setRefreshKey] = useState(0);

  const handleViewChange = (newView) => {
    if (newView === 'list') {
      setRefreshKey((oldKey) => oldKey + 1);
    }
    setView(newView);
  };

  return (
    <Provider store={store}>
      <div>
        <UserLoader />
        <h1>Administración del SUM</h1>
        <button onClick={() => handleViewChange('form')}>Agregar Reserva</button>
        <button onClick={() => handleViewChange('list')}>Ver Reservas</button>
        {view === 'form' && <ReservaForm />}
        {view === 'list' && <ReservaList key={refreshKey} />}
      </div>
    </Provider>
  );
}

export default App;