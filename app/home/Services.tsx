import { Users, Cpu, Sparkles, Layers, ArrowUpRight } from "lucide-react";

export default function Services() {
  return (
    <section id="soluciones" className="relative overflow-hidden bg-[#05070E] py-28 text-white border-t border-white/5">
      {/* Background Radial Glows */}
      <div className="pointer-events-none absolute left-1/4 top-10 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[130px]" />
      <div className="pointer-events-none absolute right-10 bottom-10 h-[350px] w-[350px] rounded-full bg-indigo-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
            <Sparkles className="h-3.5 w-3.5" />
            Soluciones de Vanguardia
          </span>
          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Potenciá tus sistemas con un <span className="text-gradient-cyan">diseño hiper-pulido.</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-300 sm:text-xl">
            Integraciones inteligentes, operaciones humanas de alto rendimiento y experiencias digitales modernas, claras y memorables.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {/* Card 1 - CX */}
          <article className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-1.5 hover:border-cyan-500/50 hover:shadow-[0_0_35px_rgba(6,182,212,0.2)]">
            <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-cyan-500/15 blur-2xl transition duration-500 group-hover:bg-cyan-500/25" />
            <div>
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 text-cyan-400 ring-1 ring-cyan-500/30 shadow-md">
                <Sparkles className="h-7 w-7" />
              </div>
              <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase">
                Customer Experience
              </span>
              <h3 className="mt-2 text-2xl font-bold text-white group-hover:text-cyan-300 transition duration-300">
                Experiencias que inspiran.
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-300">
                Construimos experiencias digitales inolvidables para que cada punto de contacto sea fluido, estético y orientado a la conversión de clientes.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
              <span>Ver aplicaciones CX</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </article>

          {/* Card 2 - HCM */}
          <article className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-1.5 hover:border-blue-500/50 hover:shadow-[0_0_35px_rgba(59,130,246,0.2)]">
            <div className="absolute -left-10 -bottom-10 h-36 w-36 rounded-full bg-blue-500/15 blur-2xl transition duration-500 group-hover:bg-blue-500/25" />
            <div>
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-500/20 to-indigo-500/20 text-blue-400 ring-1 ring-blue-500/30 shadow-md">
                <Users className="h-7 w-7" />
              </div>
              <span className="text-xs font-bold tracking-widest text-blue-400 uppercase">
                Human Capital Management
              </span>
              <h3 className="mt-2 text-2xl font-bold text-white group-hover:text-blue-300 transition duration-300">
                Gestión humana con diseño.
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-300">
                Simplificamos la gestión del talento con flujos digitales modernos, automatizados y centrados verdaderamente en la experiencia del colaborador.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400">
              <span>Explorar gestión HCM</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </article>

          {/* Card 3 - SuccessFactors */}
          <article className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-1.5 hover:border-emerald-500/50 hover:shadow-[0_0_35px_rgba(16,185,129,0.2)]">
            <div className="absolute right-0 top-1/2 h-36 w-36 -translate-y-1/2 rounded-full bg-emerald-500/15 blur-2xl transition duration-500 group-hover:bg-emerald-500/25" />
            <div>
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-emerald-500/20 to-teal-500/20 text-emerald-400 ring-1 ring-emerald-500/30 shadow-md">
                <Cpu className="h-7 w-7" />
              </div>
              <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase">
                SuccessFactors (SFSF)
              </span>
              <h3 className="mt-2 text-2xl font-bold text-white group-hover:text-emerald-300 transition duration-300">
                Operación empresarial inteligente.
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-300">
                Implementamos y optimizamos módulos de SuccessFactors para una visibilidad estratégica en tiempo real y una escalabilidad de negocio garantizada.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400">
              <span>Consultar SAP / SFSF</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
