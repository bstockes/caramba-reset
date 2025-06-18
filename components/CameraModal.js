export default function CameraModal({ onSelect, onClose }) {
  return (
    <div style={{ position:'fixed', inset:0, background:'rgba(0,0,0,.65)', display:'flex', alignItems:'center', justifyContent:'center', zIndex:1000 }}>
      <div style={{ background:'#fff', padding:24, borderRadius:12, width:280, boxShadow:'0 4px 12px rgba(0,0,0,.2)', textAlign:'center' }}>
        <h3 style={{ marginBottom:16 }}>Choose scan mode</h3>
        <button onClick={()=>onSelect('barcode')} style={{ padding:'8px 16px', margin:8 }}>📦 Barcode</button>
        <button onClick={()=>onSelect('photo')}   style={{ padding:'8px 16px', margin:8 }}>📸 Part Photo</button>
        <br/>
        <button onClick={onClose} style={{ marginTop:12 }}>Cancel</button>
      </div>
    </div>
  );
}