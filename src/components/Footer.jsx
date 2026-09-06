export default function Footer() {
  return (
    <footer className="page-container flex flex-col gap-3 border-t border-[var(--line)] py-6 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
      <p>&copy; {new Date().getFullYear()} Marvin Rosanto</p>
      <a href="#home" className="text-[var(--accent)] hover:text-[var(--ink)]">Back to top &uarr;</a>
    </footer>
  );
}
