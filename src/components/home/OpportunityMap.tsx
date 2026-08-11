import React from 'react';

const opportunities = [
  { area: 'Claims', capability: 'AI summarization', example: 'Summarize claim correspondence and documents', benefit: 'Faster case understanding', risk: 'Medium' },
  { area: 'Policy & Documents', capability: 'Document Q&A', example: 'Ask questions about policy wording', benefit: 'Reduce manual searching', risk: 'Medium' },
  { area: 'Client Servicing', capability: 'Email Copilot', example: 'Draft client responses', benefit: 'Faster communication', risk: 'Low/Medium' },
  { area: 'Employee Benefits', capability: 'Benefits Assistant', example: 'Answer routine benefits FAQs', benefit: 'Improved employee experience', risk: 'Low' },
  { area: 'HR Operations', capability: 'HR Communication', example: 'Draft wellness content and updates', benefit: 'Consistent messaging', risk: 'Low' },
  { area: 'Renewals', capability: 'Renewal Brief', example: 'Summarize historical info for discussion', benefit: 'Better preparation', risk: 'Medium' },
  { area: 'Sales & BD', capability: 'Meeting Summarization', example: 'Capture key points from client calls', benefit: 'Improved follow-up', risk: 'Low' },
  { area: 'Internal Knowledge', capability: 'Internal AI Assistant', example: 'Search SOPs and approved knowledge', benefit: 'Faster employee onboarding', risk: 'Medium' },
  { area: 'Analytics & Reporting', capability: 'AI Report Analyst', example: 'Explain trends in datasets', benefit: 'Faster analysis', risk: 'Medium' },
];

function RiskBadge({ risk }: { risk: string }) {
  const getStyle = () => {
    if (risk.includes('Low')) return 'bg-green-100 text-green-700 border-green-200';
    if (risk.includes('Medium')) return 'bg-yellow-100 text-yellow-700 border-yellow-200';
    return 'bg-red-100 text-red-700 border-red-200';
  };
  
  return (
    <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${getStyle()}`}>
      {risk}
    </span>
  );
}

export function OpportunityMap() {
  return (
    <section className="py-20 bg-brand-offwhite">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">The Ethika AI Opportunity Map</h2>
          <p className="text-lg text-gray-600">
            A strategic view of where AI can support operations across different business units,
            balancing human benefit with implementation risk.
          </p>
        </div>

        <div className="max-w-6xl mx-auto overflow-x-auto shadow-xl rounded-2xl border border-gray-200">
          <table className="w-full text-left bg-white border-collapse whitespace-nowrap md:whitespace-normal">
            <thead>
              <tr className="bg-brand-navy text-white text-sm font-semibold uppercase tracking-wider">
                <th className="p-4 rounded-tl-2xl border-b border-brand-navy-dark">Area</th>
                <th className="p-4 border-b border-brand-navy-dark">AI Capability</th>
                <th className="p-4 border-b border-brand-navy-dark">Example</th>
                <th className="p-4 border-b border-brand-navy-dark">Human Benefit</th>
                <th className="p-4 rounded-tr-2xl border-b border-brand-navy-dark">Risk Level</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {opportunities.map((row, idx) => (
                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                  <td className="p-4 font-semibold text-brand-navy whitespace-nowrap">{row.area}</td>
                  <td className="p-4 font-medium text-brand-teal">{row.capability}</td>
                  <td className="p-4 text-gray-600 min-w-[200px]">{row.example}</td>
                  <td className="p-4 text-gray-600">{row.benefit}</td>
                  <td className="p-4"><RiskBadge risk={row.risk} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
