import React, { useState } from 'react';
import { PolicyCopilot } from '../components/demos/PolicyCopilot';
import { ClaimsIntelligence } from '../components/demos/ClaimsIntelligence';
import { KnowledgeAssistant } from '../components/demos/KnowledgeAssistant';
import { CommunicationCopilot } from '../components/demos/CommunicationCopilot';
import { RenewalIntelligence } from '../components/demos/RenewalIntelligence';
import { PromptLab } from '../components/demos/PromptLab';
import { MonitorPlay, ChevronLeft, ChevronRight, LayoutDashboard, Presentation } from 'lucide-react';
import { cn } from '../utils/cn';

const demos = [
  { id: 'policy', name: 'Policy Copilot', component: PolicyCopilot },
  { id: 'claims', name: 'Claims Intelligence', component: ClaimsIntelligence },
  { id: 'knowledge', name: 'Knowledge Copilot', component: KnowledgeAssistant },
  { id: 'communication', name: 'Communication Copilot', component: CommunicationCopilot },
  { id: 'renewal', name: 'Renewal Intelligence', component: RenewalIntelligence },
  { id: 'prompt', name: 'Prompt Lab', component: PromptLab },
];

const presenterNotes: Record<string, any> = {
  policy: { time: '8 minutes', message: 'AI reduces the time required to find and understand information, but the human reviewer remains responsible for the final interpretation.', transition: 'Now let\'s see how the same approach can help claims teams.' },
  claims: { time: '10 minutes', message: 'AI can synthesize unstructured claim data into actionable insights, highlighting missing documents before a human even touches the file.', transition: 'But what about internal knowledge? Let\'s look at HR and Operations.' },
  knowledge: { time: '6 minutes', message: 'Accelerate onboarding and ensure consistent answers to internal queries using an AI trained only on approved SOPs.', transition: 'Next, let\'s see how AI can help us communicate these answers to the client.' },
  communication: { time: '8 minutes', message: 'AI can draft empathetic, professional responses and identify urgency, acting as a first-pass filter.', transition: 'Finally, how do we look at data at a portfolio level?' },
  renewal: { time: '8 minutes', message: 'Synthesizing portfolio trends into an actionable brief prepares the account manager for a proactive renewal discussion.', transition: 'Before we wrap up, let\'s briefly look at how we instruct these models.' },
  prompt: { time: '5 minutes', message: 'Prompt engineering is a critical skill. Context and constraints are just as important as the task itself.', transition: 'That concludes the practical demonstrations.' },
};

