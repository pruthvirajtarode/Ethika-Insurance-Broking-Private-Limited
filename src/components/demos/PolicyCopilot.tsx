import React, { useState } from 'react';
import { FileText, Send, Loader2, AlertTriangle } from 'lucide-react';
import { aiService } from '../../services/aiService';

export function PolicyCopilot() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!question.trim()) return;
    setLoading(true);
    setAnswer('');
    try {
      const response = await aiService.answerPolicyQuestion(question);
      setAnswer(response);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm flex flex-col min-h-[600px] md:h-[600px] h-auto">
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
        <div>
          <h2 className="text-2xl font-bold text-brand-navy">Policy Copilot</h2>
          <p className="text-sm text-gray-500">Document Q&A using synthetic policy data</p>
        </div>
        <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">
          Demo Module 1
        </span>
      </div>

      <div className="bg-gray-50 rounded-xl p-4 mb-6 flex items-start gap-3 border border-gray-200">
        <FileText className="w-6 h-6 text-brand-teal mt-1" />
        <div>
          <p className="font-semibold text-brand-navy">Active Document: Group Health Policy (Synthetic)</p>
          <p className="text-xs text-gray-500">POL-DEMO-001 • 45 Pages • Uploaded 2 mins ago</p>
        </div>
      </div>

      <div className="flex-grow overflow-y-auto mb-6 bg-white border border-gray-200 rounded-xl p-6 shadow-inner">
        {answer ? (
          <div className="bg-brand-teal/5 p-5 rounded-lg border border-brand-teal/20 text-brand-navy leading-relaxed">
            <p className="font-medium mb-2 text-brand-teal">AI Response:</p>
            {answer}
          </div>
        ) : (
          <div className="h-full flex flex-col items-center justify-center text-gray-400 space-y-4">
            <FileText className="w-12 h-12 opacity-20" />
            <p>Ask a question about the uploaded document.</p>
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {['What is the room rent limit?', 'What are the exclusions?', 'Summarize this policy'].map((q) => (
                <button
                  key={q}
                  onClick={() => setQuestion(q)}
                  className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-600 px-3 py-1.5 rounded-full transition-colors"
                >
                  "{q}"
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="relative">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleAsk()}
          placeholder="Ask a question about the policy..."
          className="w-full bg-gray-50 border border-gray-300 rounded-xl pl-4 pr-12 py-4 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition-all"
        />
        <button
          onClick={handleAsk}
          disabled={loading || !question.trim()}
          className="absolute right-2 top-2 bottom-2 aspect-square bg-brand-teal hover:bg-brand-teal-dark text-white rounded-lg flex items-center justify-center disabled:opacity-50 transition-colors"
        >
          {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5 ml-1" />}
        </button>
      </div>

      <div className="mt-4 flex items-start gap-2 text-xs text-gray-400">
        <AlertTriangle className="w-4 h-4 flex-shrink-0 text-yellow-500" />
        <p>
          Synthetic data — for demonstration purposes only. Do not provide real insurance advice based on this demo.
        </p>
      </div>
    </div>
  );
}
