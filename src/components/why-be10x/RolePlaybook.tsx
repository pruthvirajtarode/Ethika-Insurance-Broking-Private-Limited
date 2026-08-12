import React, { useState } from 'react';

interface PlaybookEntry {
  task: string;
  aiOpportunity: string;
  tool: string;
  output: string;
  examplePrompt: string;
}

interface RoleData {
  id: string;
  label: string;
  color: string;
  activeColor: string;
  entries: PlaybookEntry[];
}

const roles: RoleData[] = [
  {
    id: 'sales',
    label: 'Sales',
    color: 'text-gray-500 border-gray-200 hover:border-brand-teal/40',
    activeColor: 'text-brand-teal border-brand-teal bg-brand-teal/8',
    entries: [
      {
        task: 'Prepare personalized follow-up after client meeting',
        aiOpportunity: 'Turn meeting notes into a structured follow-up message',
        tool: 'AI writing assistant + document workflow',
        output: 'Professional, client-ready follow-up email',
        examplePrompt:
          'You are a B2B insurance sales professional at Ethika. I had a meeting with [Client Name] at [Company] about their employee health insurance renewal. Key discussion points: [notes]. Draft a professional follow-up email that summarizes our discussion, addresses their main concern about [concern], and proposes the next step of [action].',
      },
      {
        task: 'Research a prospect company before a first call',
        aiOpportunity: 'Summarize company background, size and insurance needs',
        tool: 'AI research assistant',
        output: 'One-page prospect brief with talking points',
        examplePrompt:
          'Research [Company Name], a company in [Industry]. Provide: (1) company overview, (2) estimated employee count, (3) likely employee benefit challenges, (4) recent news, (5) three opening questions I should ask as an insurance broker.',
      },
    ],
  },
  {
    id: 'operations',
    label: 'Operations',
    color: 'text-gray-500 border-gray-200 hover:border-blue-400/40',
    activeColor: 'text-blue-400 border-blue-400 bg-blue-400/8',
    entries: [
      {
        task: 'Summarize a long policy document',
        aiOpportunity: 'Extract key coverage points and exclusions from dense text',
        tool: 'AI document assistant',
        output: 'Plain-language policy summary with key highlights',
        examplePrompt:
          'Summarize the following insurance policy document. Focus on: (1) what is covered, (2) what is excluded, (3) key limits and sub-limits, (4) important conditions. Present this as a clear, readable summary for a non-specialist. Policy text: [paste text]',
      },
      {
        task: 'Draft a standard operating procedure',
        aiOpportunity: 'Generate an SOP draft from process notes',
        tool: 'AI writing assistant',
        output: 'Structured SOP with numbered steps',
        examplePrompt:
          'Create a standard operating procedure for the following process at an insurance brokerage: [describe process]. Format as: Purpose, Scope, Responsibilities, Step-by-step procedure, Quality checks.',
      },
    ],
  },
  {
    id: 'hr',
    label: 'HR',
    color: 'text-gray-500 border-gray-200 hover:border-purple-400/40',
    activeColor: 'text-purple-400 border-purple-400 bg-purple-400/8',
    entries: [
      {
        task: 'Write a job description for a new role',
        aiOpportunity: 'Draft a complete JD from role notes and requirements',
        tool: 'AI writing assistant',
        output: 'Professional, structured job description',
        examplePrompt:
          'Write a job description for a [Job Title] role at Ethika Insurance Broking. Key responsibilities include: [list]. Required skills: [list]. Company context: Ethika is a technology-driven insurance broker focused on employee health benefits. Tone: professional but approachable.',
      },
      {
        task: 'Analyze employee survey responses',
        aiOpportunity: 'Identify themes and sentiment from open-ended responses',
        tool: 'AI analysis assistant',
        output: 'Thematic summary with key insights',
        examplePrompt:
          'Analyze these employee survey responses and identify the top 5 themes, overall sentiment, and 3 recommended actions for HR. Responses: [paste text]',
      },
    ],
  },
  {
    id: 'management',
    label: 'Management',
    color: 'text-gray-500 border-gray-200 hover:border-amber-400/40',
    activeColor: 'text-amber-400 border-amber-400 bg-amber-400/8',
    entries: [
      {
        task: 'Prepare an executive summary of a business report',
        aiOpportunity: 'Condense a lengthy report into a leadership-ready brief',
        tool: 'AI summarization assistant',
        output: 'One-page executive summary with key conclusions',
        examplePrompt:
          'Create a concise executive summary of the following report for a leadership team. Include: (1) key findings, (2) critical numbers, (3) risks and opportunities, (4) recommended actions. Report: [paste text]',
      },
      {
        task: 'Prepare for a board or leadership presentation',
        aiOpportunity: 'Structure the narrative and create slide outlines',
        tool: 'AI presentation assistant',
        output: 'Slide-by-slide outline with talking points',
        examplePrompt:
          'I need to present [topic] to the leadership team. The key message is [message]. Audience: senior management with 20 minutes available. Create a slide outline with: slide title, 3 key points per slide, and suggested supporting data or visuals.',
      },
    ],
  },
  {
    id: 'client',
    label: 'Client Servicing',
    color: 'text-gray-500 border-gray-200 hover:border-emerald-400/40',
    activeColor: 'text-emerald-400 border-emerald-400 bg-emerald-400/8',
    entries: [
      {
        task: 'Prepare for a client renewal discussion',
        aiOpportunity: 'Draft a renewal preparation document with key points',
        tool: 'AI document assistant',
        output: 'Structured renewal brief for the client meeting',
        examplePrompt:
          'Prepare a renewal discussion brief for client [Company Name]. Their policy renews on [date]. Current plan: [details]. Last year challenges: [issues]. Create a structured discussion guide covering: renewal highlights, potential enhancements, cost considerations and next steps.',
      },
      {
        task: 'Respond to a complex client query',
        aiOpportunity: 'Draft a clear, accurate response from policy information',
        tool: 'AI writing assistant',
        output: 'Professional client-facing response email',
        examplePrompt:
          'A client asked: "[query]". Based on this policy information: [details]. Draft a professional, empathetic response that clearly answers their question, notes any important limitations, and suggests the next step if needed.',
      },
    ],
  },
  {
    id: 'marketing',
    label: 'Marketing',
    color: 'text-gray-500 border-gray-200 hover:border-rose-400/40',
    activeColor: 'text-rose-400 border-rose-400 bg-rose-400/8',
    entries: [
      {
        task: 'Create content for LinkedIn about Ethika services',
        aiOpportunity: 'Generate engaging, on-brand social content',
        tool: 'AI writing assistant',
        output: 'Ready-to-publish social media post',
        examplePrompt:
          'Write a LinkedIn post for Ethika Insurance Broking about [topic]. Tone: professional, approachable, human-centred. Audience: HR leaders and business owners. Include a clear value statement, one key insight and a call to action. Limit: 200 words.',
      },
    ],
  },
  {
    id: 'finance',
    label: 'Finance / Admin',
    color: 'text-gray-500 border-gray-200 hover:border-cyan-400/40',
    activeColor: 'text-cyan-400 border-cyan-400 bg-cyan-400/8',
    entries: [
      {
        task: 'Create a complex Excel formula',
        aiOpportunity: 'Generate, explain and troubleshoot formulas using AI',
        tool: 'AI coding/formula assistant',
        output: 'Correct Excel formula with explanation',
        examplePrompt:
          'I need an Excel formula that [describe what you want to calculate]. My data is in columns [describe columns]. The formula should [conditions]. Also explain what each part of the formula does.',
      },
    ],
  },
];

