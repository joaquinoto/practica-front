import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HomePage = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/reservations`)
      .then((response) => setReservations(response.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Reservas del SUM</h1>
      <ul>
        {reservations.map((r) => (
          <li key={r.id}>
            {r.date} - {r.shift} - {r.building.address} - {r.resident.name}
          </li>
        ))}
      </ul>
      <p>Total Reservas: {reservations.length}</p>
    </div>
  );
};

export default HomePage;
