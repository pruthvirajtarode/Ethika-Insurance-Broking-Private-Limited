import React from 'react';
import { Wrench, GitBranch, FileSearch, UserCheck, RotateCcw, ArrowDown } from 'lucide-react';

const steps = [
  { icon: Wrench, label: 'Tool Discovery', description: 'Learn the right AI tools', color: 'text-gray-400 border-gray-400/30 bg-gray-400/10' },
  { icon: GitBranch, label: 'Workflow Design', description: 'Design repeatable processes', color: 'text-blue-400 border-blue-400/30 bg-blue-400/10' },
  { icon: FileSearch, label: 'Real Task', description: 'Apply to an actual work task', color: 'text-purple-400 border-purple-400/30 bg-purple-400/10' },
  { icon: UserCheck, label: 'Human Review', description: 'Validate and refine output', color: 'text-amber-400 border-amber-400/30 bg-amber-400/10' },
  { icon: RotateCcw, label: 'Repeatable Process', description: 'Lock in as a reusable workflow', color: 'text-brand-teal border-brand-teal/30 bg-brand-teal/10' },
];

export function WhyNotGeneric() {
  return (
    <section className="py-20 bg-brand-offwhite">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        {/* Bold statement */}
        <div className="mb-14">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-brand-navy/8 text-brand-navy border border-brand-navy/15 mb-6">
            Why Not Just a Generic AI Workshop?
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-navy mb-6 leading-tight">
            Employees don't need another
            <br />
            <span className="text-brand-charcoal font-normal">list of AI tools.</span>
          </h2>
          <p className="text-xl md:text-2xl font-bold text-brand-teal">
            They need a repeatable way to use AI at work.
          </p>
        </div>

        {/* Vertical flow */}
        <div className="flex flex-col items-center gap-0 max-w-xs mx-auto">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <React.Fragment key={idx}>
                <div className={`w-full rounded-2xl border p-5 flex items-center gap-4 text-left ${step.color}`}>
                  <div className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-brand-navy text-sm">{step.label}</p>
                    <p className="text-gray-500 text-xs">{step.description}</p>
                  </div>
                </div>
                {idx < steps.length - 1 && (
                  <div className="flex flex-col items-center py-2">
                    <ArrowDown className="w-5 h-5 text-gray-300" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        <div className="mt-12 max-w-xl mx-auto">
          <p className="text-lg text-brand-charcoal font-medium leading-relaxed">
            The Be10X approach is designed so that every step — from discovering a tool to completing a task — becomes a repeatable, human-reviewed process employees can use the next working day.
          </p>
        </div>
      </div>
    </section>
  );
}
