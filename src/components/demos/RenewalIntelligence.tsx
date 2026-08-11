import React, { useState } from 'react';
import { BarChart3, TrendingUp, Lightbulb, Loader2, AlertCircle } from 'lucide-react';
import { aiService } from '../../services/aiService';

export function RenewalIntelligence() {
  const [loading, setLoading] = useState(false);
  const [brief, setBrief] = useState<any>(null);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const res = await aiService.generateRenewalBrief();
      setBrief(res);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm flex flex-col h-[600px]">
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
        <div>
          <h2 className="text-2xl font-bold text-brand-navy">Renewal Intelligence</h2>
          <p className="text-sm text-gray-500">Decision support for client renewals</p>
        </div>
        <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">
          Demo Module 5
        </span>
      </div>

      <div className="grid md:grid-cols-2 gap-6 flex-grow overflow-hidden">
        {/* Data Column */}
        <div className="flex flex-col">
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-4">
            <h3 className="font-semibold text-brand-navy mb-4 flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-brand-teal" />
              Synthetic Portfolio Data
            </h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-500 mb-1">Client</p>
                <p className="font-medium text-brand-navy">Northstar Tech</p>
              </div>
              <div>
                <p className="text-gray-500 mb-1">Employees</p>
                <p className="font-medium text-brand-navy">150</p>
              </div>
              <div>
                <p className="text-gray-500 mb-1">Previous Premium</p>
                <p className="font-medium text-brand-navy">₹15,00,000</p>
              </div>
              <div>
                <p className="text-gray-500 mb-1">Total Claims Amt</p>
                <p className="font-medium text-red-600">₹16,80,000</p>
              </div>
              <div>
                <p className="text-gray-500 mb-1">Claims Ratio</p>
                <p className="font-bold text-red-600">112%</p>
              </div>
              <div>
                <p className="text-gray-500 mb-1">Trend</p>
                <div className="flex items-center gap-1 text-red-600 font-medium">
                  <TrendingUp className="w-4 h-4" /> Increasing
                </div>
              </div>
            </div>
          </div>
          
          <button
            onClick={handleGenerate}
            disabled={loading}
            className="w-full bg-brand-navy hover:bg-brand-navy-dark text-white font-medium py-3 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm"
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Lightbulb className="w-5 h-5" />}
            {loading ? 'Analyzing Data...' : 'Generate AI Renewal Brief'}
          </button>
        </div>

        {/* Output Column */}
        <div className="bg-white border border-gray-200 rounded-xl flex flex-col shadow-inner overflow-hidden">
          <div className="bg-brand-teal text-white px-4 py-3 font-semibold text-sm">
            AI Renewal Brief
          </div>
          <div className="flex-grow p-5 overflow-y-auto bg-gray-50">
            {!brief && !loading && (
              <div className="h-full flex items-center justify-center text-gray-400 text-center">
                Click generate to synthesize data into a brief.
              </div>
            )}
            
            {loading && (
              <div className="h-full flex items-center justify-center text-brand-teal">
                <Loader2 className="w-8 h-8 animate-spin" />
              </div>
            )}

            {brief && !loading && (
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase mb-1">1. Portfolio Summary</h4>
                  <p className="text-sm text-brand-navy font-medium">{brief.summary}</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase mb-1">2. Key Trends</h4>
                  <p className="text-sm text-gray-700">{brief.trends}</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-yellow-600 uppercase mb-1">3. Questions to Investigate</h4>
                  <p className="text-sm text-yellow-800 bg-yellow-50 p-2 rounded">{brief.investigate}</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-red-500 uppercase mb-1">4. Potential Risk Signals</h4>
                  <p className="text-sm text-red-700">{brief.risks}</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-brand-teal uppercase mb-1">5. Discussion Points</h4>
                  <p className="text-sm text-brand-teal-dark bg-brand-teal/10 p-2 rounded font-medium">{brief.discussionPoints}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-start gap-2 text-xs text-gray-400">
        <AlertCircle className="w-4 h-4 flex-shrink-0 text-blue-500" />
        <p>
          Decision-support demonstration. AI does not generate actual underwriting decisions. All financial figures are synthetic.
        </p>
      </div>
    </div>
  );
}
