import React from 'react';
import { Search, BookOpen, FlaskConical, Wrench, LineChart, RefreshCw } from 'lucide-react';

const steps = [
  {
    number: '01',
    label: 'Discover',
    icon: Search,
    description: 'Identify repetitive tasks and AI opportunities across your role.',
    color: 'text-brand-teal',
    bg: 'bg-brand-teal/15 border-brand-teal/30',
    connector: 'bg-brand-teal/30',
  },
  {
    number: '02',
    label: 'Learn',
    icon: BookOpen,
    description: 'Understand the right AI tools and prompting methods for your tasks.',
    color: 'text-blue-400',
    bg: 'bg-blue-400/15 border-blue-400/30',
    connector: 'bg-blue-400/30',
  },
  {
    number: '03',
    label: 'Practice',
    icon: FlaskConical,
    description: 'Work through realistic business scenarios using AI tools.',
    color: 'text-purple-400',
    bg: 'bg-purple-400/15 border-purple-400/30',
    connector: 'bg-purple-400/30',
  },
  {
    number: '04',
    label: 'Apply',
    icon: Wrench,
    description: 'Build reusable prompts, templates and workflows for your work.',
    color: 'text-amber-400',
    bg: 'bg-amber-400/15 border-amber-400/30',
    connector: 'bg-amber-400/30',
  },
  {
    number: '05',
    label: 'Measure',
    icon: LineChart,
    description: 'Track adoption, confidence and potential time savings.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/15 border-emerald-400/30',
    connector: 'bg-emerald-400/30',
  },
  {
    number: '06',
    label: 'Sustain',
    icon: RefreshCw,
    description: 'Continue using the AI toolkit after the workshop ends.',
    color: 'text-rose-400',
    bg: 'bg-rose-400/15 border-rose-400/30',
    connector: null,
  },
];

export function WorkshopToWorkplace() {
  return (
    <section className="py-20 bg-[#0a1628]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-brand-teal/15 text-brand-teal border border-brand-teal/25 mb-4">
            The Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            From Workshop to Workplace
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            The workshop is the starting point. The real value is what happens when employees return to their desks.
          </p>
        </div>

        {/* Desktop timeline */}
        <div className="hidden lg:flex items-start gap-0">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="flex-1 flex flex-col items-center group">
                {/* Icon + connector */}
                <div className="flex items-center w-full relative">
                  <div className="flex-1 h-px" style={{ background: idx === 0 ? 'transparent' : undefined }}>
                    {idx > 0 && <div className={`h-px w-full ${steps[idx - 1].connector}`} />}
                  </div>
                  <div className={`relative z-10 w-16 h-16 rounded-2xl border flex items-center justify-center flex-shrink-0 ${step.bg} group-hover:scale-105 transition-transform duration-200`}>
                    <Icon className={`w-6 h-6 ${step.color}`} />
                    <span className="absolute -top-2 -right-2 text-[10px] font-black text-gray-500">{step.number}</span>
                  </div>
                  <div className="flex-1 h-px">
                    {idx < steps.length - 1 && <div className={`h-px w-full ${step.connector}`} />}
                  </div>
                </div>

                {/* Label + description */}
                <div className="mt-5 text-center px-2">
                  <p className={`font-bold text-sm uppercase tracking-wide ${step.color} mb-2`}>{step.label}</p>
                  <p className="text-gray-400 text-xs leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile timeline */}
        <div className="lg:hidden space-y-4">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className={`flex gap-4 rounded-xl border p-5 ${step.bg}`}>
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-black/20">
                    <Icon className={`w-5 h-5 ${step.color}`} />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-black text-gray-500">{step.number}</span>
                    <p className={`font-bold text-sm uppercase tracking-wide ${step.color}`}>{step.label}</p>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
