import React from 'react';
import { TrendingUp, Users, Lightbulb, HeartHandshake } from 'lucide-react';

const impacts = [
  {
    title: 'PRODUCTIVITY',
    subtitle: 'Reduce repetitive information work.',
    outcome: 'Less time spent searching and summarizing documents.',
    icon: TrendingUp,
  },
  {
    title: 'SERVICE',
    subtitle: 'Respond faster and more consistently.',
    outcome: 'Faster first drafts for client communication.',
    icon: HeartHandshake,
  },
  {
    title: 'INSIGHT',
    subtitle: 'Turn operational data into understanding.',
    outcome: 'Better preparation for client renewal conversations.',
    icon: Lightbulb,
  },
  {
    title: 'EXPERIENCE',
    subtitle: 'Make interactions simpler.',
    outcome: 'More consistent internal knowledge access for employees.',
    icon: Users,
  },
];

export function BusinessImpact() {
  return (
    <section className="py-24 bg-brand-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-teal rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Where AI Can Create Value</h2>
          <p className="text-lg text-gray-300">
            AI at Ethika isn't about replacing the human touch; it's about amplifying it 
            by removing friction from the flow of information.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impacts.map((impact, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-brand-teal/20 flex items-center justify-center text-brand-teal mb-6">
                <impact.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2 tracking-wide text-brand-offwhite">{impact.title}</h3>
              <p className="text-brand-teal-light text-sm font-medium mb-4">{impact.subtitle}</p>
              <div className="pt-4 border-t border-white/10">
                <p className="text-sm text-gray-300">
                  <span className="block text-xs uppercase text-gray-500 font-semibold mb-1">Potential outcome</span>
                  "{impact.outcome}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
