import React from 'react';
import { Briefcase, Building2, Workflow, Package, BarChart3, Users } from 'lucide-react';

const cards = [
  {
    icon: Briefcase,
    title: 'Built Around Real Work',
    description:
      'Instead of learning AI in isolation, employees practice AI against realistic workplace tasks such as research, reporting, presentations, documentation and analysis.',
    accent: 'from-brand-teal/20 to-brand-teal/5',
    iconBg: 'bg-brand-teal/15 text-brand-teal',
  },
  {
    icon: Building2,
    title: 'Ethika-Relevant Use Cases',
    description:
      'Use insurance, employee-benefit, client servicing, operations, sales and management scenarios to make learning immediately relatable.',
    accent: 'from-blue-500/20 to-blue-500/5',
    iconBg: 'bg-blue-500/15 text-blue-400',
  },
  {
    icon: Workflow,
    title: 'From Tools to Workflows',
    description:
      "Employees don't just discover AI tools. They learn repeatable workflows that combine prompting, research, documents, data and automation.",
    accent: 'from-purple-500/20 to-purple-500/5',
    iconBg: 'bg-purple-500/15 text-purple-400',
  },
  {
    icon: Package,
    title: 'Take-Home AI Toolkit',
    description:
      'Proposed Ethika toolkit containing reusable prompts, templates, workflow guides and practical AI checklists.',
    accent: 'from-amber-500/20 to-amber-500/5',
    iconBg: 'bg-amber-500/15 text-amber-400',
    proposed: true,
  },
  {
    icon: BarChart3,
    title: 'Measure the Productivity Shift',
    description:
      'Establish a simple before/after framework to understand where AI can reduce repetitive effort and improve turnaround time.',
    accent: 'from-emerald-500/20 to-emerald-500/5',
    iconBg: 'bg-emerald-500/15 text-emerald-400',
    proposed: true,
  },
  {
    icon: Users,
    title: 'Designed for Every Employee',
    description:
      'Beginner-friendly delivery that allows non-technical business users to participate without requiring programming or AI expertise.',
    accent: 'from-rose-500/20 to-rose-500/5',
    iconBg: 'bg-rose-500/15 text-rose-400',
  },
];

export function DifferentiatorCards() {
  return (
    <section id="why-be10x" className="py-20 bg-[#0a1628]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-brand-teal/15 text-brand-teal border border-brand-teal/25 mb-4">
            Key Differentiators
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Makes This Fit Better
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Six reasons why the Be10X approach is the stronger fit for this specific Ethika workshop objective.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className={`relative rounded-2xl bg-gradient-to-br ${card.accent} border border-white/8 p-7 hover:border-white/15 hover:-translate-y-1 transition-all duration-300 group`}
                style={{ animationDelay: `${idx * 0.07}s` }}
              >
                {card.proposed && (
                  <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
                    Proposed
                  </span>
                )}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${card.iconBg}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-white font-bold text-lg mb-3 leading-snug">{card.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{card.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
