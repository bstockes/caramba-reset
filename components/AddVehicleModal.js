import { useState } from 'react';
import CameraCapture from './CameraCapture';
import styles from '../styles/AddVehicleModal.module.css';

export default function AddVehicleModal({ onClose, onAdd }) {
  const [vin, setVin] = useState('');
  const [showCam, setShowCam] = useState(false);

  const demoVehicle = {
    year: 2021,
    make: 'Volkswagen',
    model: 'Tiguan',
    mileage: 22500,
    oilType: '0W-20',
    oilInterval: 7500,
    tireSize: '235/55R18',
    tirePressure: 35,
    img: '/placeholder-car.png',
  };

  const addVehicle = () => {
    if (vin.length < 5) return;      // very basic check
    onAdd(demoVehicle);
    setVin('');
    onClose();
  };

  const handleCapture = () => {
    setVin('3VV2B7AX9MM000000');     // mock VIN from camera
    setShowCam(false);
  };

  return (
    <>
      {showCam && (
        <CameraCapture onCapture={handleCapture} onCancel={() => setShowCam(false)} />
      )}

      <div className={styles.modal}>
        <h3>Add Vehicle</h3>
        <input
          value={vin}
          onChange={e => setVin(e.target.value)}
          placeholder="Enter VIN"
        />
        <button onClick={() => setShowCam(true)}>📷 Scan VIN</button>
        <button onClick={addVehicle}>Add Vehicle</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </>
  );
}
