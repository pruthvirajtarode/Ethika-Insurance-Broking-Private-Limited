import React from 'react';

const timelineEvents = [
  {
    time: '0–5 MIN',
    title: 'AI in Insurance',
    description: 'What modern AI can actually do, where it creates value, and the difference between Automation and AI Copilots.',
    demo: false,
  },
  {
    time: '5–15 MIN',
    title: 'AI for Everyday Productivity',
    description: 'Demonstrating email summarization, meeting notes, professional response generation, and basic information extraction.',
    demo: true,
  },
  {
    time: '15–30 MIN',
    title: 'AI for Insurance Operations',
    description: 'Policy document Q&A, claims summarization, and coverage explanation using synthetic policy documents.',
    demo: true,
  },
  {
    time: '30–42 MIN',
    title: 'AI for HR / Employee Benefits',
    description: 'Employee benefits assistant, FAQ generation, HR communication, and employee query routing.',
    demo: true,
  },
  {
    time: '42–52 MIN',
    title: 'AI Analytics & Decision Support',
    description: 'Synthetic claims data analysis, renewal trend identification, and natural-language data analysis.',
    demo: true,
  },
  {
    time: '52–58 MIN',
    title: 'Responsible AI',
    description: 'Discussing privacy, data protection, hallucinations, and why the human-in-the-loop remains critical.',
    demo: false,
  },
  {
    time: '58–60 MIN',
    title: 'Next Steps',
    description: 'From Workshop → Pilot → Production.',
    demo: false,
  },
];

export function WorkshopTimeline() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block bg-brand-teal/10 text-brand-teal-dark px-4 py-1.5 rounded-full font-medium text-sm mb-4">
            Workshop Agenda
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">60 Minutes. 5 Practical AI Experiences.</h2>
          <p className="text-lg text-gray-600">
            A fast-paced, interactive session focused on practical applications rather than theory.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-brand-navy/10 ml-4 md:ml-0 md:pl-0 pl-8 space-y-12">
            {timelineEvents.map((event, idx) => (
              <div key={idx} className="relative md:flex items-start group">
                {/* Timeline Dot */}
                <div className="absolute -left-[41px] md:static md:w-1/4 md:pr-8 md:text-right flex md:block items-center justify-start md:justify-end mt-1 md:mt-0">
                  <div className="hidden md:block text-brand-teal font-bold text-lg mb-1">{event.time}</div>
                  <div className="w-5 h-5 rounded-full bg-white border-4 border-brand-teal z-10 relative md:absolute md:left-1/4 md:-translate-x-[11px] md:top-1.5 shadow-sm group-hover:scale-125 transition-transform" />
                </div>
                
                {/* Content */}
                <div className="md:w-3/4 md:pl-12">
                  <div className="md:hidden text-brand-teal font-bold text-sm mb-1">{event.time}</div>
                  <h3 className="text-xl font-bold text-brand-navy mb-2 flex items-center gap-2">
                    {event.title}
                    {event.demo && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-700 uppercase tracking-wider">
                        Live Demo
                      </span>
                    )}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
