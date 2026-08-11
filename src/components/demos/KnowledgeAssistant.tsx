import React, { useState } from 'react';
import { Search, Info, CheckCircle2, Loader2, BookOpen } from 'lucide-react';
import { aiService } from '../../services/aiService';

export function KnowledgeAssistant() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setResult(null);
    try {
      const res = await aiService.searchKnowledge(query);
      setResult(res);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm flex flex-col min-h-[600px] md:h-[600px] h-auto">
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
        <div>
          <h2 className="text-2xl font-bold text-brand-navy">Ethika Knowledge Copilot</h2>
          <p className="text-sm text-gray-500">Internal SOPs and Guidelines Assistant</p>
        </div>
        <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">
          Demo Module 3
        </span>
      </div>

      <div className="relative mb-8">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          placeholder="Ask a question about HR, Claims, or Operations SOPs..."
          className="w-full bg-gray-50 border border-gray-300 rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition-all shadow-inner"
        />
        <Search className="absolute left-4 top-4 w-6 h-6 text-gray-400" />
        <button
          onClick={handleSearch}
          disabled={loading || !query.trim()}
          className="absolute right-2 top-2 bottom-2 px-6 bg-brand-navy hover:bg-brand-navy-dark text-white rounded-lg font-medium disabled:opacity-50 transition-colors flex items-center justify-center min-w-[100px]"
        >
          {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Search'}
        </button>
      </div>

      <div className="flex-grow flex flex-col items-center justify-center">
        {!result && !loading && (
          <div className="text-center max-w-md">
            <BookOpen className="w-16 h-16 text-gray-200 mx-auto mb-4" />
            <h3 className="font-semibold text-gray-700 mb-2">Try asking:</h3>
            <div className="flex flex-col gap-2">
              {['How should a new employee be onboarded?', 'Where can I find the claims escalation process?'].map((q) => (
                <button
                  key={q}
                  onClick={() => { setQuery(q); }}
                  className="text-sm text-brand-teal hover:underline text-left bg-brand-teal/5 px-4 py-2 rounded-lg"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        )}

        {loading && (
          <Loader2 className="w-10 h-10 animate-spin text-brand-teal" />
        )}

        {result && !loading && (
          <div className="w-full h-full flex flex-col">
            <div className="bg-brand-teal/5 border border-brand-teal/20 rounded-xl p-6 relative flex-grow overflow-y-auto">
              <div className="absolute top-4 right-4 flex items-center gap-1 bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-bold border border-green-200">
                <CheckCircle2 className="w-3 h-3" />
                Confidence: {result.confidence}%
              </div>
              <h3 className="font-bold text-brand-navy mb-4">AI Answer:</h3>
              <p className="text-gray-700 leading-relaxed mb-6">{result.answer}</p>
              
              <div className="bg-white rounded-lg p-3 border border-gray-100 inline-flex items-center gap-2 text-sm text-gray-600 shadow-sm">
                <BookOpen className="w-4 h-4 text-brand-teal" />
                <span className="font-medium text-gray-800">Source:</span> {result.source}
              </div>
            </div>
            
            <div className="mt-4 flex items-start gap-2 text-xs text-gray-400">
              <Info className="w-4 h-4 flex-shrink-0 text-blue-500" />
              <p>
                Illustrative knowledge base — not connected to Ethika internal systems. Human verification required for critical operational processes.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
