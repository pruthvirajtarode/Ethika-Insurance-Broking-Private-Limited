import React from 'react';

export function HeroStatement() {
  return (
    <section className="bg-[#0a1628] py-20 border-b border-white/5">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Central statement */}
        <div className="text-center mb-16">
          <p className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-300 leading-relaxed mb-6 max-w-4xl mx-auto">
            Outskill offers a broad AI mastery journey.
            <br />
            <span className="font-bold text-white">
              Be10X can turn this workshop into an immediate workplace productivity experience for Ethika.
            </span>
          </p>
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-brand-teal font-semibold text-sm tracking-wide">
            Different goal. Different experience.
          </div>
        </div>

        {/* Two comparison cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Outskill */}
          <div className="relative rounded-2xl border border-white/10 bg-white/4 p-8 text-center backdrop-blur-sm hover:border-white/20 transition-colors">
            <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-gray-600/30 text-gray-400 border border-gray-600/30 mb-4">
              Outskill
            </div>
            <p className="text-white font-semibold text-lg leading-snug">
              Broad AI Mastery &amp; Upskilling
            </p>
            <p className="text-gray-500 text-sm mt-3">
              Comprehensive multi-topic AI curriculum for broad skill development
            </p>
          </div>

          {/* Be10X × Ethika */}
          <div className="relative rounded-2xl border border-brand-teal/30 bg-brand-teal/8 p-8 text-center backdrop-blur-sm hover:border-brand-teal/50 transition-colors">
            {/* Glow */}
            <div className="absolute inset-0 rounded-2xl bg-brand-teal/5 blur-xl -z-10" />
            <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-brand-teal/20 text-brand-teal border border-brand-teal/30 mb-4">
              Be10X × Ethika
            </div>
            <p className="text-white font-bold text-lg leading-snug">
              Practical AI Productivity &amp; Workplace Application
            </p>
            <p className="text-brand-teal/70 text-sm mt-3">
              Role-specific, immediately applicable, Ethika-context aware
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
