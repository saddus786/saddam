
import React, { useState, useMemo } from 'react';
import { ROIResult } from '../types';

const ROICalculator: React.FC = () => {
  const [wasteVolume, setWasteVolume] = useState(25);
  const [fuelCost, setFuelCost] = useState(12.5);
  const [opHours, setOpHours] = useState(16);

  const results = useMemo((): ROIResult => {
    const dailySavings = (wasteVolume * 1000 * fuelCost * 0.8); 
    const monthlySavings = dailySavings * 26; 
    const annualSavings = monthlySavings * 12;
    const machineCost = 1500000;
    const paybackPeriod = machineCost / monthlySavings;
    const carbonOffset = wasteVolume * 365 * 1.5;

    return {
      monthlySavings,
      paybackPeriod: Math.round(paybackPeriod * 10) / 10,
      annualSavings: Math.round(annualSavings / 100000 * 10) / 10,
      carbonOffset: Math.round(carbonOffset)
    };
  }, [wasteVolume, fuelCost, opHours]);

  return (
    <div className="py-32 bg-midnight min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24 space-y-6">
          <span className="text-xs font-black text-gold uppercase tracking-[0.4em]">Strategic Financial Analysis</span>
          <h1 className="text-6xl font-black gold-gradient-text uppercase tracking-tighter leading-none">Industrial ROI Estimator</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium">
            Calculate your operational profitability and environmental ESG impact in real-time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Dashboard Controls */}
          <div className="lg:col-span-7 glass-panel p-12 rounded-[3rem] space-y-16">
            <h3 className="text-2xl font-black text-ivory uppercase tracking-tight flex items-center gap-4">
              <span className="material-symbols-outlined text-gold">tune</span>
              Operational Parameters
            </h3>

            <div className="space-y-16">
              <div className="space-y-6">
                <div className="flex justify-between items-end">
                  <label className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-500">Biomass Waste Input (Daily)</label>
                  <div className="text-right">
                    <span className="text-4xl font-black text-ivory">{wasteVolume}</span>
                    <span className="text-gold text-sm font-black ml-2 uppercase">Metric Tons</span>
                  </div>
                </div>
                <input 
                  type="range" min="1" max="100" value={wasteVolume} 
                  onChange={(e) => setWasteVolume(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-steel rounded-lg appearance-none cursor-pointer accent-gold"
                />
              </div>

              <div className="space-y-6">
                <div className="flex justify-between items-end">
                  <label className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-500">Energy Displacement Cost</label>
                  <div className="text-right">
                    <span className="text-4xl font-black text-ivory">₹{fuelCost}</span>
                    <span className="text-gold text-sm font-black ml-2 uppercase">/ Kilogram</span>
                  </div>
                </div>
                <input 
                  type="range" min="5" max="50" step="0.5" value={fuelCost} 
                  onChange={(e) => setFuelCost(parseFloat(e.target.value))}
                  className="w-full h-1.5 bg-steel rounded-lg appearance-none cursor-pointer accent-gold"
                />
              </div>

              <div className="space-y-6">
                <div className="flex justify-between items-end">
                  <label className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-500">Operational Duty Cycle</label>
                  <div className="text-right">
                    <span className="text-4xl font-black text-ivory">{opHours}</span>
                    <span className="text-gold text-sm font-black ml-2 uppercase">Hrs / Day</span>
                  </div>
                </div>
                <input 
                  type="range" min="8" max="24" value={opHours} 
                  onChange={(e) => setOpHours(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-steel rounded-lg appearance-none cursor-pointer accent-gold"
                />
              </div>
            </div>

            <div className="pt-10 border-t border-white/5 flex gap-4 text-slate-500 italic text-sm">
              <span className="material-symbols-outlined text-gold">verified_user</span>
              Projections based on ISO-standard performance metrics of VK-series mechanical presses.
            </div>
          </div>

          {/* Luxury Results Pane */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="bg-steel rounded-[3rem] p-12 border border-gold/10 relative overflow-hidden shadow-glass">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
              
              <div className="relative z-10 space-y-12">
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 mb-4">Projected Profitability</h4>
                  <div className="flex items-baseline gap-3">
                    <span className="text-6xl font-black text-emerald">₹{results.monthlySavings.toLocaleString('en-IN')}</span>
                    <span className="text-slate-400 text-sm font-black uppercase">/ Month</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="p-8 rounded-3xl bg-midnight/50 border border-gold/10">
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3">Payback Period</p>
                    <p className="text-4xl font-black text-ivory leading-none">{results.paybackPeriod} <span className="text-xs uppercase text-gold">Mo</span></p>
                  </div>
                  <div className="p-8 rounded-3xl bg-midnight/50 border border-gold/10">
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3">Annual (Lakhs)</p>
                    <p className="text-4xl font-black text-ivory leading-none">₹{results.annualSavings} <span className="text-xs uppercase text-gold">L</span></p>
                  </div>
                </div>

                <div className="p-10 rounded-3xl bg-emerald/5 border border-emerald/20 flex items-center gap-6">
                  <div className="size-16 rounded-2xl bg-emerald/10 text-emerald flex items-center justify-center shrink-0 shadow-emerald-glow">
                    <span className="material-symbols-outlined text-4xl">eco</span>
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">ESG Impact Score</p>
                    <p className="text-2xl font-black text-ivory">{results.carbonOffset.toLocaleString()} <span className="text-xs text-emerald font-black uppercase">MT CO2 / Yr</span></p>
                  </div>
                </div>

                <button className="w-full gold-gradient-bg text-midnight py-6 rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-all shadow-gold-glow active:scale-95">
                  Request Commercial Feasibility Study
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ROICalculator;
