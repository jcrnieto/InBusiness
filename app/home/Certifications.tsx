import { Award } from "lucide-react";

export default function Certifications() {
  return (
    <section id="certificaciones" className="relative overflow-hidden bg-[#05070E] py-28 text-white border-t border-white/5">
      {/* Background Lighting */}
      <div className="pointer-events-none absolute left-1/2 top-10 h-[400px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
            <Award className="h-3.5 w-3.5" />
            Certificaciones Oficiales
          </span>
          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Experiencia certificada en <span className="text-gradient-cyan">soluciones SAP.</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-300 sm:text-xl">
            Equipos consultores de nivel senior acreditados para garantizar implementaciones seguras y de estándar internacional.
          </p>
        </div>

        {/* Certificaciones SAP Grid (8 Cards) */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 p-0 backdrop-blur-xl shadow-[0_0_30px_rgba(6,182,212,0.12)] transition duration-500 hover:-translate-y-1.5 hover:border-cyan-500/40 hover:shadow-[0_0_40px_rgba(6,182,212,0.22)] w-full"
            >
              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-cyan-500/15 blur-2xl transition duration-500 group-hover:bg-cyan-500/25" />
              <img
                src="/certificaciones-sap/certificaciones.png"
                alt={`Certificación Oficial SAP ${index + 1}`}
                className="w-full h-auto block rounded-3xl object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
