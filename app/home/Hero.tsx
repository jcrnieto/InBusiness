'use client';

import Image from "next/image";
import { useState } from "react";
import { ArrowRight, Sparkles, Menu, X, ChevronRight } from "lucide-react";

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative flex min-h-screen w-full flex-col justify-between overflow-hidden bg-[#05070E]">
      {/* Background Video & Overlays */}
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-65"
        src="/video-inbusiness.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#05070E]/35 via-[#05070E]/25 to-[#05070E]/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#05070E]/70 via-[#05070E]/20 to-transparent" />
      
      {/* Ambient Lighting Gradients */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-gradient-to-tr from-cyan-500/20 via-sky-600/15 to-indigo-600/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[500px] rounded-full bg-cyan-500/10 blur-[100px]" />

      <div className="relative z-20 flex w-full flex-col">
        {/* Glass Navigation Header */}
        <header className="sticky top-0 z-40 w-full bg-transparent">
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 sm:px-10 lg:px-16">
            <a href="#inicio" className="flex items-center">
              <Image
                src="/logo-inbusiness.png"
                alt="InBusiness"
                width={150}
                height={65}
                priority
                className="h-18 w-auto object-contain"
              />
            </a>

            <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
              <a href="#inicio" className="transition hover:text-cyan-400">
                Inicio
              </a>
              <a href="#soluciones" className="transition hover:text-cyan-400">
                Soluciones
              </a>
              <a href="#procesos" className="transition hover:text-cyan-400">
                Procesos
              </a>
              <a href="#contacto" className="transition hover:text-cyan-400">
                Contacto
              </a>
            </nav>

            <div className="hidden items-center gap-4 md:flex">
              <a
                href="#contacto"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-cyan-500 hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] ring-1 ring-white/15"
              >
                <span>Hablemos</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>

            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              className="inline-flex h-10 w-10 items-center justify-center text-white transition hover:text-cyan-400 md:hidden"
              aria-label="Abrir menú"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </header>

        {/* Mobile Navigation Modal */}
        {open && (
          <div className="fixed inset-0 z-50 overflow-hidden bg-[#05070E]/95 backdrop-blur-2xl transition duration-300 md:hidden">
            <div className="relative mx-auto flex h-full max-w-3xl flex-col px-6 py-8">
              <div className="flex items-center justify-between">
                <a href="#inicio" onClick={() => setOpen(false)} className="flex items-center">
                  <Image
                    src="/logo-inbusiness.png"
                    alt="InBusiness"
                    width={136}
                    height={59}
                    priority
                    className="h-12 w-auto object-contain"
                  />
                </a>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="flex h-10 w-10 items-center justify-center text-white transition hover:text-cyan-400"
                  aria-label="Cerrar menú"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="mt-20 flex flex-1 flex-col items-center justify-center gap-8 text-center">
                <a
                  href="#inicio"
                  onClick={() => setOpen(false)}
                  className="text-2xl font-bold uppercase tracking-widest text-slate-100 hover:text-cyan-400"
                >
                  Inicio
                </a>
                <a
                  href="#soluciones"
                  onClick={() => setOpen(false)}
                  className="text-2xl font-bold uppercase tracking-widest text-slate-100 hover:text-cyan-400"
                >
                  Soluciones
                </a>
                <a
                  href="#procesos"
                  onClick={() => setOpen(false)}
                  className="text-2xl font-bold uppercase tracking-widest text-slate-100 hover:text-cyan-400"
                >
                  Procesos
                </a>
                <a
                  href="#contacto"
                  onClick={() => setOpen(false)}
                  className="text-2xl font-bold uppercase tracking-widest text-slate-100 hover:text-cyan-400"
                >
                  Contacto
                </a>
              </div>

              <div className="mt-auto pb-8 text-center">
                <a
                  href="#contacto"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-4 text-base font-semibold text-white shadow-lg"
                >
                  Iniciar Proyecto
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Hero Body Content */}
        <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
          <div className="max-w-4xl">
            {/* Live Indicator Pill */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.15)] backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400"></span>
              </span>
              <span>Estrategia digital + experiencia humana</span>
            </div>

            {/* Main Headline */}
            <h1 className="mt-8 text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl leading-[1.1]">
              Centrados en personas,{" "}
              <span className="text-gradient-cyan">impulsados por sistemas.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Construimos experiencias web inteligentes, gestión de talento de alta gama y arquitecturas de negocio diseñadas para escalar.
            </p>

            {/* Action Buttons */}
            <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#soluciones"
                className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-[#0CBED0] via-[#20D6CF] to-[#0AACC2] px-8 py-4 text-base font-bold text-white shadow-[0_0_30px_rgba(32,214,207,0.35)] transition-all duration-300 hover:shadow-[0_0_45px_rgba(32,214,207,0.55)] hover:scale-[1.02]"
              >
                <span>Descubrir Soluciones</span>
                <ChevronRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-base font-semibold text-slate-200 backdrop-blur-md transition duration-300 hover:border-white/30 hover:bg-white/10 hover:text-white"
              >
                <Sparkles className="h-4 w-4 text-cyan-400" />
                <span>Solicitar Demo</span>
              </a>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
