export default function PartResultCard({ info }) {
  return (
    <div style={{ border:'1px solid #ddd', padding:'1rem', borderRadius:8, marginTop:'1rem', background:'#fff' }}>
      <h3>{info.name}</h3>
      <p><strong>Part #:</strong> {info.partNumber}</p>
      {info.desc && <p>{info.desc}</p>}
      <h4>Buy Online:</h4>
      <ul>
        {info.links.map(l => (
          <li key={l.name}><a href={l.url} target="_blank" rel="noreferrer">{l.name} – {l.price}</a></li>
        ))}
      </ul>
    </div>
  );
}
