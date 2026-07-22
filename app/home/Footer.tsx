export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-10 lg:px-16">
        <div className="flex flex-col items-center gap-10 border-t border-white/10 pt-8 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-300 ring-1 ring-cyan-300/20">
              <svg viewBox="0 0 64 64" className="h-8 w-8 fill-current" aria-hidden="true">
                <path d="M19 18h6v28h-6z" />
                <path d="M31 18h6v18h-6z" />
                <path d="M43 18h6v28h-6z" />
                <path d="M27 34h10v6H27z" />
              </svg>
            </div>
            <div>
              <p className="text-lg font-semibold text-white">INbusiness</p>
              <p className="text-sm text-slate-400">Customer Experience</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400 sm:justify-center">
            <a href="#contacto" className="transition hover:text-white">
              Contacto
            </a>
            <a href="#" className="transition hover:text-white">
              Términos
            </a>
            <a href="#" className="transition hover:text-white">
              Privacidad
            </a>
          </div>

          <div className="text-sm text-slate-400">
            <p>© {new Date().getFullYear()} INbusiness</p>
            <p>Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
