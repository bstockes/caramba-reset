
import { useState } from 'react';
import CameraCapture from '../components/CameraCapture';
import PartResultCard from '../components/PartResultCard';

export default function AskPage() {
  const [showCamera, setShowCamera] = useState(false);
  const [scanMode, setScanMode] = useState(null);
  const [partInfo, setPartInfo] = useState(null);

  const handleCapture = (imageData) => {
    setShowCamera(false);
    if (scanMode === 'barcode') {
      setPartInfo({
        type: 'Barcode',
        partNumber: 'BOSCH-0986AF5091',
        name: 'Cabin Air Filter',
        links: [
          { name: 'Amazon', url: 'https://www.amazon.com', price: '$19.95' },
          { name: 'AutoZone', url: 'https://www.autozone.com', price: '$22.99' },
          { name: 'OEMVolkswagen.com', url: 'https://www.oemvolkswagen.com', price: '$27.50' }
        ]
      });
    } else {
      setPartInfo({
        type: 'Photo',
        partNumber: 'BOSCH-0986AF5091',
        name: 'Cabin Air Filter',
        desc: 'Compatible with 2021 VW Tiguan',
        links: [
          { name: 'Amazon', url: 'https://www.amazon.com', price: '$19.95' },
          { name: 'AutoZone', url: 'https://www.autozone.com', price: '$22.99' }
        ]
      });
    }
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Ask Carly</h1>
      <div style={{ marginBottom: '1rem' }}>
        <button onClick={() => { setScanMode('barcode'); setShowCamera(true); }}>
          📷 Scan Barcode
        </button>
        <button onClick={() => { setScanMode('photo'); setShowCamera(true); }} style={{ marginLeft: '1rem' }}>
          📸 Take Photo of Part
        </button>
      </div>
      {showCamera && (
        <CameraCapture onCapture={handleCapture} onCancel={() => setShowCamera(false)} />
      )}
      {partInfo && (
        <PartResultCard info={partInfo} />
      )}
    </div>
  );
}
