import React, { useState } from 'react';
import { FileSearch, Activity, AlertTriangle, Loader2 } from 'lucide-react';
import { aiService } from '../../services/aiService';

export function ClaimsIntelligence() {
  const [loading, setLoading] = useState(false);
  const [summaryData, setSummaryData] = useState<any>(null);

  const claimNotes = `Patient: EMP-DEMO-001 (Northstar Tech)
Admission: 12-Aug-2026 to 15-Aug-2026
Diagnosis: Acute gastroenteritis with severe dehydration
Billed Amount: ₹45,000
Documents Received: Discharge summary (signed), final bill, pharmacy receipts.
Missing: Indoor case papers not attached to the portal submission.`;

  const handleAnalyze = async () => {
    setLoading(true);
    try {
      const res = await aiService.summarizeClaim(claimNotes);
      setSummaryData(res);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm flex flex-col h-[600px]">
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
        <div>
          <h2 className="text-2xl font-bold text-brand-navy">Claims Intelligence</h2>
          <p className="text-sm text-gray-500">AI-assisted claim review summary</p>
        </div>
        <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">
          Demo Module 2
        </span>
      </div>

      <div className="grid md:grid-cols-2 gap-6 flex-grow overflow-hidden">
        {/* Input Column */}
        <div className="flex flex-col">
          <h3 className="font-semibold text-brand-navy mb-3 flex items-center gap-2">
            <Activity className="w-4 h-4 text-brand-teal" />
            Raw Claim Notes (Synthetic)
          </h3>
          <div className="flex-grow bg-gray-50 border border-gray-200 rounded-xl p-4 font-mono text-sm text-gray-700 whitespace-pre-wrap overflow-y-auto shadow-inner">
            {claimNotes}
          </div>
          <button
            onClick={handleAnalyze}
            disabled={loading}
            className="mt-4 w-full bg-brand-navy hover:bg-brand-navy-dark text-white font-medium py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <FileSearch className="w-5 h-5" />}
            {loading ? 'Analyzing...' : 'Generate AI Summary'}
          </button>
        </div>

        {/* Output Column */}
        <div className="flex flex-col">
          <h3 className="font-semibold text-brand-navy mb-3">AI Extracted Summary</h3>
          <div className="flex-grow bg-white border border-gray-200 rounded-xl overflow-y-auto shadow-inner">
            {!summaryData && !loading && (
              <div className="h-full flex items-center justify-center text-gray-400 p-6 text-center">
                Click generate to let AI analyze the claim notes.
              </div>
            )}
            
            {loading && (
              <div className="h-full flex items-center justify-center text-brand-teal">
                <Loader2 className="w-8 h-8 animate-spin" />
              </div>
            )}

            {summaryData && !loading && (
              <div className="p-5 space-y-4">
                <div>
                  <span className="block text-xs font-bold text-gray-400 uppercase">Claim Summary</span>
                  <p className="text-sm text-brand-navy font-medium mt-1">{summaryData.summary}</p>
                </div>
                <div className="pt-3 border-t border-gray-100">
                  <span className="block text-xs font-bold text-gray-400 uppercase">Documents Status</span>
                  <p className="text-sm text-brand-navy mt-1">{summaryData.documents}</p>
                </div>
                <div className="pt-3 border-t border-gray-100">
                  <span className="block text-xs font-bold text-red-400 uppercase">Potential Missing Info</span>
                  <p className="text-sm text-red-700 bg-red-50 p-2 rounded mt-1">{summaryData.missingInfo}</p>
                </div>
                <div className="pt-3 border-t border-gray-100">
                  <span className="block text-xs font-bold text-brand-teal uppercase">Suggested Human Action</span>
                  <p className="text-sm text-brand-teal-dark bg-brand-teal/10 p-2 rounded mt-1 font-semibold">{summaryData.nextAction}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-6 p-3 bg-yellow-50 border border-yellow-200 rounded-lg flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
        <p className="text-xs text-yellow-800 leading-relaxed">
          <strong className="block mb-0.5">Important Safety Notice:</strong>
          AI assists the reviewer by surfacing information. Final approval or rejection decisions remain strictly with authorized human professionals. Synthetic data used for demonstration.
        </p>
      </div>
    </div>
  );
}
