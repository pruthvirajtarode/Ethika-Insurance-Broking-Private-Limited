import React, { useState } from 'react';
import { Terminal, Wand2, Loader2, Info } from 'lucide-react';
import { aiService } from '../../services/aiService';

export function PromptLab() {
  const [prompt, setPrompt] = useState('Summarize this.');
  const [improvedPrompt, setImprovedPrompt] = useState('');
  const [loading, setLoading] = useState(false);

  const handleImprove = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    try {
      const res = await aiService.improvePrompt(prompt);
      setImprovedPrompt(res);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-brand-navy rounded-3xl p-8 shadow-2xl flex flex-col min-h-[600px] md:h-[600px] h-auto border border-white/10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-teal rounded-full blur-[80px] opacity-20 pointer-events-none" />

      <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10 relative z-10">
        <div>
          <h2 className="text-2xl font-bold text-white">Prompt Lab</h2>
          <p className="text-sm text-brand-teal-light">Interactive prompt engineering playground</p>
        </div>
        <span className="bg-brand-teal/20 text-brand-teal-light text-xs font-bold px-2 py-1 rounded border border-brand-teal/30">
          Bonus Module
        </span>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 flex-grow relative z-10 overflow-hidden">
        {/* Input area */}
        <div className="flex-1 flex flex-col">
          <label className="text-sm font-semibold text-gray-300 mb-2 flex items-center gap-2">
            <Terminal className="w-4 h-4 text-gray-400" />
            Your Prompt
          </label>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="flex-grow bg-white/5 border border-white/20 rounded-xl p-4 text-white placeholder-white/30 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal resize-none font-mono text-sm"
            placeholder="Type a basic prompt..."
          />
          <button
            onClick={handleImprove}
            disabled={loading || !prompt.trim()}
            className="mt-4 bg-brand-teal hover:bg-brand-teal-dark text-white font-medium py-3 rounded-xl transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Wand2 className="w-5 h-5" />}
            Improve Prompt
          </button>
        </div>

        {/* Output area */}
        <div className="flex-1 flex flex-col">
          <label className="text-sm font-semibold text-gray-300 mb-2">
            Better Prompt (Role + Task + Context + Output Format)
          </label>
          <div className="flex-grow bg-[#0f172a] border border-[#1e293b] rounded-xl p-4 overflow-y-auto shadow-inner relative group">
            {!improvedPrompt && !loading && (
              <div className="h-full flex items-center justify-center text-gray-600 text-center text-sm px-4">
                See how adding role, context, and constraints transforms a weak prompt into a powerful instruction.
              </div>
            )}
            
            {loading && (
              <div className="h-full flex items-center justify-center text-brand-teal">
                <Loader2 className="w-8 h-8 animate-spin" />
              </div>
            )}

            {improvedPrompt && !loading && (
              <div className="text-green-400 font-mono text-sm whitespace-pre-wrap leading-relaxed">
                {improvedPrompt}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-start gap-2 text-xs text-brand-teal-light/70 relative z-10">
        <Info className="w-4 h-4 flex-shrink-0" />
        <p>
          Prompt literacy is the foundation of AI adoption. Understanding how to instruct AI dramatically improves the quality and safety of its output.
        </p>
      </div>
    </div>
  );
}
