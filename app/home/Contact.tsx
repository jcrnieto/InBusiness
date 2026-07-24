'use client';

import { Mail, Phone, MapPin, Send, MessageSquare, Shield } from "lucide-react";

export default function Contact() {
  return (
    <section id="contacto" className="relative overflow-hidden bg-[#05070E] py-28 text-white border-t border-white/5">
      {/* Background Radial Glow */}
      <div className="pointer-events-none absolute left-1/4 bottom-10 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
          
          {/* Left Column - Contact Info */}
          <div className="flex flex-col justify-between space-y-8 rounded-[32px] border border-white/10 bg-slate-900/60 p-8 sm:p-10 backdrop-blur-xl lg:col-span-5 hover:border-cyan-500/30 transition duration-500">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
                <MessageSquare className="h-3.5 w-3.5" />
                Contacto Directo
              </span>

              <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                ¿Hablamos de tu <span className="text-gradient-cyan">próximo paso?</span>
              </h2>

              <p className="text-base leading-7 text-slate-300">
                Estamos listos para transformar la experiencia digital de tu empresa con consultoría senior en SAP, CX y diseño de alto rendimiento.
              </p>
            </div>

            <div className="space-y-6 pt-4">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 ring-1 ring-cyan-500/30">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Email Corporativo</p>
                  <a href="mailto:contact@inbusinesscx.com" className="mt-1 inline-block text-base font-semibold text-cyan-300 hover:text-cyan-200 transition">
                    contact@inbusinesscx.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 ring-1 ring-cyan-500/30">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Teléfono Directo</p>
                  <p className="mt-1 text-base font-semibold text-white">+55 (41) 9 8459-9810</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 ring-1 ring-cyan-500/30">
                  <Shield className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Registro Fiscal (CNPJ)</p>
                  <p className="mt-1 text-base font-semibold text-white">40.059.377/0001-30</p>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-xs font-semibold text-slate-300 hover:bg-cyan-500/10 hover:text-cyan-300 transition"
              >
                <Shield className="h-3.5 w-3.5 text-cyan-400" />
                <span>Aviso de Privacidad & Cumplimiento</span>
              </a>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="rounded-[32px] border border-white/10 bg-slate-900/60 p-8 sm:p-10 backdrop-blur-xl lg:col-span-7 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Nombre
                  <input
                    className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white placeholder-slate-500 outline-none ring-1 ring-transparent transition focus:border-cyan-400 focus:bg-slate-900 focus:ring-cyan-500/30"
                    placeholder="Tu nombre"
                  />
                </label>
                <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Apellido
                  <input
                    className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white placeholder-slate-500 outline-none ring-1 ring-transparent transition focus:border-cyan-400 focus:bg-slate-900 focus:ring-cyan-500/30"
                    placeholder="Tu apellido"
                  />
                </label>
              </div>

              <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-wider text-slate-300">
                Email Corporativo *
                <input
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white placeholder-slate-500 outline-none ring-1 ring-transparent transition focus:border-cyan-400 focus:bg-slate-900 focus:ring-cyan-500/30"
                  placeholder="ejemplo@empresa.com"
                  type="email"
                />
              </label>

              <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-wider text-slate-300">
                Mensaje o Requerimiento
                <textarea
                  className="min-h-[140px] rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white placeholder-slate-500 outline-none ring-1 ring-transparent transition focus:border-cyan-400 focus:bg-slate-900 focus:ring-cyan-500/30"
                  placeholder="Cuéntanos brevemente sobre tu proyecto o necesidad..."
                />
              </label>

              <button
                type="submit"
                className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 px-8 py-4 text-base font-bold text-white shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all duration-300 hover:shadow-[0_0_45px_rgba(6,182,212,0.5)] hover:scale-[1.01]"
              >
                <span>Enviar Mensaje</span>
                <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
