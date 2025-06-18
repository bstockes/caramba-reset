
import { useState, useEffect } from 'react';
import styles from '../styles/VehicleCard.module.css';

const maintenanceSchedule = [
  { name: 'Oil Change', every: 7500 },
  { name: 'Air Filter', every: 30000 },
  { name: 'Brake Inspection', every: 40000 },
];

export default function VehicleCard({ vehicle }) {
  const [expanded, setExpanded] = useState(false);
  const [nextDue, setNextDue] = useState([]);

  useEffect(() => {
    const due = maintenanceSchedule.map(item => {
      const next = Math.ceil(vehicle.mileage / item.every) * item.every;
      return { ...item, dueAt: next, milesLeft: next - vehicle.mileage };
    });
    setNextDue(due);
  }, [vehicle.mileage]);

  const toggle = () => setExpanded(!expanded);

  return (
    <div className={styles.card}>
      <img src={vehicle.img || '/placeholder-car.png'} alt="vehicle" />
      <h3>{vehicle.year} {vehicle.make} {vehicle.model}</h3>
      <p><strong>Mileage:</strong> {vehicle.mileage.toLocaleString()} mi</p>
      <p><strong>Oil:</strong> {vehicle.oilType} (every {vehicle.oilInterval} mi)</p>
      <p><strong>Tires:</strong> {vehicle.tireSize} @ {vehicle.tirePressure} PSI</p>
      <div className={styles.maintenance}>
        <p><strong>Next:</strong> {nextDue[0]?.name} in {nextDue[0]?.milesLeft.toLocaleString()} mi</p>
        <button onClick={toggle}>{expanded ? 'Hide Full Schedule' : 'Show Full Schedule'}</button>
        {expanded && (
          <ul>
            {nextDue.map(item => (
              <li key={item.name}>
                {item.name}: {item.dueAt.toLocaleString()} mi ({item.milesLeft.toLocaleString()} mi left)
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
