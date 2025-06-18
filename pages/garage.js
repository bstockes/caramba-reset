
import { useState, useEffect } from 'react';
import VehicleCard from '../components/VehicleCard';
import AddVehicleModal from '../components/AddVehicleModal';

export default function Garage() {
  const [vehicles, setVehicles] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('carambaGarage') || '[]');
    setVehicles(saved);
  }, []);

  const addVehicle = (v) => {
    const updated = [...vehicles, v];
    setVehicles(updated);
    localStorage.setItem('carambaGarage', JSON.stringify(updated));
  };

  return (
    <main style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>My Garage</h1>
      {vehicles.map((v, i) => <VehicleCard key={i} vehicle={v} />)}
      <button style={{ marginTop: '1rem' }} onClick={() => setShowModal(true)}>
        + Add Vehicle
      </button>
      {showModal && <AddVehicleModal onClose={() => setShowModal(false)} onSave={addVehicle} />}
    </main>
  );
}
