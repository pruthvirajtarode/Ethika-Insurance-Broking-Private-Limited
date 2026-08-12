import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap } from 'lucide-react';

export function ExecutiveRecommendation() {
  return (
    <section id="recommendation" className="py-24 bg-gradient-to-br from-brand-navy-dark via-brand-navy to-[#0f2a2a] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-brand-teal/6 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-teal/15 text-brand-teal border border-brand-teal/30 text-xs font-bold uppercase tracking-widest mb-10">
          <Zap className="w-3.5 h-3.5" />
          Our Recommendation
        </div>

        {/* Large statement */}
        <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto">
          "For Ethika, the strongest workshop is not necessarily the one with the largest AI curriculum.
          <br />
          <span className="font-bold text-white">
            It is the one employees can apply the next morning."
          </span>
        </blockquote>

        <div className="h-px w-24 bg-brand-teal/40 mx-auto mb-8" />

        <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed mb-4">
          Be10X recommends a practical, role-relevant and outcome-oriented AI workshop designed to help Ethika employees move from AI awareness to AI-enabled execution.
        </p>

        <p className="text-base text-brand-teal font-semibold mb-12">
          Don't choose AI training by the number of tools taught. Choose it by how much capability employees can take back to work.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:hello@be10x.in"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-brand-teal hover:bg-brand-teal-dark text-white font-bold text-base transition-all shadow-xl shadow-brand-teal/25 group"
            id="cta-partner"
          >
            Partner with Be10X to Make Ethika AI-Ready
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <Link
            to="/workshop"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 text-white font-medium text-base transition-all border border-white/20"
            id="cta-view-workshop"
          >
            View Proposed Workshop
          </Link>
        </div>
      </div>
    </section>
  );
}
