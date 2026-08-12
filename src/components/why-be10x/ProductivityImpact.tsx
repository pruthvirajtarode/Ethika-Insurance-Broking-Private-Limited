import React from 'react';
import { Search, FileText, Monitor, Table2, Users } from 'lucide-react';

const impacts = [
  {
    icon: Search,
    category: 'Research',
    before: 'Manual searching, reading and summarization across multiple sources',
    after: 'AI-assisted research workflow producing a structured brief in minutes',
    color: 'text-brand-teal border-brand-teal/25',
  },
  {
    icon: FileText,
    category: 'Reports & Documents',
    before: 'Manual drafting from notes and data — time-intensive first draft',
    after: 'AI-assisted first draft from notes + human review and refinement',
    color: 'text-blue-400 border-blue-400/25',
  },
  {
    icon: Monitor,
    category: 'Presentations',
    before: 'Manual outline creation, content writing and formatting from scratch',
    after: 'AI-assisted structure, content and narrative direction + human polish',
    color: 'text-purple-400 border-purple-400/25',
  },
  {
    icon: Table2,
    category: 'Excel & Data',
    before: 'Manual formula discovery, debugging and analysis',
    after: 'AI-assisted formula generation and explanation + human validation',
    color: 'text-amber-400 border-amber-400/25',
  },
  {
    icon: Users,
    category: 'Meetings & Follow-ups',
    before: 'Manual meeting notes, action item extraction and follow-up drafting',
    after: 'AI-assisted summary, structured action items and follow-up draft',
    color: 'text-emerald-400 border-emerald-400/25',
  },
];

export function ProductivityImpact() {
  return (
    <section id="impact" className="py-20 bg-[#0a1628]">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-brand-teal/15 text-brand-teal border border-brand-teal/25 mb-4">
            Business Impact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Potential Productivity Impact
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Illustrative workflow comparisons showing where AI can shift time from repetitive effort to higher-value work.
          </p>
        </div>

        <div className="space-y-4">
          {impacts.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`bg-white/3 border rounded-2xl overflow-hidden hover:bg-white/5 transition-colors ${item.color}`}
              >
                <div className="flex items-center gap-3 px-6 py-4 border-b border-white/5">
                  <Icon className={`w-4 h-4 ${item.color.split(' ')[0]}`} />
                  <h3 className="text-white font-bold text-sm">{item.category}</h3>
                </div>
                <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/5">
                  <div className="px-6 py-4">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Before</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.before}</p>
                  </div>
                  <div className="px-6 py-4 bg-white/2">
                    <p className="text-xs font-bold uppercase tracking-widest text-brand-teal mb-2">After (Illustrative)</p>
                    <p className="text-gray-200 text-sm leading-relaxed">{item.after}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 bg-white/4 border border-white/10 rounded-xl px-6 py-4 text-center">
          <p className="text-gray-400 text-xs leading-relaxed">
            <span className="text-amber-400 font-semibold">Illustrative workflow examples.</span> Actual time savings depend on role, task complexity, process maturity and rate of AI adoption. These are not guaranteed outcomes.
          </p>
        </div>
      </div>
    </section>
  );
}
