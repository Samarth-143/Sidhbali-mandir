export default function PageShell({ children }) {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <main className="min-w-0">{children}</main>
    </div>
  );
}
