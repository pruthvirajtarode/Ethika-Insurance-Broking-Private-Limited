import React from 'react';
import { Printer, BrainCircuit } from 'lucide-react';

export default function PitchReport() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="pt-24 min-h-screen bg-gray-100 pb-24 print:pt-0 print:bg-white print:pb-0">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex justify-end mb-8 print:hidden">
          <button 
            onClick={handlePrint}
            className="flex items-center gap-2 bg-brand-navy hover:bg-brand-navy-dark text-white px-6 py-2.5 rounded-lg font-medium transition-colors shadow-sm"
          >
            <Printer className="w-4 h-4" />
            Print / Save as PDF
          </button>
        </div>

        {/* Paper Document Container */}
        <div className="bg-white shadow-xl rounded-xl p-12 md:p-24 print:shadow-none print:rounded-none print:p-0">
          
          {/* Cover Page */}
          <div className="min-h-[800px] flex flex-col justify-center border-b border-gray-200 pb-24 mb-24 print:min-h-screen print:border-none print:mb-0 print:pb-0 print:break-after-page">
            <div className="mb-16">
              <BrainCircuit className="w-16 h-16 text-brand-teal mb-6" />
              <h1 className="text-5xl md:text-6xl font-bold text-brand-navy mb-6 tracking-tight">AI at Ethika</h1>
              <h2 className="text-2xl text-gray-600 font-medium max-w-2xl">
                Practical AI for Smarter Insurance, Benefits & Employee Experience
              </h2>
            </div>
            
            <div className="mt-auto pt-24 space-y-8">
              <div>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Prepared For</p>
                <p className="text-xl font-semibold text-brand-navy">Ethika Insurance Broking Private Limited</p>
              </div>
              
              <div>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Prepared By</p>
                <p className="text-xl font-semibold text-brand-navy">[Consulting Team]</p>
              </div>
              
              <div>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Date</p>
                <p className="text-lg text-gray-800">August 2026</p>
              </div>
            </div>
          </div>

          {/* Content Pages */}
          <div className="space-y-16 text-gray-800">
            <section className="print:break-inside-avoid">
              <h2 className="text-2xl font-bold text-brand-navy mb-4 border-b border-gray-200 pb-2">1. Executive Summary</h2>
              <p className="mb-4">
                This proposal outlines a 60-minute executive workshop designed to demonstrate the practical value of Artificial Intelligence for Ethika Insurance Broking Private Limited.
              </p>
              <p className="mb-4">
                The core philosophy of this proposal is that AI should not replace Ethika's human-first model. Instead, AI handles repetitive information-heavy work, allowing human professionals to focus on empathy, complex judgements, and client relationships.
              </p>
            </section>

            <section className="print:break-inside-avoid">
              <h2 className="text-2xl font-bold text-brand-navy mb-4 border-b border-gray-200 pb-2">2. Understanding Ethika</h2>
              <p className="mb-4">
                As a new kind of insure-tech broker, Ethika focuses on making employee health insurance simple, humane, and proactive. The current technology stack emphasizes an HR dashboard, employee health cards, and human-centered claims assistance. The opportunity lies in accelerating the backend knowledge work to improve front-line client service.
              </p>
            </section>

            <section className="print:break-inside-avoid">
              <h2 className="text-2xl font-bold text-brand-navy mb-4 border-b border-gray-200 pb-2">3. Proposed Workshop Structure</h2>
              <p className="mb-4">A fast-paced, interactive 60-minute session:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>0–5 MIN:</strong> AI in Insurance Context</li>
                <li><strong>5–15 MIN:</strong> AI for Everyday Productivity (Email, Meetings)</li>
                <li><strong>15–30 MIN:</strong> AI for Insurance Operations (Policy Q&A, Claims Summarization)</li>
                <li><strong>30–42 MIN:</strong> AI for Employee Benefits & HR</li>
                <li><strong>42–52 MIN:</strong> AI Analytics & Decision Support (Renewals)</li>
                <li><strong>52–60 MIN:</strong> Responsible AI & Next Steps</li>
              </ul>
            </section>

            <section className="print:break-inside-avoid">
              <h2 className="text-2xl font-bold text-brand-navy mb-4 border-b border-gray-200 pb-2">4. Responsible AI Commitment</h2>
              <p className="mb-4">
                Given the sensitive nature of health insurance and claims data, any AI implementation must adhere to strict governance. All workshop demonstrations utilize synthetic data. Production systems will require data minimization, strict access controls, and a mandatory "Human-in-the-loop" for all consequential decisions.
              </p>
            </section>
            
            <section className="print:break-inside-avoid">
              <h2 className="text-2xl font-bold text-brand-navy mb-4 border-b border-gray-200 pb-2">5. Proposed Next Steps</h2>
              <p className="mb-4">From Conversation to Capability:</p>
              <ol className="list-decimal pl-6 space-y-2 mb-4">
                <li>Conduct the 60-Minute AI Workshop</li>
                <li>Department-wise AI Opportunity Mapping</li>
                <li>Select 1–2 High-Value Pilot Use Cases</li>
                <li>Develop secure prototype</li>
                <li>Security + Governance Review</li>
                <li>Pilot Deployment and Impact Measurement</li>
              </ol>
            </section>
          </div>
          
        </div>
      </div>
    </div>
  );
}
