
import { useState } from 'react';
import styles from '../styles/AddVehicleModal.module.css';

export default function AddVehicleModal({ onClose, onSave }) {
  const [vin, setVin] = useState('');
  const mockVehicle = {
    year: 2021,
    make: 'Volkswagen',
    model: 'Tiguan',
    mileage: 24500,
    oilType: '0W-20',
    oilInterval: 10000,
    tireSize: '235/55R18',
    tirePressure: 35,
    upcoming: ['30,000 mi – Air filter', '40,000 mi – Brake inspection'],
    img: '/placeholder-car.png'
  };

  const handleSave = () => {
    if (!vin.trim()) return;
    onSave({ ...mockVehicle, vin });
    onClose();
  };

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <h2>Add Vehicle</h2>
        <p>Enter VIN (mock decoder will add a demo Tiguan)</p>
        <input value={vin} onChange={e => setVin(e.target.value)} placeholder="VIN" />
        <div className={styles.actions}>
          <button onClick={handleSave}>Save</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
