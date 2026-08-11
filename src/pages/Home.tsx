import React from 'react';
import { Hero } from '../components/home/Hero';
import { ExecutiveSnapshot } from '../components/home/ExecutiveSnapshot';
import { OpportunityMap } from '../components/home/OpportunityMap';
import { WorkshopTimeline } from '../components/home/WorkshopTimeline';
import { BusinessImpact } from '../components/home/BusinessImpact';
import { BeforeAfter } from '../components/home/BeforeAfter';
import { Roadmap } from '../components/home/Roadmap';
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

function WorkshopOutcomes() {
  const outcomes = [
    'Practical understanding of AI',
    'Real insurance-oriented examples',
    'Prompt engineering fundamentals',
    'Understanding of AI limitations',
    'Responsible AI awareness',
    'Ideas for department-specific use cases',
    'Understanding of AI copilots',
    'First-step roadmap for adoption'
  ];

  return (
    <section className="py-24 bg-brand-navy text-white text-center">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">What Participants Leave With</h2>
        <p className="text-xl text-brand-teal-light mb-12">
          Participants don't just hear about AI. They experience it.
        </p>
        
        <div className="grid sm:grid-cols-2 gap-4 text-left max-w-3xl mx-auto mb-16">
          {outcomes.map((outcome, idx) => (
            <div key={idx} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
              <CheckCircle2 className="w-5 h-5 text-brand-teal flex-shrink-0" />
              <span className="font-medium text-gray-200">{outcome}</span>
            </div>
          ))}
        </div>

        <Link
          to="/demos"
          className="inline-flex px-8 py-4 rounded-full bg-brand-teal hover:bg-brand-teal-dark text-white font-bold text-lg transition-all shadow-xl shadow-teal-500/20"
        >
          Let's Start With 60 Minutes
        </Link>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ExecutiveSnapshot />
      <OpportunityMap />
      <WorkshopTimeline />
      <BeforeAfter />
      <BusinessImpact />
      <Roadmap />
      <WorkshopOutcomes />
    </div>
  );
}
