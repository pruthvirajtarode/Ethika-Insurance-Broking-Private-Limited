import React from 'react';
import { Link } from 'react-router-dom';
import { BrainCircuit } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-brand-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <BrainCircuit className="w-8 h-8 text-brand-teal" />
              <span className="font-bold text-2xl tracking-tight">AI at Ethika</span>
            </div>
            <p className="text-gray-400 max-w-md text-sm leading-relaxed mb-6">
              Practical AI for Smarter Insurance, Benefits & Employee Experience. 
              A focused 60-minute workshop designed to demonstrate how modern AI can empower insurance teams.
            </p>
            <div className="inline-block bg-white/10 text-white text-xs px-3 py-1.5 rounded border border-white/20">
              Illustrative workshop proposal — not an existing Ethika product or production system.
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-brand-teal transition-colors">Home</Link></li>
              <li><Link to="/workshop" className="hover:text-brand-teal transition-colors">Workshop</Link></li>
              <li><Link to="/opportunities" className="hover:text-brand-teal transition-colors">AI Opportunities</Link></li>
              <li><Link to="/demos" className="hover:text-brand-teal transition-colors">Live Demos</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Important Info</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/responsible-ai" className="hover:text-brand-teal transition-colors">Responsible AI</Link></li>
              <li><Link to="/pitch-report" className="hover:text-brand-teal transition-colors">Pitch Report</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>
            Demo environment. Please do not upload real employee, medical, claim, policyholder, client or confidential information.
          </p>
          <p>
            &copy; {new Date().getFullYear()} AI Workshop Proposal
          </p>
        </div>
      </div>
    </footer>
  );
}
