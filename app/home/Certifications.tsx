const certifications = [
  {
    title: "SAP SuccessFactors Performance and Goals",
    subtitle: "Implementation Consultant",
    label: "Certified Associate",
  },
  {
    title: "SAP SuccessFactors Employee Central Core",
    subtitle: "Implementation Consultant",
    label: "Certified Associate",
  },
  {
    title: "SAP SuccessFactors Customer Engagement",
    subtitle: "Implementation Consultant",
    label: "Certified Associate",
  },
  {
    title: "SAP SuccessFactors Cloud Version 2",
    subtitle: "Implementation Consultant",
    label: "Certified Associate",
  },
  {
    title: "SAP Service Cloud Version 2",
    subtitle: "Implementation Consultant",
    label: "Certified Associate",
  },
  {
    title: "SAP Customer Data Cloud",
    subtitle: "Implementation Consultant",
    label: "Certified Associate",
  },
];

export default function Certifications() {
  return (
    <section id="certificaciones" className="bg-slate-100 text-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-700">
            Certificaciones
          </p>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Experiencia certificada en soluciones SAP.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600 sm:text-xl">
            Contamos con equipos especializados y certificados que aseguran implementaciones confiables y modernas.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {certifications.map((cert) => (
            <article key={cert.title} className="rounded-[28px] border border-slate-200/80 bg-white p-8 shadow-[0_20px_60px_-25px_rgba(15,23,42,0.12)] transition hover:-translate-y-1 hover:shadow-[0_24px_80px_-25px_rgba(15,23,42,0.18)]">
              <div className="flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-cyan-700">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-cyan-100 text-cyan-800">SAP</span>
                <span>{cert.label}</span>
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-slate-950 leading-tight">
                {cert.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-600">
                {cert.subtitle}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
