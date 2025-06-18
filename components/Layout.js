export default function Layout({ children }) {
  return (
    <div className="max-w-md mx-auto px-4 py-6">
      <nav className="mb-6 text-center font-semibold">Caramba</nav>
      <main>{children}</main>
    </div>
  );
}
