import React, { useState } from 'react';
import { Mail, Edit3, Loader2, ArrowRight, Flag } from 'lucide-react';
import { aiService } from '../../services/aiService';

export function CommunicationCopilot() {
  const [loading, setLoading] = useState(false);
  const [draft, setDraft] = useState<any>(null);

  const clientMessage = "I have been waiting for an update on my claim and nobody has responded. It's been 4 days since I submitted the documents. Please tell me what's going on!";

  const handleDraft = async () => {
    setLoading(true);
    try {
      const res = await aiService.draftClientResponse(clientMessage);
      setDraft(res);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm flex flex-col min-h-[600px] md:h-[600px] h-auto">
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
        <div>
          <h2 className="text-2xl font-bold text-brand-navy">Communication Copilot</h2>
          <p className="text-sm text-gray-500">Drafting empathetic and professional client responses</p>
        </div>
        <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">
          Demo Module 4
        </span>
      </div>

      <div className="flex flex-col flex-grow overflow-hidden">
        {/* Client Message */}
        <div className="bg-gray-50 rounded-xl p-5 mb-4 border border-gray-200 shadow-inner">
          <div className="flex items-center gap-2 mb-2">
            <Mail className="w-4 h-4 text-gray-500" />
            <span className="font-semibold text-sm text-gray-700">Incoming Client Message</span>
          </div>
          <p className="text-gray-800 text-sm">"{clientMessage}"</p>
        </div>

        <div className="flex justify-center mb-4">
          <button
            onClick={handleDraft}
            disabled={loading}
            className="bg-brand-teal hover:bg-brand-teal-dark text-white px-6 py-2.5 rounded-full font-medium transition-colors shadow-md flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Edit3 className="w-4 h-4" />}
            {loading ? 'Drafting Response...' : 'AI Generate Response Draft'}
          </button>
        </div>

        {/* AI Output */}
        <div className="flex-grow flex flex-col md:flex-row gap-4 overflow-hidden">
          <div className="flex-1 bg-white border border-gray-200 rounded-xl flex flex-col shadow-sm overflow-hidden">
            <div className="bg-brand-navy/5 px-4 py-2 border-b border-gray-100 flex items-center justify-between">
              <span className="text-xs font-bold text-brand-navy uppercase tracking-wider">Suggested Draft</span>
            </div>
            <div className="p-4 flex-grow overflow-y-auto bg-gray-50">
              {draft ? (
                <div className="whitespace-pre-wrap text-sm text-gray-700 font-sans">{draft.draft}</div>
              ) : (
                <div className="h-full flex items-center justify-center text-gray-300 text-sm italic">
                  Awaiting generation...
                </div>
              )}
            </div>
            {draft && (
              <div className="p-3 border-t border-gray-200 bg-white flex justify-end">
                <button className="text-xs font-medium text-brand-teal flex items-center gap-1 hover:underline">
                  Review & Send <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            )}
          </div>

          <div className="w-full md:w-1/3 flex flex-col gap-4">
            <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
              <span className="block text-xs font-bold text-gray-400 uppercase mb-2">Intent Analysis</span>
              {draft ? (
                <div>
                  <p className="text-sm font-medium text-brand-navy mb-2">{draft.intent}</p>
                  <span className="inline-block bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded">Priority: {draft.priority}</span>
                </div>
              ) : (
                <p className="text-sm text-gray-300">-</p>
              )}
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 shadow-sm flex-grow">
              <span className="flex items-center gap-1 text-xs font-bold text-yellow-700 uppercase mb-2">
                <Flag className="w-3 h-3" /> Internal Note
              </span>
              {draft ? (
                <p className="text-sm text-yellow-800 leading-relaxed">{draft.internalNote}</p>
              ) : (
                <p className="text-sm text-yellow-300">-</p>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-4 text-center">
         <p className="text-xs text-gray-400">AI-generated draft — <span className="font-semibold text-brand-navy">human review required before sending.</span></p>
      </div>
    </div>
  );
}
