
const mockListings = [
  { name: "Brake Pads", price: "$59.99", fitment: "2021 VW Tiguan" },
  { name: "Oil Filter", price: "$15.99", fitment: "2020-2023 VW Tiguan" }
];

export default function MyListings() {
  return (
    <div style={{ padding: 20 }}>
      <h2>My Product Listings</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {mockListings.map((item, index) => (
          <div key={index} style={{ border: '1px solid #ccc', borderRadius: 6, padding: 10 }}>
            <h3>{item.name}</h3>
            <p>{item.price} — {item.fitment}</p>
            <button>Edit</button> <button>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
