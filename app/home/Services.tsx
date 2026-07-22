export default function Services() {
  return (
    <section id="soluciones" className="relative overflow-hidden bg-white text-slate-950">
      <div className="absolute inset-x-0 top-0 h-56 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.12),_transparent_45%),radial-gradient(circle_at_top_right,_rgba(148,163,184,0.08),_transparent_35%)]" />
      <div className="absolute inset-x-0 bottom-0 h-72 bg-[radial-gradient(circle_at_bottom_right,_rgba(20,184,166,0.08),_transparent_40%),radial-gradient(circle_at_bottom_left,_rgba(148,163,184,0.06),_transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-600">
            Soluciones alineadas a tu marca
          </p>
          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Potenciá tus sistemas con un diseño mucho más pulido.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600 sm:text-xl">
            Integraciones inteligentes, operaciones humanas y experiencias digitales que se sienten modernas, claras y memorables.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          <article className="group relative overflow-hidden rounded-[32px] border border-slate-200/40 bg-slate-50 p-8 shadow-[0_24px_60px_-30px_rgba(15,23,42,0.12)] transition duration-300 hover:-translate-y-1 hover:border-cyan-200/40 hover:bg-slate-100">
            <div className="absolute right-0 top-0 h-32 w-32 translate-x-1/4 -translate-y-1/4 rounded-full bg-cyan-100 blur-3xl" />
            <div className="relative z-10">
              <div className="mb-5 inline-flex items-center justify-center rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold uppercase tracking-[0.32em] text-cyan-700 ring-1 ring-cyan-300/20">
                CX
              </div>
              <h3 className="text-2xl font-semibold text-slate-950">Experiencias que inspiran.</h3>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Construimos experiencias digitales para que cada interacción sea memorable, coherente y conectada con tu cliente ideal.
              </p>
            </div>
          </article>

          <article className="group relative overflow-hidden rounded-[32px] border border-slate-200/40 bg-slate-50 p-8 shadow-[0_24px_60px_-30px_rgba(15,23,42,0.12)] transition duration-300 hover:-translate-y-1 hover:border-sky-300/40 hover:bg-slate-100">
            <div className="absolute left-0 bottom-0 h-32 w-32 -translate-x-1/4 translate-y-1/4 rounded-full bg-sky-100 blur-3xl" />
            <div className="relative z-10">
              <div className="mb-5 inline-flex items-center justify-center rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold uppercase tracking-[0.32em] text-sky-700 ring-1 ring-sky-300/20">
                HCM
              </div>
              <h3 className="text-2xl font-semibold text-slate-950">Gestión humana con diseño.</h3>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Simplificamos tu operación de talento con flujos digitales modernos, medibles y centrados en el colaborador.
              </p>
            </div>
          </article>

          <article className="group relative overflow-hidden rounded-[32px] border border-slate-200/40 bg-slate-50 p-8 shadow-[0_24px_60px_-30px_rgba(15,23,42,0.12)] transition duration-300 hover:-translate-y-1 hover:border-cyan-200/40 hover:bg-slate-100">
            <div className="absolute right-3 top-1/2 h-28 w-28 translate-y-[-50%] rounded-full bg-cyan-100 blur-3xl" />
            <div className="relative z-10">
              <div className="mb-5 inline-flex items-center justify-center rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold uppercase tracking-[0.32em] text-cyan-700 ring-1 ring-cyan-300/20">
                SFSF
              </div>
              <h3 className="text-2xl font-semibold text-slate-950">Operación empresarial más inteligente.</h3>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Implementamos y optimizamos SuccessFactors para que tu operación sea más visible, eficiente y preparada para crecer.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
