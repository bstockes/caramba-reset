import { useEffect, useRef, useState } from 'react';

export default function CameraCapture({ onCapture, onCancel }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [stream, setStream] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const media = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = media;
        setStream(media);
      } catch (e) {
        alert('Camera access denied');
        onCancel();
      }
    })();
    return () => stream?.getTracks().forEach(t => t.stop());
  }, []);

  const snap = () => {
    const ctx = canvasRef.current.getContext('2d');
    ctx.drawImage(videoRef.current, 0, 0, 320, 160);
    onCapture(canvasRef.current.toDataURL('image/png'));
  };

  return (
    <div style={{ position:'fixed', inset:0, background:'#000a', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', zIndex:1000 }}>
      <video ref={videoRef} autoPlay style={{ width:'90%', maxWidth:400 }} />
      <canvas ref={canvasRef} width="320" height="160" style={{display:'none'}} />
      <div style={{ marginTop:16 }}>
        <button onClick={snap}>📸 Capture</button>
        <button onClick={onCancel} style={{marginLeft:8}}>Cancel</button>
      </div>
    </div>
  );
}
