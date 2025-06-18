
import { useEffect } from 'react';

export default function BarcodeScanner({ onScan, onCancel }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      // Simulate a scanned barcode
      onScan('BP1234');
    }, 1500);

    return () => clearTimeout(timeout);
  }, [onScan]);

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
      background: 'rgba(0,0,0,0.8)', display: 'flex',
      flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      color: 'white', zIndex: 9999
    }}>
      <p>📷 Scanning barcode...</p>
      <button onClick={onCancel} style={{ marginTop: 20 }}>Cancel</button>
    </div>
  );
}
