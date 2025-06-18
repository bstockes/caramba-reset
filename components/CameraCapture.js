
import { useEffect, useRef, useState } from 'react';

export default function CameraCapture({ onCapture, onCancel }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [stream, setStream] = useState(null);

  useEffect(() => {
    const enableCamera = async () => {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = mediaStream;
        setStream(mediaStream);
      } catch (err) {
        console.error("Camera access denied", err);
        onCancel();
      }
    };
    enableCamera();

    return () => {
      stream?.getTracks().forEach(track => track.stop());
    };
  }, []);

  const capture = () => {
    const context = canvasRef.current.getContext('2d');
    context.drawImage(videoRef.current, 0, 0, 300, 150);
    const imageData = canvasRef.current.toDataURL('image/png');
    onCapture(imageData);
  };

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
      background: '#000', display: 'flex', flexDirection: 'column',
      justifyContent: 'center', alignItems: 'center', zIndex: 1000
    }}>
      <video ref={videoRef} autoPlay style={{ width: '90%', maxWidth: 400 }} />
      <canvas ref={canvasRef} width="300" height="150" style={{ display: 'none' }} />
      <div style={{ marginTop: 20 }}>
        <button onClick={capture} style={{ marginRight: 10 }}>📸 Take Photo</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
}
