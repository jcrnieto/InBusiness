export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#030408] text-slate-400 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-10 lg:px-16">
        <div className="flex flex-col items-center gap-8 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 text-white font-bold text-sm shadow-md ring-1 ring-white/20">
              IB
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-white">InBusiness</p>
              <p className="text-[10px] tracking-wider text-cyan-400 uppercase">Customer Experience & SAP Consulting</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-xs font-semibold uppercase tracking-wider text-slate-400">
            <a href="#inicio" className="transition hover:text-cyan-400">
              Inicio
            </a>
            <a href="#soluciones" className="transition hover:text-cyan-400">
              Soluciones
            </a>
            <a href="#procesos" className="transition hover:text-cyan-400">
              Procesos
            </a>
            <a href="#certificaciones" className="transition hover:text-cyan-400">
              Certificaciones
            </a>
            <a href="#contacto" className="transition hover:text-cyan-400">
              Contacto
            </a>
          </div>

          {/* Copyright */}
          <div className="text-xs text-slate-500">
            <p>© {new Date().getFullYear()} InBusiness CX. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
