import React from 'react';
import { Search, Zap, BarChart3, Layers } from 'lucide-react';

const metrics = [
  {
    id: '01',
    title: 'Information → Insight',
    description: 'Quickly understand complex policies and extract key clauses.',
    icon: Search,
  },
  {
    id: '02',
    title: 'Repetition → Automation',
    description: 'Draft initial responses and summarize long email threads.',
    icon: Zap,
  },
  {
    id: '03',
    title: 'Data → Decisions',
    description: 'Identify trends in renewals and claims across portfolios.',
    icon: BarChart3,
  },
  {
    id: '04',
    title: 'Knowledge → Action',
    description: 'Find internal SOPs and HR processes instantly.',
    icon: Layers,
  },
];

export function ExecutiveSnapshot() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why AI, Why Now?</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Insurance teams work with large volumes of policy documents, claim information, 
            employee benefit details, emails, reports, and internal knowledge. 
            AI can help transform this information overload into usable insights and actions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {metrics.map((metric) => (
            <div key={metric.id} className="glass-card p-6 border border-gray-100 hover:border-brand-teal/30 hover:shadow-xl transition-all duration-300 group">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-xl bg-brand-navy/5 flex items-center justify-center group-hover:bg-brand-teal/10 group-hover:text-brand-teal transition-colors text-brand-navy">
                  <metric.icon className="w-6 h-6" />
                </div>
                <span className="text-gray-300 font-bold text-xl">{metric.id}</span>
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">{metric.title}</h3>
              <p className="text-gray-600 text-sm">
                <span className="font-medium text-brand-charcoal block mb-1">Potential impact area:</span>
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
