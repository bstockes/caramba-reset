
export default function PartResultCard({ info }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: 8,
      padding: '1rem',
      marginTop: '1rem',
      background: '#fff'
    }}>
      <h3>{info.name}</h3>
      <p><strong>Part #:</strong> {info.partNumber}</p>
      {info.desc && <p>{info.desc}</p>}
      <h4>Buy Online:</h4>
      <ul>
        {info.links.map(link => (
          <li key={link.name}>
            <a href={link.url} target="_blank" rel="noreferrer">{link.name} – {link.price}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
