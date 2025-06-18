
import { useRouter } from 'next/router';

export default function ProductDetail() {
  const { query } = useRouter();
  return (
    <div style={{ padding: 20 }}>
      <h2>Product Detail: {query.partId}</h2>
      <p>Price: $XX.XX</p>
      <p>Fitment: 2021 VW Tiguan</p>
      <p>Compatible Models: Tiguan 2020–2023</p>
    </div>
  );
}
