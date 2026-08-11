import React from 'react';
import { ArrowDown } from 'lucide-react';

const beforeSteps = [
  'Search through documents',
  'Read multiple emails',
  'Collect information',
  'Prepare summary',
  'Prepare response',
  'Human review'
];

const afterSteps = [
  { text: 'Upload / provide information', ai: false },
  { text: 'AI extracts', ai: true },
  { text: 'AI summarizes', ai: true },
  { text: 'AI identifies key points', ai: true },
  { text: 'AI drafts', ai: true },
  { text: 'Human reviews', ai: false },
  { text: 'Human decides / communicates', ai: false, bold: true }
];

export function BeforeAfter() {
  return (
    <section className="py-24 bg-brand-offwhite">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Workflow Augmentation</h2>
          <p className="text-lg text-gray-600">
            How AI changes the shape of everyday work by handling information synthesis,
            leaving the final judgement to the human professional.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 max-w-5xl mx-auto">
          {/* Before Column */}
          <div className="flex-1 bg-white p-8 rounded-3xl border border-gray-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gray-300" />
            <h3 className="text-xl font-bold text-gray-400 mb-8 text-center tracking-widest uppercase">Traditional Workflow</h3>
            <div className="flex flex-col items-center">
              {beforeSteps.map((step, idx) => (
                <React.Fragment key={idx}>
                  <div className="w-full max-w-[280px] bg-gray-50 text-gray-500 py-3 text-center rounded-lg text-sm font-medium border border-gray-100">
                    {step}
                  </div>
                  {idx < beforeSteps.length - 1 && (
                    <ArrowDown className="w-4 h-4 text-gray-300 my-2" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* After Column */}
          <div className="flex-1 bg-white p-8 rounded-3xl border-2 border-brand-teal shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-teal to-blue-500" />
            <h3 className="text-xl font-bold text-brand-navy mb-8 text-center tracking-widest uppercase text-gradient-ethika">AI-Assisted Workflow</h3>
            <div className="flex flex-col items-center">
              {afterSteps.map((step, idx) => (
                <React.Fragment key={idx}>
                  <div className={`w-full max-w-[280px] py-3 text-center rounded-lg text-sm transition-all duration-500 border ${
                    step.ai 
                      ? 'bg-brand-teal/10 text-brand-teal-dark border-brand-teal/20 font-semibold shadow-inner' 
                      : step.bold 
                        ? 'bg-brand-navy text-white border-brand-navy shadow-md font-bold'
                        : 'bg-white text-brand-navy border-gray-200 font-medium'
                  }`}>
                    {step.text}
                  </div>
                  {idx < afterSteps.length - 1 && (
                    <ArrowDown className={`w-4 h-4 my-2 ${afterSteps[idx+1].ai ? 'text-brand-teal' : 'text-gray-300'}`} />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
