
import { useState } from 'react';

export default function MyGarage() {
  const [vehicles, setVehicles] = useState([
    { id: 1, year: 2020, make: 'Toyota', model: 'Camry' },
    { id: 2, year: 2021, make: 'Honda', model: 'Civic' }
  ]);

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '16px' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>My Garage</h1>
      {vehicles.map((vehicle) => (
        <div key={vehicle.id} style={{
          border: '1px solid #ccc',
          borderRadius: '8px',
          padding: '12px',
          marginBottom: '12px',
          boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
        }}>
          <div style={{ fontWeight: 'bold' }}>{vehicle.year} {vehicle.make} {vehicle.model}</div>
        </div>
      ))}
    </div>
  );
}
