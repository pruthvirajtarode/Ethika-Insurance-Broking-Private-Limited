import React, { useState } from 'react';
import {
  TrendingUp, Settings, UserCheck, BarChart2, Shield, Megaphone, DollarSign,
  ChevronDown, ChevronUp
} from 'lucide-react';

interface UseCase {
  example: string;
}

interface Category {
  id: string;
  label: string;
  icon: React.ElementType;
  color: string;
  examples: UseCase[];
}

const categories: Category[] = [
  {
    id: 'sales',
    label: 'Sales & Business Development',
    icon: TrendingUp,
    color: 'text-brand-teal border-brand-teal/30 bg-brand-teal/10',
    examples: [
      { example: 'Prospect research — summarize company background, recent news and relevant insurance needs' },
      { example: 'Lead qualification support — draft initial screening criteria and conversation starters' },
      { example: 'Personalized outreach drafts — tailor messages to specific client profiles' },
      { example: 'Proposal preparation — structure and draft initial proposal content' },
      { example: 'Follow-up messages — professional, contextual follow-ups after meetings' },
      { example: 'Meeting preparation — research agenda, likely questions and talking points' },
      { example: 'Competitor research — summarize publicly available market information' },
    ],
  },
  {
    id: 'operations',
    label: 'Operations',
    icon: Settings,
    color: 'text-blue-400 border-blue-400/30 bg-blue-400/10',
    examples: [
      { example: 'Document summarization — extract key points from lengthy insurance documents' },
      { example: 'Data extraction — identify and structure key data from text-heavy files' },
      { example: 'Report drafting — produce initial drafts from structured data or notes' },
      { example: 'SOP creation — generate draft standard operating procedures for common workflows' },
      { example: 'Repetitive documentation — automate recurring operational write-ups' },
      { example: 'Workflow automation — identify and prototype simple process automations' },
    ],
  },
  {
    id: 'hr',
    label: 'HR & People',
    icon: UserCheck,
    color: 'text-purple-400 border-purple-400/30 bg-purple-400/10',
    examples: [
      { example: 'Job descriptions — draft role-appropriate JDs quickly' },
      { example: 'Employee communication — clear, empathetic internal announcements' },
      { example: 'Training material — structure and draft learning content' },
      { example: 'Survey summarization — extract themes from employee feedback' },
      { example: 'Internal announcements — professional, consistent messaging' },
      { example: 'Policy/document summarization — make policies readable for employees' },
    ],
  },
  {
    id: 'management',
    label: 'Management',
    icon: BarChart2,
    color: 'text-amber-400 border-amber-400/30 bg-amber-400/10',
    examples: [
      { example: 'Executive summaries — condense lengthy reports into leadership-ready briefs' },
      { example: 'MIS preparation — structure and format management information reports' },
      { example: 'Meeting briefs — prepare structured pre-meeting background documents' },
      { example: 'Business research — synthesize market and sector intelligence' },
      { example: 'Presentation creation — outline, content and narrative structure' },
      { example: 'Decision-support analysis — pros/cons frameworks and scenario thinking' },
    ],
  },
  {
    id: 'client',
    label: 'Client Servicing / Insurance',
    icon: Shield,
    color: 'text-emerald-400 border-emerald-400/30 bg-emerald-400/10',
    examples: [
      { example: 'Policy document summarization — plain-English summaries of complex policy terms' },
      { example: 'Client communication drafts — professional, empathetic client-facing messages' },
      { example: 'Renewal follow-up preparation — structured renewal discussion documents' },
      { example: 'Insurance comparison preparation — structured feature comparison drafts' },
      { example: 'Checklist generation — coverage checklists and verification guides' },
      { example: 'Claims/document workflow support — draft guidance and process notes' },
      { example: 'Knowledge-base creation — build reusable client FAQ and reference content' },
    ],
  },
  {
    id: 'marketing',
    label: 'Marketing & Communications',
    icon: Megaphone,
    color: 'text-rose-400 border-rose-400/30 bg-rose-400/10',
    examples: [
      { example: 'Content ideation — generate topic ideas and content frameworks' },
      { example: 'Social media drafts — draft posts aligned with brand tone' },
      { example: 'Case study structuring — organize client success stories effectively' },
      { example: 'Email campaigns — draft sequence and messaging' },
      { example: 'SEO-friendly content — structure web content around relevant topics' },
    ],
  },
  {
    id: 'finance',
    label: 'Finance & Admin',
    icon: DollarSign,
    color: 'text-cyan-400 border-cyan-400/30 bg-cyan-400/10',
    examples: [
      { example: 'Excel formula support — generate and explain complex formulas with AI assistance' },
      { example: 'Data analysis narrative — draft commentary on financial data' },
      { example: 'Budget presentation — structure financial slides and talking points' },
      { example: 'Vendor research — summarize vendor profiles and comparison frameworks' },
      { example: 'Expense report drafting — produce structured expense documentation' },
    ],
  },
];

export function EthikaUseCases() {
  const [openId, setOpenId] = useState<string>('sales');

  return (
    <section id="use-cases" className="py-20 bg-brand-offwhite">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-brand-teal/10 text-brand-teal border border-brand-teal/20 mb-4">
            Ethika Use Cases
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Where AI Can Create Immediate Value at Ethika
          </h2>
          <p className="text-brand-charcoal max-w-2xl mx-auto">
            Illustrative AI training use cases organized by department. These are example scenarios for workshop practice — not autonomous AI deployments.
          </p>
        </div>

        <div className="space-y-3 mb-10">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isOpen = openId === cat.id;
            return (
              <div
                key={cat.id}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${isOpen ? 'border-brand-teal/30 shadow-lg' : 'border-gray-200 bg-white hover:border-gray-300'}`}
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                  onClick={() => setOpenId(isOpen ? '' : cat.id)}
                  aria-expanded={isOpen}
                  id={`usecase-${cat.id}`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center border ${cat.color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className={`font-semibold text-brand-navy ${isOpen ? 'text-brand-teal' : ''}`}>
                      {cat.label}
                    </span>
                  </div>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-brand-teal flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 bg-white border-t border-gray-100">
                    <ul className="space-y-2.5 mt-4">
                      {cat.examples.map((ex, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-brand-charcoal">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-teal mt-2 flex-shrink-0" />
                          {ex.example}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Responsible AI note */}
        <div className="bg-brand-navy/5 border border-brand-navy/10 rounded-xl px-6 py-4 flex gap-3">
          <Shield className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
          <p className="text-sm text-brand-charcoal leading-relaxed">
            <strong className="text-brand-navy">Responsible AI Note:</strong> These are illustrative training use cases. AI outputs should remain subject to human review, organizational policy, confidentiality requirements and applicable regulatory/compliance controls. AI should not make autonomous decisions on underwriting, claims, legal or financial matters.
          </p>
        </div>
      </div>
    </section>
  );
}