export default function Demos() {
  const [activeDemo, setActiveDemo] = useState(0);
  const [presentationMode, setPresentationMode] = useState(false);
  const [presenterMode, setPresenterMode] = useState(false);

  const CurrentDemo = demos[activeDemo].component;
  const currentNote = presenterNotes[demos[activeDemo].id];

  const handleNext = () => {
    if (activeDemo < demos.length - 1) setActiveDemo(activeDemo + 1);
  };

  const handlePrev = () => {
    if (activeDemo > 0) setActiveDemo(activeDemo - 1);
  };

  // Keyboard navigation for presentation mode
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!presentationMode) return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') setPresentationMode(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [presentationMode, activeDemo]);

  if (presentationMode) {
    return (
      <div className="fixed inset-0 z-50 bg-gray-100 flex flex-col">
        {/* Presentation Header */}
        <div className="bg-brand-navy text-white px-6 py-4 flex items-center justify-between shadow-md z-10">
          <div className="flex items-center gap-4">
            <span className="font-bold text-xl">AI at Ethika — Interactive Workshop</span>
            <span className="bg-white/10 px-3 py-1 rounded text-sm text-brand-teal-light">{demos[activeDemo].name}</span>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setPresenterMode(!presenterMode)}
              className={cn("px-4 py-2 rounded text-sm font-medium transition-colors border", presenterMode ? "bg-brand-teal text-white border-brand-teal" : "border-white/20 hover:bg-white/10")}
            >
              <Presentation className="w-4 h-4 inline-block mr-2" />
              Presenter Mode {presenterMode ? 'ON' : 'OFF'}
            </button>
            <button onClick={() => setPresentationMode(false)} className="text-gray-400 hover:text-white text-sm">
              Press ESC to exit
            </button>
          </div>
        </div>

        {/* Presenter Panel (if active) */}
        {presenterMode && (
          <div className="bg-brand-navy-dark text-white p-4 border-b border-white/10 grid grid-cols-4 gap-4 shadow-inner">
            <div className="col-span-1">
              <span className="text-xs font-bold text-gray-500 uppercase block mb-1">Time Allocation</span>
              <span className="text-lg font-mono text-brand-teal-light">{currentNote.time}</span>
            </div>
            <div className="col-span-2 border-l border-white/10 pl-4">
              <span className="text-xs font-bold text-gray-500 uppercase block mb-1">Key Message</span>
              <p className="text-sm italic">"{currentNote.message}"</p>
            </div>
            <div className="col-span-1 border-l border-white/10 pl-4">
              <span className="text-xs font-bold text-gray-500 uppercase block mb-1">Suggested Transition</span>
              <p className="text-sm text-gray-400">{currentNote.transition}</p>
            </div>
          </div>
        )}

        {/* Presentation Content */}
        <div className="flex-grow flex items-center justify-center p-8 overflow-hidden relative">
          <button 
            onClick={handlePrev} 
            disabled={activeDemo === 0}
            className="absolute left-8 z-10 p-4 rounded-full bg-white shadow-lg disabled:opacity-30 hover:bg-gray-50 transition-all"
          >
            <ChevronLeft className="w-8 h-8 text-brand-navy" />
          </button>
          
          <div className="w-full max-w-6xl max-h-full transition-all transform duration-500">
            <CurrentDemo />
          </div>

          <button 
            onClick={handleNext} 
            disabled={activeDemo === demos.length - 1}
            className="absolute right-8 z-10 p-4 rounded-full bg-brand-teal shadow-lg disabled:opacity-30 hover:bg-brand-teal-dark transition-all"
          >
            <ChevronRight className="w-8 h-8 text-white" />
          </button>
        </div>
        
        {/* Progress bar */}
        <div className="h-2 bg-gray-200">
          <div 
            className="h-full bg-brand-teal transition-all duration-300"
            style={{ width: `${((activeDemo + 1) / demos.length) * 100}%` }}
          />
        </div>
      </div>
    );
  }

  // Standard Page View
  return (
    <div className="pt-24 min-h-screen bg-gray-50 pb-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h1 className="text-4xl font-bold text-brand-navy mb-4">Interactive AI Demonstrations</h1>
            <p className="text-xl text-gray-600">
              Experience how AI can accelerate workflows across Ethika's operations.
            </p>
          </div>
          <button
            onClick={() => setPresentationMode(true)}
            className="bg-brand-navy hover:bg-brand-navy-dark text-white px-6 py-3 rounded-xl font-medium transition-colors shadow-lg flex items-center justify-center gap-2"
          >
            <MonitorPlay className="w-5 h-5" />
            Enter Presentation Mode
          </button>
        </div>

        {/* Demo Navigation Tabs */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-2 mb-8 overflow-x-auto whitespace-nowrap hide-scrollbar flex gap-2">
          {demos.map((demo, idx) => (
            <button
              key={demo.id}
              onClick={() => setActiveDemo(idx)}
              className={cn(
                "px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 flex items-center gap-2",
                activeDemo === idx 
                  ? "bg-brand-teal text-white shadow-md" 
                  : "text-gray-600 hover:bg-gray-100"
              )}
            >
              <LayoutDashboard className="w-4 h-4" />
              {demo.name}
            </button>
          ))}
        </div>

        {/* Standard Demo Container */}
        <div className="transition-opacity duration-300">
          <CurrentDemo />
        </div>
      </div>
    </div>
  );
}
