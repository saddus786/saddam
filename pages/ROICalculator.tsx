
import React, { useState, useMemo } from 'react';
import { ROIResult } from '../types';

const ROICalculator: React.FC = () => {
  const [wasteVolume, setWasteVolume] = useState(25);
  const [fuelCost, setFuelCost] = useState(12.5);
  const [opHours, setOpHours] = useState(16);

  const results = useMemo((): ROIResult => {
    // Basic calculation logic
    const dailySavings = (wasteVolume * 1000 * fuelCost * 0.8); // 0.8 efficiency factor
    const monthlySavings = dailySavings * 26; // 26 working days
    const annualSavings = monthlySavings * 12;
    const machineCost = 1500000; // Average cost in INR
    const paybackPeriod = machineCost / monthlySavings;
    const carbonOffset = wasteVolume * 365 * 1.5; // Estimated 1.5 tons CO2 per ton of biomass

    return {
      monthlySavings,
      paybackPeriod: Math.round(paybackPeriod * 10) / 10,
      annualSavings: Math.round(annualSavings / 100000 * 10) / 10, // In Lakhs
      carbonOffset: Math.round(carbonOffset)
    };
  }, [wasteVolume, fuelCost, opHours]);

  return (
    <div className="py-24 bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-industrial-charcoal dark:text-white tracking-tight uppercase">
            Industrial ROI & <br className="hidden lg:block"/> Sustainability Calculator
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl font-medium">
            Optimize your biomass briquetting strategy for the Indian market. Calculate potential savings in ₹, payback periods, and your environmental impact in real-time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Inputs */}
          <div className="lg:col-span-7 bg-white dark:bg-white/5 p-10 rounded-2xl border border-gray-100 dark:border-white/10 shadow-sm">
            <h3 className="text-xl font-bold mb-10 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">settings_suggest</span>
              Configure Your Operations
            </h3>

            <div className="space-y-12">
              {/* Daily Waste Volume */}
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-500">Daily Waste Volume</label>
                  <div className="text-right">
                    <span className="text-3xl font-black text-industrial-charcoal dark:text-white">{wasteVolume}</span>
                    <span className="text-gray-400 text-sm font-bold"> Tons</span>
                  </div>
                </div>
                <input 
                  type="range" 
                  min="1" max="100" 
                  value={wasteVolume} 
                  onChange={(e) => setWasteVolume(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-[10px] text-gray-400 font-black uppercase">
                  <span>1 Ton</span>
                  <span>100 Tons</span>
                </div>
              </div>

              {/* Current Fuel Cost */}
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-500">Current Fuel Cost (Coal/Wood)</label>
                  <div className="text-right">
                    <span className="text-3xl font-black text-industrial-charcoal dark:text-white">₹{fuelCost}</span>
                    <span className="text-gray-400 text-sm font-bold"> / KG</span>
                  </div>
                </div>
                <input 
                  type="range" 
                  min="5" max="50" step="0.5"
                  value={fuelCost} 
                  onChange={(e) => setFuelCost(parseFloat(e.target.value))}
                  className="w-full h-2 bg-gray-200 dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-[10px] text-gray-400 font-black uppercase">
                  <span>₹5</span>
                  <span>₹50</span>
                </div>
              </div>

              {/* Op Hours */}
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-500">Operational Hours</label>
                  <div className="text-right">
                    <span className="text-3xl font-black text-industrial-charcoal dark:text-white">{opHours}</span>
                    <span className="text-gray-400 text-sm font-bold"> Hours/Day</span>
                  </div>
                </div>
                <input 
                  type="range" 
                  min="8" max="24" 
                  value={opHours} 
                  onChange={(e) => setOpHours(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-[10px] text-gray-400 font-black uppercase">
                  <span>8 Hours</span>
                  <span>24 Hours</span>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-100 dark:border-white/10 flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg text-primary">
                <span className="material-symbols-outlined">info</span>
              </div>
              <p className="text-sm text-gray-500 italic leading-relaxed">
                Calculations are based on standard industrial efficiency rates for our **Super-60 Biomass Press**. All financial projections are shown in INR (₹).
              </p>
            </div>
          </div>

          {/* Output Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-industrial-charcoal dark:bg-black rounded-2xl shadow-2xl overflow-hidden border border-white/5">
              <div className="p-10 border-b border-white/5 bg-gradient-to-br from-industrial-charcoal to-black">
                <p className="text-primary font-black text-[10px] uppercase tracking-[0.2em] mb-2">Estimated Returns</p>
                <h4 className="text-white text-3xl font-black uppercase tracking-tight">Financial Summary</h4>
              </div>
              <div className="p-10 space-y-10">
                <div>
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">Monthly Cost Savings</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-primary text-5xl font-black">₹{results.monthlySavings.toLocaleString('en-IN')}</span>
                    <span className="text-gray-500 text-sm font-bold">/ month</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-6 bg-white/5 rounded-xl border border-white/5">
                    <p className="text-gray-400 text-[10px] uppercase font-black tracking-widest mb-3">Payback Period</p>
                    <p className="text-3xl font-black text-white">{results.paybackPeriod} <span className="text-xs font-normal text-gray-500">Months</span></p>
                  </div>
                  <div className="p-6 bg-white/5 rounded-xl border border-white/5">
                    <p className="text-gray-400 text-[10px] uppercase font-black tracking-widest mb-3">Annual Savings</p>
                    <p className="text-3xl font-black text-white">₹{results.annualSavings} <span className="text-xs font-normal text-gray-500">Lakhs</span></p>
                  </div>
                </div>

                <div className="p-6 bg-primary/10 rounded-xl border border-primary/20 flex items-center gap-6">
                  <div className="size-14 bg-primary rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-primary/30">
                    <span className="material-symbols-outlined text-industrial-charcoal font-black text-3xl">eco</span>
                  </div>
                  <div>
                    <p className="text-gray-400 text-[10px] uppercase font-black tracking-widest mb-1">Carbon Offset</p>
                    <p className="text-2xl font-black text-white">{results.carbonOffset.toLocaleString()} <span className="text-xs font-normal text-primary">Tons CO₂ / Year</span></p>
                  </div>
                </div>

                <button className="w-full bg-primary hover:bg-primary/90 text-industrial-charcoal font-black uppercase tracking-widest py-5 rounded-xl transition-all shadow-xl shadow-primary/10 flex items-center justify-center gap-3">
                  <span className="material-symbols-outlined">file_download</span>
                  Download Detailed ROI Report
                </button>
              </div>
            </div>

            <div className="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 p-6 rounded-2xl flex items-center gap-5 shadow-sm">
              <div className="size-14 rounded-full overflow-hidden shrink-0 border-2 border-primary/20">
                <img src="https://picsum.photos/100/100?engineer" alt="Expert" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-industrial-charcoal dark:text-white font-black text-sm uppercase">Need a custom technical audit?</p>
                <p className="text-gray-500 text-xs font-medium">Speak with our Indian market specialists.</p>
              </div>
              <button className="ml-auto text-primary text-sm font-black uppercase tracking-widest hover:underline">
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ROICalculator;
