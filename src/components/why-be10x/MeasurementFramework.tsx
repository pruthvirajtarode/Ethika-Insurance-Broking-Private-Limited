import React from 'react';
import { Users, CheckSquare, TrendingUp, MessageSquare, Repeat2, Lightbulb, Monitor, Clock, ThumbsUp, Wrench } from 'lucide-react';

const metrics = [
  { icon: Users, label: 'Attendance', description: 'Number of participants who attended the workshop', color: 'text-brand-teal' },
  { icon: CheckSquare, label: 'Completion', description: 'Percentage who completed all workshop exercises', color: 'text-blue-400' },
  { icon: TrendingUp, label: 'Employee Confidence', description: 'Self-reported AI confidence before and after', color: 'text-purple-400' },
  { icon: MessageSquare, label: 'Prompt Quality', description: 'Assessed quality and specificity of prompts written', color: 'text-amber-400' },
  { icon: Wrench, label: 'Workflows Created', description: 'Number of reusable workflows identified per team', color: 'text-emerald-400' },
  { icon: Lightbulb, label: 'Use Cases Identified', description: 'Employee-reported AI opportunities from their role', color: 'text-rose-400' },
  { icon: Monitor, label: 'AI Tool Adoption', description: 'Tools actively used 30 days after the workshop', color: 'text-cyan-400' },
  { icon: Clock, label: 'Time Saved (Estimated)', description: 'Self-reported weekly time saved on repetitive tasks', color: 'text-indigo-400' },
  { icon: ThumbsUp, label: 'Manager Feedback', description: 'Manager assessment of observable behaviour change', color: 'text-orange-400' },
  { icon: Repeat2, label: 'Post-Workshop Application', description: 'Number of AI workflows applied to real tasks', color: 'text-teal-400' },
];

export function MeasurementFramework() {
  return (
    <section id="measurement" className="py-20 bg-[#0a1628]">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-brand-teal/15 text-brand-teal border border-brand-teal/25 mb-4">
            Measurement Framework
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How We Measure Success
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A proposed measurement framework to track the real impact of the AI workshop on employee capability and adoption.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {metrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <div
                key={idx}
                className="bg-white/4 border border-white/8 rounded-2xl p-5 hover:border-brand-teal/20 hover:bg-white/6 transition-all duration-200 group"
              >
                <div className={`w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform ${metric.color}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-white font-semibold text-sm mb-1.5">{metric.label}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{metric.description}</p>
              </div>
            );
          })}
        </div>

        <p className="text-xs text-gray-500 text-center mt-6">
          Proposed measurement framework — subject to final engagement agreement. Measurement timing and methods to be confirmed.
        </p>
      </div>
    </section>
  );
}
