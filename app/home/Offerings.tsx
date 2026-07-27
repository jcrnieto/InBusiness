import { TrendingUp, UserCheck, ChevronRight, CheckCircle2, Workflow } from "lucide-react";

export default function Offerings() {
  return (
    <section id="procesos" className="relative overflow-hidden bg-[#05070E] py-28 text-white border-t border-white/5">
      {/* Background Lighting */}
      <div className="pointer-events-none absolute left-1/3 top-1/4 h-[500px] w-[500px] rounded-full bg-cyan-600/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
            <Workflow className="h-3.5 w-3.5" />
            Soluciones de Proceso
          </span>
          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Transformá tus procesos en una <span className="text-gradient-cyan">ventaja competitiva.</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-300 sm:text-xl">
            Dos universos estratégicos, un solo foco: conectar cada paso clave de tu negocio con fluidez y precisión.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Lead to Cash Card */}
          <div className="modern-card group relative flex flex-col justify-between overflow-hidden rounded-[32px] border border-white/10 bg-slate-900/50 p-8 sm:p-10 backdrop-blur-xl transition duration-500 hover:border-cyan-500/40 hover:shadow-[0_0_40px_rgba(6,182,212,0.18)]">
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-500/15 blur-3xl transition duration-500 group-hover:bg-cyan-500/25" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 ring-1 ring-cyan-500/30">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <span className="rounded-full border border-cyan-500/30 bg-cyan-950/50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-cyan-300">
                  Lead to Cash
                </span>
              </div>

              <h3 className="mt-6 text-3xl font-extrabold text-white group-hover:text-cyan-300 transition duration-300">
                Impulsá tu CRM con procesos conectados
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-300">
                Aceleramos tu embudo comercial unificando el contacto inicial, las propuestas y el cierre de ventas en un flujo sin fricciones.
              </p>

              <div className="mt-8 space-y-3">
                {[
                  { step: "01", name: "Contacto a Lead", desc: "Captura inteligente y cualificación" },
                  { step: "02", name: "Lead a Oportunidad", desc: "Segmentación y nutrición de prospectos" },
                  { step: "03", name: "Oportunidad a Oferta", desc: "Cotización automatizada e historial" },
                  { step: "04", name: "Oferta a Pedido", desc: "Aprobación veloz y orden comercial" },
                  { step: "05", name: "Pedido a Cash", desc: "Facturación integrada y cobranza" },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/[0.03] px-5 py-3.5 text-sm transition duration-300 hover:border-cyan-500/30 hover:bg-cyan-500/10"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-semibold text-cyan-400">{item.step}</span>
                      <span className="font-semibold text-slate-200">{item.name}</span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-cyan-400/60" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* HCM / SFSF Card */}
          <div className="modern-card group relative flex flex-col justify-between overflow-hidden rounded-[32px] border border-white/10 bg-slate-900/50 p-8 sm:p-10 backdrop-blur-xl transition duration-500 hover:border-blue-500/40 hover:shadow-[0_0_40px_rgba(59,130,246,0.18)]">
            <div className="pointer-events-none absolute -left-16 -bottom-16 h-48 w-48 rounded-full bg-blue-500/15 blur-3xl transition duration-500 group-hover:bg-blue-500/25" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400 ring-1 ring-blue-500/30">
                  <UserCheck className="h-6 w-6" />
                </div>
                <span className="rounded-full border border-blue-500/30 bg-blue-950/50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-300">
                  HCM / SuccessFactors
                </span>
              </div>

              <h3 className="mt-6 text-3xl font-extrabold text-white group-hover:text-blue-300 transition duration-300">
                Llevá la nómina y el talento a otro nivel
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-300">
                Maximizá el desarrollo de tus colaboradores mediante un control transparente en cada etapa de crecimiento profesional.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Gestión del talento",
                  "Reclutamiento y selección",
                  "Formación y desarrollo",
                  "Evaluaciones de desempeño",
                  "Gestión de compensaciones",
                  "Planificación de sucesión",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5 rounded-2xl border border-white/5 bg-white/[0.03] px-4 py-3.5 text-xs font-semibold text-slate-200 transition duration-300 hover:border-blue-500/30 hover:bg-blue-500/10"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
