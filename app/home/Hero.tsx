'use client';

import { useState } from "react";

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/video-inbusiness.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.14),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.16),_transparent_24%)]" />

      <div className="relative z-10 flex w-full flex-col">
        <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 sm:px-10 lg:px-16">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white ring-1 ring-white/10 backdrop-blur-sm">
              <span className="font-semibold">IB</span>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/80">
                InBusiness
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-10 text-sm text-white/80 md:flex">
            <a href="#inicio" className="transition hover:text-white">
              Inicio
            </a>
            <a href="#soluciones" className="transition hover:text-white">
              Soluciones
            </a>
            <a href="#comunidades" className="transition hover:text-white">
              Comunidades
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            className="inline-flex h-12 w-12 items-center justify-center text-white transition duration-300 hover:text-white/90 md:hidden"
            aria-label="Abrir menú"
          >
            <span className="flex h-6 w-6 flex-col justify-between">
              <span className="block h-0.5 w-full bg-white" />
              <span className="block h-0.5 w-full bg-white" />
              <span className="block h-0.5 w-full bg-white" />
            </span>
          </button>
        </header>

        {open ? (
          <div className="fixed inset-0 z-50 overflow-hidden bg-gradient-to-br from-cyan-500 via-sky-500 to-teal-500 text-slate-950 backdrop-blur-xl transition duration-300">
            <div className="relative mx-auto flex h-full max-w-3xl flex-col px-6 py-8 sm:px-10">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="ml-auto flex h-12 w-12 items-center justify-center text-white transition duration-300 hover:text-white/90"
                aria-label="Cerrar menú"
              >
                <span className="block h-0.5 w-6 rotate-45 bg-white" />
                <span className="block h-0.5 w-6 -rotate-45 bg-white" />
              </button>

              <div className="mt-16 flex flex-1 flex-col items-center justify-center gap-6 text-center">
                <a
                  href="#inicio"
                  onClick={() => setOpen(false)}
                  className="text-3xl font-semibold uppercase tracking-[0.25em] text-white transition duration-300 hover:text-slate-950"
                >
                  Inicio
                </a>
                <a
                  href="#soluciones"
                  onClick={() => setOpen(false)}
                  className="text-3xl font-semibold uppercase tracking-[0.25em] text-white transition duration-300 hover:text-slate-950"
                >
                  Soluciones
                </a>
                <a
                  href="#comunidades"
                  onClick={() => setOpen(false)}
                  className="text-3xl font-semibold uppercase tracking-[0.25em] text-white transition duration-300 hover:text-slate-950"
                >
                  Comunidades
                </a>
              </div>

              <div className="mt-auto flex flex-col items-center gap-3 pb-8">
                <div className="h-px w-full bg-slate-950/15" />
                <div className="flex flex-col items-center text-center text-sm font-semibold text-slate-950">
                  <span>INbusiness Customer Experience</span>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
          <div className="max-w-4xl">
            <span className="mb-6 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-medium uppercase tracking-[0.35em] text-white/80 ring-1 ring-white/10 backdrop-blur-sm">
              Estrategia digital + experiencia humana
            </span>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Centrados en personas, impulsados por sistemas.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-200 sm:text-xl">
              Construimos experiencias web con propósito, tecnología y diseño pensado para crecer con tu negocio.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#soluciones"
                className="inline-flex w-full items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-black shadow-lg shadow-black/20 transition hover:bg-zinc-100 sm:w-auto"
              >
                Ver soluciones
              </a>
              <a
                href="#comunidades"
                className="inline-flex w-full items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white transition hover:border-white/40 hover:bg-white/10 sm:w-auto"
              >
                Ver comunidades
              </a>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
