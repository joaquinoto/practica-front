import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './assets/redux/store';
import HomePage from './assets/pages/HomePage';
import AddReservationForm from './assets/components/AddReservationForm';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-reservation" element={<AddReservationForm />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;