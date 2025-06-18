
import styles from '../styles/VehicleCard.module.css';

export default function VehicleCard({ vehicle }) {
  return (
    <div className={styles.card}>
      <img src={vehicle.img} alt="Vehicle" className={styles.photo} />
      <div className={styles.info}>
        <h3>{vehicle.year} {vehicle.make} {vehicle.model}</h3>
        <p>Mileage: {vehicle.mileage.toLocaleString()} mi</p>
        <p>Oil: {vehicle.oilType} (change every {vehicle.oilInterval.toLocaleString()} mi)</p>
        <p>Tires: {vehicle.tireSize} @ {vehicle.tirePressure} PSI</p>
        <h4>Upcoming Maintenance</h4>
        <ul>
          {vehicle.upcoming.map((u, i) => <li key={i}>{u}</li>)}
        </ul>
      </div>
    </div>
  );
}
