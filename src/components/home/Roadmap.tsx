import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const stages = [
  {
    stage: 'STAGE 1',
    title: 'AI Awareness',
    items: ['Workshop', 'Training', 'Prompt literacy', 'Responsible AI'],
    active: true,
  },
  {
    stage: 'STAGE 2',
    title: 'AI Productivity',
    items: ['Email Copilot', 'Document Summarization', 'Meeting Notes', 'Knowledge Search'],
    active: false,
  },
  {
    stage: 'STAGE 3',
    title: 'AI Workflow',
    items: ['Claims support', 'Policy assistant', 'Renewal intelligence', 'Internal knowledge assistant'],
    active: false,
  },
  {
    stage: 'STAGE 4',
    title: 'Enterprise AI',
    items: ['Secure integrations', 'Governance', 'Evaluation', 'Monitoring', 'Production deployment'],
    active: false,
  },
];

export function Roadmap() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block bg-gray-100 text-gray-500 px-3 py-1 rounded text-xs font-semibold mb-4 uppercase tracking-wider">
            Illustrative AI adoption roadmap
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">The Journey to Enterprise AI</h2>
          <p className="text-lg text-gray-600">
            A structured approach to adopting AI safely, starting with foundational literacy 
            and moving towards secure, integrated workflows.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[4.5rem] left-[10%] right-[10%] h-0.5 bg-gray-200 z-0" />
          
          {stages.map((stage, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center">
              <div className="text-xs font-bold text-gray-400 mb-4">{stage.stage}</div>
              
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-md transition-all duration-300 ${
                stage.active 
                  ? 'bg-brand-teal text-white ring-4 ring-brand-teal/20 scale-110' 
                  : 'bg-white border-2 border-gray-200 text-gray-400'
              }`}>
                <span className="font-bold text-xl">{idx + 1}</span>
              </div>
              
              <h3 className={`text-xl font-bold mb-6 text-center ${stage.active ? 'text-brand-navy' : 'text-gray-500'}`}>
                {stage.title}
              </h3>
              
              <div className="w-full bg-brand-offwhite rounded-2xl p-6 border border-gray-100 h-full">
                <ul className="space-y-3">
                  {stage.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${stage.active ? 'text-brand-teal' : 'text-gray-300'}`} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
