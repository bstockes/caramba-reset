
import { useRouter } from 'next/router';

export default function ShopProfile() {
  const { query } = useRouter();
  return (
    <div style={{ padding: 20 }}>
      <h2>{query.shopName} Profile</h2>
      <p>This is a public profile for {query.shopName}.</p>
      <ul>
        <li>Brake Pads - $59.99</li>
        <li>Oil Filter - $15.49</li>
      </ul>
    </div>
  );
}