export function RolePlaybook() {
  const [activeTab, setActiveTab] = useState('sales');
  const activeRole = roles.find((r) => r.id === activeTab)!;

  return (
    <section id="role-playbook" className="py-20 bg-[#0a1628]">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-brand-teal/15 text-brand-teal border border-brand-teal/25 mb-4">
            Role-Based AI Playbook
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            AI Workflows by Role
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Select your role to see practical AI use cases, tools, expected outputs and example prompts.
          </p>
        </div>

        {/* Tab bar */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {roles.map((role) => (
            <button
              key={role.id}
              onClick={() => setActiveTab(role.id)}
              className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                activeTab === role.id ? role.activeColor : role.color
              }`}
              id={`tab-${role.id}`}
            >
              {role.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="space-y-6">
          {activeRole.entries.map((entry, idx) => (
            <div
              key={idx}
              className="bg-white/4 border border-white/8 rounded-2xl overflow-hidden hover:border-white/15 transition-colors"
            >
              {/* Header */}
              <div className="px-6 py-4 bg-white/3 border-b border-white/5">
                <h3 className="font-bold text-white text-base">{entry.task}</h3>
              </div>

              {/* Grid of fields */}
              <div className="p-6 grid sm:grid-cols-2 gap-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5">AI Opportunity</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{entry.aiOpportunity}</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5">Tool Category</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{entry.tool}</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1.5">Expected Output</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{entry.output}</p>
                </div>
              </div>

              {/* Prompt */}
              <div className="px-6 pb-6">
                <p className="text-xs font-bold uppercase tracking-widest text-brand-teal mb-2">Example Prompt</p>
                <div className="bg-brand-navy rounded-xl p-4 font-mono text-xs text-gray-300 leading-relaxed border border-brand-teal/20 whitespace-pre-wrap">
                  {entry.examplePrompt}
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  * Replace bracketed placeholders with real information. Review all AI outputs before use.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
