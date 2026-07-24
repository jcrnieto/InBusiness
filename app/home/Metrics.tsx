import { CheckCircle2, Award, Briefcase, ShieldCheck, BarChart3 } from "lucide-react";

export default function Metrics() {
  const metrics = [
    { value: "+2,000", label: "Tickets solucionados", icon: CheckCircle2, desc: "Soporte de alta precisión y respuesta rápida" },
    { value: "+10", label: "Años en experiencia CX", icon: Award, desc: "Trayectoria líder en transformación digital" },
    { value: "+15", label: "Proyectos culminados", icon: Briefcase, desc: "Implementaciones SAP & Cloud exitosas" },
    { value: "+20", label: "Consultores certificados", icon: ShieldCheck, desc: "Especialistas senior a tu disposición" },
  ];

  return (
    <section className="relative overflow-hidden bg-[#05070E] py-28 text-white border-t border-white/5">
      {/* Background Lighting */}
      <div className="pointer-events-none absolute right-1/4 bottom-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
            <BarChart3 className="h-3.5 w-3.5" />
            Datos que Hablan
          </span>
          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Resultados visibles para cada <span className="text-gradient-cyan">desafío de negocio.</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-300 sm:text-xl">
            Medimos el impacto con indicadores reales y optimizamos cada proceso con la máxima excelencia operativa.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-1.5 hover:border-cyan-500/40 hover:shadow-[0_0_35px_rgba(6,182,212,0.18)]"
              >
                <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-cyan-500/10 blur-xl transition duration-500 group-hover:bg-cyan-500/20" />

                <div>
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 ring-1 ring-cyan-500/30">
                    <Icon className="h-6 w-6" />
                  </div>

                  <p className="text-5xl font-black tracking-tight text-gradient-cyan">
                    {item.value}
                  </p>

                  <h3 className="mt-4 text-lg font-bold text-white group-hover:text-cyan-300 transition duration-300">
                    {item.label}
                  </h3>
                  
                  <p className="mt-2 text-xs leading-5 text-slate-400">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
