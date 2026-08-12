import React, { useState, useCallback } from 'react';
import { Calculator, Info } from 'lucide-react';

export function ProductivityCalculator() {
  const [employees, setEmployees] = useState(50);
  const [weeklyHours, setWeeklyHours] = useState(8);
  const [aiPercentage, setAiPercentage] = useState(30);

  const monthlyHours = Math.round(employees * weeklyHours * (aiPercentage / 100) * 4.33);
  const annualHours = Math.round(monthlyHours * 12);
  const perEmployee = Math.round(monthlyHours / employees);

  const handleEmployees = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmployees(Number(e.target.value));
  }, []);
  const handleWeekly = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setWeeklyHours(Number(e.target.value));
  }, []);
  const handlePct = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setAiPercentage(Number(e.target.value));
  }, []);

  return (
    <section id="calculator" className="py-20 bg-brand-offwhite">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-brand-teal/10 text-brand-teal border border-brand-teal/20 mb-4">
            Productivity Calculator
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Illustrative Productivity Opportunity
          </h2>
          <p className="text-brand-charcoal max-w-xl mx-auto">
            Adjust the inputs to model potential AI-addressable effort across your team. For illustration purposes only.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden">
          {/* Inputs */}
          <div className="p-8 md:p-10 grid md:grid-cols-3 gap-8 border-b border-gray-100">
            {/* Employees */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-3" htmlFor="calc-employees">
                Number of Employees
              </label>
              <div className="flex items-center justify-between mb-2">
                <span className="text-3xl font-black text-brand-navy">{employees}</span>
                <span className="text-xs text-gray-400">people</span>
              </div>
              <input
                id="calc-employees"
                type="range"
                min={5}
                max={500}
                step={5}
                value={employees}
                onChange={handleEmployees}
                className="w-full accent-brand-teal h-2 rounded-full cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>5</span><span>500</span>
              </div>
            </div>

            {/* Weekly hours */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-3" htmlFor="calc-weekly">
                Weekly Repetitive Hours
              </label>
              <div className="flex items-center justify-between mb-2">
                <span className="text-3xl font-black text-brand-navy">{weeklyHours}</span>
                <span className="text-xs text-gray-400">hrs/week</span>
              </div>
              <input
                id="calc-weekly"
                type="range"
                min={1}
                max={40}
                step={1}
                value={weeklyHours}
                onChange={handleWeekly}
                className="w-full accent-brand-teal h-2 rounded-full cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>1</span><span>40</span>
              </div>
            </div>

            {/* AI percentage */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-3" htmlFor="calc-percent">
                AI-Addressable Portion
              </label>
              <div className="flex items-center justify-between mb-2">
                <span className="text-3xl font-black text-brand-navy">{aiPercentage}%</span>
                <span className="text-xs text-gray-400">of tasks</span>
              </div>
              <input
                id="calc-percent"
                type="range"
                min={5}
                max={80}
                step={5}
                value={aiPercentage}
                onChange={handlePct}
                className="w-full accent-brand-teal h-2 rounded-full cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>5%</span><span>80%</span>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="bg-gradient-to-br from-brand-navy to-[#0f2a2a] p-8 md:p-10">
            <div className="flex items-center gap-2 mb-6">
              <Calculator className="w-4 h-4 text-brand-teal" />
              <p className="text-xs font-bold uppercase tracking-widest text-brand-teal">Illustrative Result</p>
            </div>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-white mb-1 tabular-nums">{monthlyHours.toLocaleString()}</div>
                <p className="text-brand-teal/70 text-xs font-medium uppercase tracking-wide">Hours / Month</p>
                <p className="text-gray-500 text-[10px] mt-1">potentially AI-influenced</p>
              </div>
              <div className="text-center border-x border-white/10">
                <div className="text-4xl md:text-5xl font-black text-white mb-1 tabular-nums">{annualHours.toLocaleString()}</div>
                <p className="text-brand-teal/70 text-xs font-medium uppercase tracking-wide">Hours / Year</p>
                <p className="text-gray-500 text-[10px] mt-1">across the team</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-black text-white mb-1 tabular-nums">{perEmployee}</div>
                <p className="text-brand-teal/70 text-xs font-medium uppercase tracking-wide">Per Employee</p>
                <p className="text-gray-500 text-[10px] mt-1">hours/month</p>
              </div>
            </div>

            <div className="mt-6 flex items-start gap-2 text-xs text-gray-400">
              <Info className="w-3.5 h-3.5 text-gray-500 flex-shrink-0 mt-0.5" />
              <span>
                Formula: employees × weekly repetitive hours × AI-addressable % × 4.33 weeks.
                Illustrative only. Actual impact should be validated after the workshop through real measurement.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
