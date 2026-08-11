import React from 'react';
import { Shield, Lock, UserCheck, Eye, Database, Scale, CheckSquare } from 'lucide-react';

const pillars = [
  {
    title: 'Privacy',
    description: 'No use of real employee health records, medical information, or personally identifiable information (PII) during demonstrations.',
    icon: Shield,
  },
  {
    title: 'Security',
    description: 'Models should be deployed in secure environments. No sensitive data is used to train public foundational models.',
    icon: Lock,
  },
  {
    title: 'Human-in-the-loop',
    description: 'AI assists decisions — it does not silently make sensitive decisions about claims or underwriting.',
    icon: UserCheck,
  },
  {
    title: 'Explainability',
    description: 'Users must understand why an AI system provided a specific response or recommendation.',
    icon: Eye,
  },
  {
    title: 'Data Minimization',
    description: 'AI tools should only have access to the minimum required data to perform their specific function.',
    icon: Database,
  },
  {
    title: 'Governance',
    description: 'Clear policies on approved AI tools, prompt logging, and continuous evaluation of model outputs.',
    icon: Scale,
  },
];

const checklist = [
  'Data classification',
  'Access controls',
  'Approved AI tools',
  'Audit logging',
  'Human review workflow',
  'Prompt/data policies',
  'Model evaluation',
  'Security review',
  'Compliance review',
];

export default function ResponsibleAI() {
  return (
    <div className="pt-24 min-h-screen bg-brand-offwhite pb-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-brand-navy rounded-2xl flex items-center justify-center mx-auto mb-6 text-brand-teal">
            <Shield className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">Responsible AI by Design</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Because Ethika deals with sensitive insurance and employee health information, 
            trust and security must be the foundation of any AI initiative.
          </p>
          <div className="bg-red-50 border border-red-200 text-red-700 p-6 rounded-2xl inline-block max-w-3xl">
            <h3 className="font-bold text-xl mb-2">The Core Principle</h3>
            <p className="text-lg">
              AI should assist decisions — not silently make sensitive decisions.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-brand-navy/5 flex items-center justify-center text-brand-teal mb-6">
                <pillar.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">{pillar.title}</h3>
              <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-brand-navy text-white rounded-3xl p-10 md:p-16 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-teal rounded-full blur-[80px] opacity-20" />
          
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Production Readiness Checklist</h2>
              <p className="text-brand-teal-light mb-8 text-lg">
                Before any AI capability moves from pilot to production, it must pass a rigorous security and governance review.
              </p>
              <div className="p-4 bg-white/10 rounded-xl border border-white/20 text-sm">
                <p className="font-semibold mb-2">Note on Demonstrations:</p>
                <p className="text-gray-300">All demonstrations in this workshop proposal use strictly synthetic data. Do not upload real client information.</p>
              </div>
            </div>
            
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <ul className="space-y-4">
                {checklist.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckSquare className="w-5 h-5 text-brand-teal" />
                    <span className="font-medium text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
