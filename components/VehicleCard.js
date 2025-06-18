import { useState, useEffect } from 'react';
import styles from '../styles/VehicleCard.module.css';

const schedule = [
  { name:'Oil Change', every:7500 },
  { name:'Air Filter', every:30000 },
  { name:'Brake Inspection', every:40000 }
];

export default function VehicleCard({ vehicle }) {
  const [expanded,setExpanded]=useState(false);
  const [due,setDue]=useState([]);

  useEffect(()=>{
    setDue(schedule.map(s=>{
      const next=Math.ceil(vehicle.mileage/s.every)*s.every;
      return {...s, dueAt: next, left: next - vehicle.mileage};
    }));
  },[vehicle]);

  return (
    <div className={styles.card}>
      <img src={vehicle.img||'/placeholder-car.png'} />
      <h3>{vehicle.year} {vehicle.make} {vehicle.model}</h3>
      <p>Mileage: {vehicle.mileage.toLocaleString()} mi</p>
      <div className={styles.next}>Next: {due[0].name} in {due[0].left.toLocaleString()} mi</div>
      <button onClick={()=>setExpanded(!expanded)}>{expanded?'Hide':'Show'} Full Schedule</button>
      {expanded && (
        <ul>
          {due.map(d=><li key={d.name}>{d.name} at {d.dueAt.toLocaleString()} mi ({d.left.toLocaleString()} mi left)</li>)}
        </ul>
      )}
    </div>
  );
}
