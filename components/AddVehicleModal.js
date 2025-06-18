
import { useState } from 'react';
import CameraCapture from './CameraCapture';
import styles from '../styles/AddVehicleModal.module.css';

export default function AddVehicleModal({ onClose, onAdd }) {
  const [vin, setVin] = useState('');
  const [showCamera, setShowCamera] = useState(false);

  const handleAdd = () => {
    if (!vin) return;
    const vehicle = {
      year: 2021,
      make: 'Volkswagen',
      model: 'Tiguan',
      mileage: 22500,
      oilType: '0W-20',
      oilInterval: 7500,
      tireSize: '235/55R18',
      tirePressure: 35,
      upcoming: ['30,000 mi – Air filter', '40,000 mi – Brake inspection'],
      img: '/placeholder-car.png',
    };
    onAdd(vehicle);
    onClose();
  };

  const handleCapture = (imageData) => {
    setShowCamera(false);
    // Simulate VIN from image
    setVin('3VV2B7AX9MM000000');
  };

  return (
    <>
      {showCamera && (
        <CameraCapture onCapture={handleCapture} onCancel={() => setShowCamera(false)} />
      )}
      <div className={styles.modal}>
        <h2>Add Vehicle</h2>
        <input
          type="text"
          placeholder="Enter VIN"
          value={vin}
          onChange={(e) => setVin(e.target.value)}
        />
        <button onClick={() => setShowCamera(true)}>📷 Scan VIN with Camera</button>
        <button onClick={handleAdd}>Add Vehicle</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </>
  );
}
