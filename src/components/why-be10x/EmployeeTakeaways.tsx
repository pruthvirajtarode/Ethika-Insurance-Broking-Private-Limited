import React from 'react';
import { BookOpen, Lightbulb, Users, Wrench, FileText, Monitor, Table2, Workflow, Shield, Target, Award, LayoutTemplate } from 'lucide-react';

const deliverables = [
  {
    icon: BookOpen,
    title: 'AI Productivity Playbook',
    description: 'Role-organized guide covering AI tools, workflows and prompting strategies.',
    proposed: true,
  },
  {
    icon: Lightbulb,
    title: 'Prompt Engineering Cheat Sheet',
    description: 'Quick-reference guide to effective AI prompting techniques.',
    proposed: true,
  },
  {
    icon: Users,
    title: 'Role-Based Prompt Library',
    description: 'Pre-built prompts organized by Sales, Operations, HR, Management and more.',
    proposed: true,
  },
  {
    icon: Wrench,
    title: 'AI Tool Selection Guide',
    description: 'When to use which tool — practical decision framework.',
    proposed: true,
  },
  {
    icon: FileText,
    title: 'Research Workflow',
    description: 'Step-by-step AI-assisted research workflow for common business tasks.',
    proposed: true,
  },
  {
    icon: Monitor,
    title: 'Presentation Workflow',
    description: 'AI-assisted presentation creation from brief to finished deck.',
    proposed: true,
  },
  {
    icon: Table2,
    title: 'Excel + AI Workflow Guide',
    description: 'Using AI for formula generation, data analysis and Excel productivity.',
    proposed: true,
  },
  {
    icon: Workflow,
    title: 'Automation Workflow Guide',
    description: 'No-code automation patterns using AI tools.',
    proposed: true,
  },
  {
    icon: Shield,
    title: 'Responsible AI Checklist',
    description: 'Practical guidelines for safe, ethical and compliant AI use at work.',
    proposed: true,
  },
  {
    icon: Target,
    title: 'Personal AI Productivity Plan',
    description: 'Individual action plan identifying top AI opportunities for each employee.',
    proposed: true,
  },
  {
    icon: Award,
    title: 'Workshop Certificate',
    description: 'Certificate of participation for workshop completion.',
    proposed: false,
  },
  {
    icon: LayoutTemplate,
    title: 'Practical Examples & Templates',
    description: 'Real-world templates used during workshop exercises.',
    proposed: false,
  },
];

export function EmployeeTakeaways() {
  return (
    <section id="deliverables" className="py-20 bg-brand-offwhite">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-brand-teal/10 text-brand-teal border border-brand-teal/20 mb-4">
            Deliverables
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            What Employees Walk Away With
          </h2>
          <p className="text-brand-charcoal max-w-2xl mx-auto">
            The workshop produces tangible, reusable resources that employees can apply the next day.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {deliverables.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-gray-200 p-5 hover:border-brand-teal/40 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
              >
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-brand-teal/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-teal/20 transition-colors">
                    <Icon className="w-4 h-4 text-brand-teal" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="font-semibold text-brand-navy text-sm leading-snug">{item.title}</h3>
                      {item.proposed && (
                        <span className="text-[9px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded bg-blue-50 text-blue-600 border border-blue-200 flex-shrink-0 whitespace-nowrap">
                          Proposed
                        </span>
                      )}
                    </div>
                    <p className="text-gray-500 text-xs leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-xs text-gray-400 text-center max-w-3xl mx-auto">
          Items marked <span className="font-semibold text-blue-500">Proposed</span> are proposed Ethika Workshop Deliverables. Final scope to be confirmed as part of workshop agreement.
        </p>
      </div>
    </section>
  );
}
