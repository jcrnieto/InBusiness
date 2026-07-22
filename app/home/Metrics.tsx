export default function Metrics() {
  return (
    <section className="bg-white text-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">
            Datos que hablan
          </p>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Resultados visibles para cada proyecto.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600 sm:text-xl">
            Mide el impacto con números claros, optimiza cada área y comunicalo con una estética moderna y profesional.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { value: "+2000", label: "Tickets solucionados" },
            { value: "+10", label: "Años de experiencia en CX" },
            { value: "+15", label: "Proyectos culminados" },
            { value: "+20", label: "Consultores certificados" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-[28px] border border-slate-200/80 bg-slate-50 p-8 shadow-[0_24px_60px_-30px_rgba(15,23,42,0.18)] transition hover:-translate-y-1 hover:shadow-[0_30px_90px_-35px_rgba(15,23,42,0.22)]"
            >
              <p className="text-5xl font-semibold tracking-tight text-cyan-600 sm:text-6xl">
                {item.value}
              </p>
              <p className="mt-4 text-base leading-7 text-slate-600">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
