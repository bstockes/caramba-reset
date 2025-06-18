
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
      tirePressure: 35
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
  const [vinInput, setVinInput] = useState('');

  useEffect(() => {
    const updatedGarage = mockUser.garage.map(v => ({
      ...v,
      upcoming: calculateUpcoming(v)
    }));
    setUser({ ...mockUser, garage: updatedGarage });
  }, []);

  const handleAddVehicle = () => {
    if (!vinInput.trim()) return;
    const newVehicle = {
      year: 2020,
      make: "Honda",
      model: "Civic",
      mileage: 30000,
      oilType: "5W-30 Synthetic",
      oilInterval: 6000,
      tireSize: "215/55R16",
      tirePressure: 33,
      upcoming: calculateUpcoming({ mileage: 30000, oilInterval: 6000 })
    };
    setUser(prev => ({
      ...prev,
      garage: [...prev.garage, newVehicle]
    }));
    setVinInput('');
  };

  if (!user) return <p>Loading your garage…</p>;

  return (
    <div style={{ padding: 20 }}>
      <h2>My Garage</h2>
      <div style={{ marginBottom: 20 }}>
        <input
          type="text"
          placeholder="Enter VIN..."
          value={vinInput}
          onChange={e => setVinInput(e.target.value)}
          style={{ padding: 6, width: '60%' }}
        />
        <button onClick={handleAddVehicle} style={{ marginLeft: 10 }}>Add Vehicle</button>
      </div>

      {user.garage.map((v, i) => (
        <div key={i} style={{
          border: '1px solid #ddd',
          borderRadius: 10,
          padding: 16,
          marginBottom: 20,
          background: '#fafafa'
        }}>
          <h3>{v.year} {v.make} {v.model}</h3>
          <p><strong>Mileage:</strong> {v.mileage.toLocaleString()} mi</p>
          <p><strong>Oil:</strong> {v.oilType}, change every {v.oilInterval.toLocaleString()} mi</p>
          <p><strong>Tires:</strong> {v.tireSize} @ {v.tirePressure} PSI</p>
          <h4>🔧 Upcoming Maintenance</h4>
          <ul>
            {v.upcoming.map((item, j) => <li key={j}>{item}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
}
