export default function Offerings() {
  return (
    <section id="procesos" className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
            Soluciones de proceso
          </p>
          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Transformá tus procesos con una experiencia más fluida.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-300 sm:text-xl">
            Dos universos de valor, un solo foco: convertir cada paso del negocio en una ventaja competitiva.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-[32px] border border-cyan-300/20 bg-slate-900/70 p-8 shadow-[0_30px_80px_-40px_rgba(14,165,233,0.45)]">
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="absolute left-0 top-0 h-20 w-20 rounded-full bg-cyan-400/10 blur-2xl" />
            <div className="relative z-10">
              <span className="inline-flex rounded-full bg-cyan-300/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-200 ring-1 ring-cyan-300/20">
                Lead to Cash
              </span>
              <h3 className="mt-8 text-3xl font-semibold text-white">Impulsá tu CRM con procesos conectados</h3>
              <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">
                Aceleramos el flujo comercial con procesos claros, ventas conectadas y servicios que acompañan cada etapa del ciclo.
              </p>

              <div className="mt-10 space-y-4">
                {[
                  "Contacto a Lead",
                  "Lead a oportunidad",
                  "Oportunidad a oferta",
                  "Oferta a pedido",
                  "Pedido a Cash",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-slate-100 transition hover:bg-cyan-400/10"
                  >
                    <span>{item}</span>
                    <span className="rounded-full bg-cyan-300/15 px-3 py-1 text-xs uppercase tracking-[0.18em] text-cyan-200">
                      next
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[32px] border border-cyan-300/20 bg-slate-900/70 p-8 shadow-[0_30px_80px_-40px_rgba(14,165,233,0.45)]">
            <div className="absolute -left-16 -bottom-16 h-40 w-40 rounded-full bg-cyan-300/10 blur-3xl" />
            <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-slate-200/5 blur-2xl" />
            <div className="relative z-10">
              <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-200 ring-1 ring-cyan-300/20">
                HCM / SFSF
              </span>
              <h3 className="mt-8 text-3xl font-semibold text-white">Llevá la nómina y el talento a otro nivel</h3>
              <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">
                Optimizamos el talento y la operación con un enfoque moderno y control total de cada ciclo de desarrollo y compensación.
              </p>

              <div className="mt-10 grid gap-4">
                {[
                  "Gestión del talento",
                  "Reclutamiento y selección",
                  "Formación y desarrollo",
                  "Evaluaciones de desempeño",
                  "Gestión de compensaciones",
                  "Gestión de sucesión y planificación",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-3xl border border-white/10 bg-slate-900/70 px-5 py-4 text-sm text-slate-100 transition hover:border-cyan-300/30 hover:bg-cyan-400/10"
                  >
                    {item}
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
