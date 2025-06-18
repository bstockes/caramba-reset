
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Caramba | AI Vehicle Assistant</title>
      </Head>
      <main style={{ fontFamily: 'Arial, sans-serif', padding: '2rem' }}>
        <h1>🚗 Caramba</h1>
        <p>Hello! I'm Carly, your AI-powered vehicle assistant.</p>
        <ul>
          <li>📸 Upload your VIN or part barcode</li>
          <li>🧠 Ask Carly anything about your vehicle</li>
          <li>📋 View your vehicle stats and upcoming maintenance</li>
          <li>🛒 Find the right parts and suppliers</li>
        </ul>
        <p>This is a working prototype placeholder. UI features coming next!</p>
      </main>
    </>
  );
}
