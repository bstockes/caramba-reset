import Layout from '../components/Layout';

export default function MyGarage() {
  return (
    <Layout title="My Garage">
      <div className="max-w-lg mx-auto px-4 py-4">
        <h1 className="text-xl font-semibold mb-4">My Garage</h1>
        <div className="border rounded p-4 bg-white">
          <p className="text-sm">Your vehicle cards and info will be displayed here.</p>
        </div>
      </div>
    </Layout>
  );
}
