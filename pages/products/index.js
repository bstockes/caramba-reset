
export default function Products() {
  const parts = [
    { id: 'brake123', name: 'Brake Pads', price: '$59.99' },
    { id: 'oil456', name: '0W-20 Synthetic Oil - 5qt', price: '$34.99' },
    { id: 'air789', name: 'Cabin Air Filter', price: '$19.99' }
  ];

  return (
    <div style={{ padding: 20 }}>
      <h2>Browse Products</h2>
      <div style={{ display: 'flex', gap: 20 }}>
        {parts.map(p => (
          <div key={p.id} style={{ border: '1px solid #ccc', padding: 10, borderRadius: 8 }}>
            <h3>{p.name}</h3>
            <p>{p.price}</p>
            <button onClick={() => window.location.href = '/products/' + p.id}>View</button>
          </div>
        ))}
      </div>
    </div>
  );
}
