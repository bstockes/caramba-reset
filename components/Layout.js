import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ children, title = 'Caramba' }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Head>
        <title>{title}</title>
      </Head>
      <nav className="bg-white shadow p-4">
        <div className="max-w-lg mx-auto flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/ask">Ask Carly</Link>
          <Link href="/mygarage">My Garage</Link>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  );
}
