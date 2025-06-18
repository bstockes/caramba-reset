
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

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">My Garage</h1>
      <input
        type="text"
        placeholder="Enter VIN"
        value={vinInput}
        onChange={(e) => setVinInput(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      {user?.garage?.map((v, index) => (
        <div key={index} className="bg-white rounded-xl shadow p-4 mb-4">
          <h2 className="text-xl font-semibold mb-2">{v.year} {v.make} {v.model}</h2>
          <p className="text-gray-700">Mileage: {v.mileage.toLocaleString()} mi</p>
          <p className="text-gray-700">Oil Type: {v.oilType}</p>
          <p className="text-gray-700">Tire Size: {v.tireSize}</p>
          <p className="text-gray-700">Tire Pressure: {v.tirePressure} PSI</p>
          <div className="mt-3">
            <p className="font-semibold">Upcoming Maintenance:</p>
            <ul className="list-disc ml-5 text-gray-700">
              {v.upcoming.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
