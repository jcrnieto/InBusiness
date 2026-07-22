export default function Carousels() {
  const items = [
    "Hidrocarburos",
    "Retail",
    "Telecomunicaciones",
    "Farmacéutica",
    "High Tech",
    "Construcción",
    "Metalurgia",
    "SAP SuccessFactors",
    "Customer Experience",
    "Lead to Cash",
  ];

  return (
    <section id="carrusel" className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(96,165,250,0.08),transparent_30%)]" />
          <div className="relative z-10 overflow-hidden">
            <div className="flex animate-marquee gap-4 whitespace-nowrap py-6">
              {Array.from({ length: 3 }).flatMap((_, group) =>
                items.map((label) => (
                  <div
                    key={`${group}-${label}`}
                    className="min-w-[180px] rounded-full bg-white/5 px-5 py-3 text-center text-base font-semibold tracking-[0.02em] text-slate-100 shadow-[0_12px_30px_-18px_rgba(255,255,255,0.35)] backdrop-blur-sm"
                  >
                    {label}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
