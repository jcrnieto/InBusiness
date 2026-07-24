import { ShieldCheck, Award } from "lucide-react";

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

        <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {certifications.map((cert) => (
            <article
              key={cert.title}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-1.5 hover:border-cyan-500/40 hover:shadow-[0_0_35px_rgba(6,182,212,0.18)]"
            >
              <div>
                <div className="flex items-center gap-2.5">
                  <span className="inline-flex h-8 items-center gap-1.5 rounded-full bg-cyan-500/10 px-3 text-xs font-bold uppercase tracking-wider text-cyan-300 ring-1 ring-cyan-500/30">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    SAP
                  </span>
                  <span className="text-xs font-medium uppercase tracking-widest text-slate-400">
                    {cert.label}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold text-white group-hover:text-cyan-300 transition duration-300 leading-snug">
                  {cert.title}
                </h3>
              </div>

              <p className="mt-6 text-xs font-medium tracking-wider uppercase text-slate-400">
                {cert.subtitle}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
