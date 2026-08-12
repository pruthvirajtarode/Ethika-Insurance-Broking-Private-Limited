import React from 'react';
import { Minimize2, Zap, GitMerge, Power, TrendingUp } from 'lucide-react';

const pillars = [
  {
    icon: Minimize2,
    title: 'Simplify',
    description: 'Reduce repetitive manual work that slows down teams and creates bottlenecks.',
    accent: 'border-brand-teal/30 bg-brand-teal/8',
    iconColor: 'text-brand-teal',
  },
  {
    icon: Zap,
    title: 'Speed Up',
    description: 'Accelerate research, reporting and communication with AI-assisted workflows.',
    accent: 'border-amber-400/30 bg-amber-400/8',
    iconColor: 'text-amber-400',
  },
  {
    icon: GitMerge,
    title: 'Standardize',
    description: 'Create reusable workflows, prompt templates and process guides across teams.',
    accent: 'border-blue-400/30 bg-blue-400/8',
    iconColor: 'text-blue-400',
  },
  {
    icon: Power,
    title: 'Empower',
    description: 'Give every employee — not just technical roles — practical AI capabilities.',
    accent: 'border-purple-400/30 bg-purple-400/8',
    iconColor: 'text-purple-400',
  },
  {
    icon: TrendingUp,
    title: 'Scale',
    description: 'Help teams handle growing work volumes without proportionally increasing repetitive effort.',
    accent: 'border-emerald-400/30 bg-emerald-400/8',
    iconColor: 'text-emerald-400',
  },
];

export function WhyThisMatters() {
  return (
    <section className="py-20 bg-[#0a1628]">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-brand-teal/15 text-brand-teal border border-brand-teal/25 mb-4">
            Why This Matters to Ethika
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Technology Already At the Heart of Ethika
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Ethika already believes in using technology to simplify complex insurance experiences for HR teams and employees.
            <span className="text-white font-semibold"> AI can extend that same philosophy into the employee workflow.</span>
          </p>
        </div>

        {/* Quote block */}
        <div className="relative bg-brand-teal/10 border border-brand-teal/25 rounded-2xl px-8 py-8 mb-14 text-center">
          <div className="text-5xl text-brand-teal/30 font-serif leading-none absolute top-4 left-6">"</div>
          <p className="text-white text-lg md:text-xl font-medium leading-relaxed relative z-10 max-w-3xl mx-auto">
            The same human-first, technology-enabled approach that Ethika applies to insurance for its clients 
            can now be applied to the daily work of Ethika's own employees.
          </p>
          <div className="text-5xl text-brand-teal/30 font-serif leading-none absolute bottom-2 right-6 rotate-180">"</div>
        </div>

        {/* Five pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className={`rounded-2xl border p-6 text-center hover:-translate-y-1 transition-transform duration-200 ${pillar.accent}`}
              >
                <div className="w-10 h-10 rounded-xl bg-black/20 flex items-center justify-center mx-auto mb-4">
                  <Icon className={`w-5 h-5 ${pillar.iconColor}`} />
                </div>
                <h3 className={`font-bold text-base mb-2 ${pillar.iconColor}`}>{pillar.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{pillar.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
