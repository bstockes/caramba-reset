import { useState, useEffect } from 'react';
import styles from '../styles/VehicleCard.module.css';

const schedule = [
  { name: 'Oil Change', every: 7500 },
  { name: 'Air Filter', every: 30000 },
  { name: 'Brake Inspection', every: 40000 }
];

export default function VehicleCard({ vehicle }) {
  const [expanded, setExpanded] = useState(false);
  const [due, setDue] = useState([]);

  useEffect(() => {
    if (!vehicle) return;
    const calc = schedule.map(item => {
      const next = Math.ceil(vehicle.mileage / item.every) * item.every;
      return { ...item, dueAt: next, left: next - vehicle.mileage };
    });
    setDue(calc);
  }, [vehicle]);

  if (!vehicle) return null;

  return (
    <div className={styles.card}>
      <img src={vehicle.img || '/placeholder-car.png'} alt="vehicle" />
      <h3>{vehicle.year} {vehicle.make} {vehicle.model}</h3>
      <p>Mileage: {vehicle.mileage.toLocaleString()} mi</p>

      {due.length > 0 && (
        <div className={styles.next}>
          Next: {due[0].name} in {due[0].left.toLocaleString()} mi
        </div>
      )}

      <button onClick={() => setExpanded(!expanded)}>
        {expanded ? 'Hide' : 'Show'} Full Schedule
      </button>

      {expanded && (
        <ul>
          {due.map(d => (
            <li key={d.name}>
              {d.name}: {d.dueAt.toLocaleString()} mi ({d.left.toLocaleString()} mi left)
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
