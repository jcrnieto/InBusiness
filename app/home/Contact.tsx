export default function Contact() {
  return (
    <section id="contacto" className="bg-slate-950 text-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-8 rounded-[32px] border border-white/10 bg-white/5 p-10 shadow-[0_40px_120px_-60px_rgba(14,165,233,0.35)] backdrop-blur-xl">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.36em] text-cyan-300">
                Contact
              </p>
              <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Let&apos;s Talk!
              </h2>
              <p className="max-w-xl text-base leading-8 text-slate-300">
                Estamos listos para acompañar tu crecimiento con soluciones SAP, experiencia en CX y operaciones inteligentes.
              </p>
            </div>

            <div className="space-y-4 text-slate-200">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">CNPJ</p>
                <p className="mt-1 text-lg font-semibold text-white">40.059.377/0001-30</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Email</p>
                <a href="mailto:contact@inbusinesscx.com" className="mt-1 inline-block text-lg font-semibold text-cyan-300 hover:text-cyan-200">
                  contact@inbusinesscx.com
                </a>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Tel</p>
                <p className="mt-1 text-lg font-semibold text-white">+55 (41) 9 8459-9810</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a href="#" className="inline-flex items-center rounded-full border border-white/10 bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400/15">
                Aviso de privacidad
              </a>
              <div className="flex items-center gap-3">
                <a href="#" className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-900/70 text-white shadow-[0_10px_30px_-20px_rgba(0,0,0,0.6)] transition hover:bg-slate-900/90">
                  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.1-.472-.149-.672.15-.198.297-.767.967-.94 1.165-.173.198-.347.223-.644.075-1.758-.867-2.908-1.544-4.068-3.104-.31-.53.31-.49.888-1.623.099-.198.05-.371-.025-.52-.075-.149-.672-1.611-.92-2.206-.242-.579-.487-.5-.672-.51-.173-.01-.371-.012-.57-.012-.198 0-.52.074-.792.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.063 2.875 1.213 3.074.148.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.414-.074-.118-.272-.198-.57-.347z" />
                    <path d="M20.52 3.48A11.951 11.951 0 0 0 12 0C5.373 0 0 5.373 0 12c0 2.113.553 4.145 1.6 5.95L0 24l6.263-1.64A11.947 11.947 0 0 0 12 24c6.627 0 12-5.373 12-12 0-3.205-1.25-6.217-3.48-8.52zM12 22.08c-1.938 0-3.75-.516-5.343-1.482l-.382-.227-3.716.976.99-3.615-.248-.372A9.97 9.97 0 0 1 2.04 12C2.04 6.074 6.074 2.04 12 2.04c2.574 0 4.984.999 6.808 2.82A9.567 9.567 0 0 1 22 12c0 2.512-.984 4.873-2.792 6.68A9.565 9.565 0 0 1 12 22.08z" />
                  </svg>
                </a>
                <a href="#" className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-900/70 text-white shadow-[0_10px_30px_-20px_rgba(0,0,0,0.6)] transition hover:bg-slate-900/90">
                  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.039-1.851-3.039-1.852 0-2.136 1.445-2.136 2.939v5.669H9.349V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.602 0 4.267 2.371 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.069-.927-2.069-2.069 0-1.141.925-2.069 2.069-2.069 1.141 0 2.069.928 2.069 2.069 0 1.142-.928 2.069-2.069 2.069zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                  </svg>
                </a>
                <a href="#" className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-900/70 text-white shadow-[0_10px_30px_-20px_rgba(0,0,0,0.6)] transition hover:bg-slate-900/90">
                  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
                    <path d="M23.498 6.186a2.813 2.813 0 0 0-1.977-1.977C19.619 3.6 12 3.6 12 3.6s-7.62 0-9.52.61A2.814 2.814 0 0 0 .503 6.186 29.37 29.37 0 0 0 0 12a29.37 29.37 0 0 0 .503 5.814 2.814 2.814 0 0 0 1.977 1.977c1.9.61 9.52.61 9.52.61s7.62 0 9.52-.61a2.814 2.814 0 0 0 1.977-1.977A29.369 29.369 0 0 0 24 12a29.37 29.37 0 0 0-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-slate-900/80 p-10 shadow-[0_40px_120px_-60px_rgba(0,0,0,0.45)] backdrop-blur-xl">
            <form className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="flex flex-col gap-3 text-sm text-slate-300">
                  Name
                  <input className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white outline-none ring-1 ring-transparent transition focus:border-cyan-300 focus:ring-cyan-300/30" placeholder="John" />
                </label>
                <label className="flex flex-col gap-3 text-sm text-slate-300">
                  Last Name
                  <input className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white outline-none ring-1 ring-transparent transition focus:border-cyan-300 focus:ring-cyan-300/30" placeholder="Doe" />
                </label>
              </div>

              <label className="flex flex-col gap-3 text-sm text-slate-300">
                Email *
                <input className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white outline-none ring-1 ring-transparent transition focus:border-cyan-300 focus:ring-cyan-300/30" placeholder="contact@company.com" type="email" />
              </label>

              <label className="flex flex-col gap-3 text-sm text-slate-300">
                Message
                <textarea className="min-h-[160px] rounded-2xl border border-white/10 bg-white/5 p-4 text-white outline-none ring-1 ring-transparent transition focus:border-cyan-300 focus:ring-cyan-300/30" placeholder="Enter your message here" />
              </label>

              <button className="inline-flex w-full items-center justify-center rounded-full bg-cyan-400 px-8 py-4 text-base font-semibold text-slate-950 transition hover:bg-cyan-300">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
