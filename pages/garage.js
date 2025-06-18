
import { useEffect, useState } from 'react';

const mockUser = {
  name: "Brianne",
  garage: [
    {
      year: 2021,
      make: "Volkswagen",
      model: "Tiguan",
      mileage: 45600,
      oilType: "0W-20 Synthetic",
      oilInterval: 5000,
      tireSize: "235/55R18",
      tirePressure: 35,
    }
  ]
};

function calculateUpcoming(vehicle) {
  const { mileage, oilInterval } = vehicle;
  const nextOil = Math.ceil(mileage / oilInterval) * oilInterval + oilInterval;
  const events = [`Oil change at ${nextOil} mi`];

  if (mileage < 60000) events.push("Brake pads check at 60,000 mi");
  if (mileage < 75000) events.push("Tire rotation at 75,000 mi");

  return events;
}

export default function Garage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const updatedGarage = mockUser.garage.map(v => ({
      ...v,
      upcoming: calculateUpcoming(v),
    }));
    setUser({ ...mockUser, garage: updatedGarage });
  }, []);

  if (!user) return <p>Loading your garage…</p>;

  return (
    <div style={{ padding: 20 }}>
      <h2>My Garage</h2>
      {user.garage.map((v, i) => (
        <div key={i} style={{
          border: '1px solid #ddd',
          borderRadius: 10,
          padding: 16,
          marginBottom: 20,
          background: '#fafafa'
        }}>
          <h3>{v.year} {v.make} {v.model}</h3>
          <p>Mileage: {v.mileage.toLocaleString()} mi</p>
          <p>Oil: {v.oilType}, change every {v.oilInterval.toLocaleString()} mi</p>
          <p>Tires: {v.tireSize} @ {v.tirePressure} PSI</p>
          <h4>🔧 Upcoming Maintenance</h4>
          <ul>
            {v.upcoming.map((item, j) => <li key={j}>{item}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
}
