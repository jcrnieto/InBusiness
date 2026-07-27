import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#030408] text-slate-400 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-10 lg:px-16">
        <div className="flex flex-col items-center gap-8 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          
          {/* Brand */}
          <a href="#inicio" className="flex items-center">
            <Image
              src="/logo-inbusiness.png"
              alt="InBusiness"
              width={150}
              height={65}
              className="h-14 w-auto object-contain"
            />
          </a>

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
