import React, { useState, useId } from 'react';
import { 
  ArrowRight, 
  Check, 
  Box, 
  Layers, 
  CircleDot, 
  Activity
} from 'lucide-react';
import { businessConfig } from '../config/businessInfo';

interface ConcreteCalculatorProps {
  onTransferToQuote: (volume: number, recommendedMix: string, projectType: string) => void;
}

type ShapeType = 'slab' | 'trench' | 'column' | 'steps';
type UnitType = 'meters' | 'feet';

export const ConcreteCalculator: React.FC<ConcreteCalculatorProps> = ({ onTransferToQuote }) => {
  const [shape, setShape] = useState<ShapeType>('slab');
  const [unit, setUnit] = useState<UnitType>('meters');
  const [includeBuffer, setIncludeBuffer] = useState<boolean>(true);

  // Inputs
  const [length, setLength] = useState<number>(6);
  const [width, setWidth] = useState<number>(4);
  const [depth, setDepth] = useState<number>(0.1); // in meters

  const [diameter, setDiameter] = useState<number>(0.4);
  const [columnDepth, setColumnDepth] = useState<number>(1.2);
  const [numberOfColumns, setNumberOfColumns] = useState<number>(4);

  const [stepWidth, setStepWidth] = useState<number>(1.5);
  const [stepTread, setStepTread] = useState<number>(0.3);
  const [stepRiser, setStepRiser] = useState<number>(0.18);
  const [numberOfSteps, setNumberOfSteps] = useState<number>(3);

  const lengthId = useId();
  const widthId = useId();
  const depthId = useId();
  const diameterId = useId();
  const columnDepthId = useId();
  const numberOfColumnsId = useId();
  const stepWidthId = useId();
  const stepTreadId = useId();
  const stepRiserId = useId();
  const numberOfStepsId = useId();

  // Volume Calculation in m3
  let rawM3 = 0;
  if (unit === 'meters') {
    if (shape === 'slab' || shape === 'trench') {
      rawM3 = (length || 0) * (width || 0) * (depth || 0);
    } else if (shape === 'column') {
      const radius = (diameter || 0) / 2;
      rawM3 = Math.PI * Math.pow(radius, 2) * (columnDepth || 0) * (numberOfColumns || 1);
    } else if (shape === 'steps') {
      const n = numberOfSteps || 1;
      rawM3 = (stepWidth || 0) * (stepTread || 0) * (stepRiser || 0) * ((n * (n + 1)) / 2);
    }
  } else {
    // Feet conversion: depth in inches
    if (shape === 'slab' || shape === 'trench') {
      const lM = (length || 0) * 0.3048;
      const wM = (width || 0) * 0.3048;
      const dM = ((depth || 0) / 12) * 0.3048;
      rawM3 = lM * wM * dM;
    } else if (shape === 'column') {
      const rM = (((diameter || 0) / 12) * 0.3048) / 2;
      const dM = (columnDepth || 0) * 0.3048;
      rawM3 = Math.PI * Math.pow(rM, 2) * dM * (numberOfColumns || 1);
    } else if (shape === 'steps') {
      const wM = (stepWidth || 0) * 0.3048;
      const trM = ((stepTread || 0) / 12) * 0.3048;
      const rM = ((stepRiser || 0) / 12) * 0.3048;
      const n = numberOfSteps || 1;
      rawM3 = wM * trM * rM * ((n * (n + 1)) / 2);
    }
  }

  const finalM3 = includeBuffer ? rawM3 * 1.1 : rawM3;
  const resultFormatted = Math.max(0.1, Number(finalM3.toFixed(2)));
  const bags = Math.round(resultFormatted * 88);
  const barrows = Math.round(resultFormatted * 22);

  const getShapeName = () => {
    switch (shape) {
      case 'slab': return 'Slab / Driveway / Patio';
      case 'trench': return 'Footings / Foundation Trench';
      case 'column': return 'Post Holes / Column Cylinders';
      case 'steps': return 'Steps / Concrete Staircase';
    }
  };

  return (
    <section id="calculator" className="bg-[#f0f4f8] relative pb-20 pt-4">
      
      {/* Royal Blue Banner Header with Rounded Bottom-Right Corner */}
      <div className="bg-[#1d4ed8] rounded-br-[32px] max-w-5xl py-8 px-6 sm:px-12 md:px-16 text-white shadow-md mb-12">
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
          Concrete Calculator
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Text */}
        <div className="max-w-3xl mb-12">
          <h3 className="font-heading text-2xl sm:text-3xl font-black text-slate-900 mb-4">
            Estimate how much concrete you'll need
          </h3>
          <p className="text-base text-slate-700 leading-relaxed font-normal">
            If you're wondering how much concrete your project will need, just use our concrete calculator. 
            Input your dimensions below to calculate estimated volume in cubic metres. 
            Because <strong>{businessConfig.company.name}</strong> operates volumetric mix-on-site trucks, 
            <strong> you are only ever charged for what you pour</strong> — so if your estimate is slightly over or under, 
            there's zero waste and zero penalty!
          </p>
        </div>

        {/* Clean Calculator Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200/80 p-6 sm:p-10">
          
          {/* Shape Selector Tabs */}
          <div className="mb-8">
            <span className="block text-xs font-black uppercase tracking-wider text-slate-500 mb-3">
              Select Your Project Shape
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { id: 'slab', label: 'Slab / Patio / Floor', icon: Box },
                { id: 'trench', label: 'Footings / Trench', icon: Layers },
                { id: 'column', label: 'Post Holes / Columns', icon: CircleDot },
                { id: 'steps', label: 'Steps / Staircase', icon: Activity },
              ].map((tab) => {
                const Icon = tab.icon;
                const isSelected = shape === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setShape(tab.id as ShapeType)}
                    className={`flex items-center justify-center space-x-2 py-3.5 px-3 rounded-lg font-bold text-xs sm:text-sm transition-all border ${
                      isSelected 
                        ? 'bg-[#1d4ed8] text-white border-[#1d4ed8] shadow-sm' 
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Unit Toggle and 10% Waste Option */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-200">
            <div>
              <span className="block text-xs font-black uppercase tracking-wider text-slate-500 mb-1.5">
                Unit of Measurement
              </span>
              <div className="inline-flex bg-slate-100 p-1 rounded-md">
                <button
                  type="button"
                  onClick={() => {
                    setUnit('meters');
                    setLength(6);
                    setWidth(4);
                    setDepth(0.1);
                  }}
                  className={`px-4 py-1.5 rounded text-xs font-bold transition-all ${
                    unit === 'meters' ? 'bg-[#1d4ed8] text-white' : 'text-slate-700 hover:text-black'
                  }`}
                >
                  Metres (m)
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setUnit('feet');
                    setLength(20);
                    setWidth(13);
                    setDepth(4);
                  }}
                  className={`px-4 py-1.5 rounded text-xs font-bold transition-all ${
                    unit === 'feet' ? 'bg-[#1d4ed8] text-white' : 'text-slate-700 hover:text-black'
                  }`}
                >
                  Feet & Inches (ft & in)
                </button>
              </div>
            </div>

            <div>
              <span className="block text-xs font-black uppercase tracking-wider text-slate-500 mb-1.5">
                Recommended Buffer
              </span>
              <button
                type="button"
                onClick={() => setIncludeBuffer(!includeBuffer)}
                className={`inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-md border text-xs font-bold transition-all ${
                  includeBuffer 
                    ? 'bg-emerald-50 text-emerald-800 border-emerald-300' 
                    : 'bg-slate-100 text-slate-600 border-slate-300'
                }`}
              >
                <span className={`w-4 h-4 rounded-full flex items-center justify-center ${includeBuffer ? 'bg-emerald-600 text-white' : 'bg-slate-300'}`}>
                  {includeBuffer && <Check className="w-3 h-3 stroke-[3]" />}
                </span>
                <span>+10% ground unevenness buffer</span>
              </button>
            </div>
          </div>

          {/* Input Fields */}
          <div className="space-y-6">
            {(shape === 'slab' || shape === 'trench') && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label htmlFor={lengthId} className="block text-xs font-bold text-slate-700 mb-1">
                    Length ({unit === 'meters' ? 'Metres' : 'Feet'})
                  </label>
                  <input
                    id={lengthId}
                    type="number"
                    step="0.1"
                    value={length}
                    onChange={(e) => setLength(parseFloat(e.target.value) || 0)}
                    className="w-full bg-[#f8f9fa] border border-slate-300 rounded-lg px-4 py-3 text-slate-900 font-bold focus:outline-none focus:border-[#1d4ed8] focus:bg-white"
                  />
                </div>
                <div>
                  <label htmlFor={widthId} className="block text-xs font-bold text-slate-700 mb-1">
                    Width ({unit === 'meters' ? 'Metres' : 'Feet'})
                  </label>
                  <input
                    id={widthId}
                    type="number"
                    step="0.1"
                    value={width}
                    onChange={(e) => setWidth(parseFloat(e.target.value) || 0)}
                    className="w-full bg-[#f8f9fa] border border-slate-300 rounded-lg px-4 py-3 text-slate-900 font-bold focus:outline-none focus:border-[#1d4ed8] focus:bg-white"
                  />
                </div>
                <div>
                  <label htmlFor={depthId} className="block text-xs font-bold text-slate-700 mb-1">
                    Depth ({unit === 'meters' ? 'Metres, e.g. 0.10m = 100mm' : 'Inches, e.g. 4"'})
                  </label>
                  <input
                    id={depthId}
                    type="number"
                    step={unit === 'meters' ? '0.01' : '0.5'}
                    value={depth}
                    onChange={(e) => setDepth(parseFloat(e.target.value) || 0)}
                    className="w-full bg-[#f8f9fa] border border-slate-300 rounded-lg px-4 py-3 text-slate-900 font-bold focus:outline-none focus:border-[#1d4ed8] focus:bg-white"
                  />
                </div>
              </div>
            )}

            {shape === 'column' && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div>
                  <label htmlFor={diameterId} className="block text-xs font-bold text-slate-700 mb-1">
                    Diameter ({unit === 'meters' ? 'Metres' : 'Inches'})
                  </label>
                  <input
                    id={diameterId}
                    type="number"
                    step="0.05"
                    value={diameter}
                    onChange={(e) => setDiameter(parseFloat(e.target.value) || 0)}
                    className="w-full bg-[#f8f9fa] border border-slate-300 rounded-lg px-4 py-3 text-slate-900 font-bold focus:outline-none focus:border-[#1d4ed8] focus:bg-white"
                  />
                </div>
                <div>
                  <label htmlFor={columnDepthId} className="block text-xs font-bold text-slate-700 mb-1">
                    Depth ({unit === 'meters' ? 'Metres' : 'Feet'})
                  </label>
                  <input
                    id={columnDepthId}
                    type="number"
                    step="0.1"
                    value={columnDepth}
                    onChange={(e) => setColumnDepth(parseFloat(e.target.value) || 0)}
                    className="w-full bg-[#f8f9fa] border border-slate-300 rounded-lg px-4 py-3 text-slate-900 font-bold focus:outline-none focus:border-[#1d4ed8] focus:bg-white"
                  />
                </div>
                <div>
                  <label htmlFor={numberOfColumnsId} className="block text-xs font-bold text-slate-700 mb-1">
                    Number of Holes
                  </label>
                  <input
                    id={numberOfColumnsId}
                    type="number"
                    value={numberOfColumns}
                    onChange={(e) => setNumberOfColumns(parseInt(e.target.value, 10) || 1)}
                    className="w-full bg-[#f8f9fa] border border-slate-300 rounded-lg px-4 py-3 text-slate-900 font-bold focus:outline-none focus:border-[#1d4ed8] focus:bg-white"
                  />
                </div>
              </div>
            )}

            {shape === 'steps' && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div>
                  <label htmlFor={stepWidthId} className="block text-xs font-bold text-slate-700 mb-1">Width</label>
                  <input
                    id={stepWidthId}
                    type="number"
                    step="0.1"
                    value={stepWidth}
                    onChange={(e) => setStepWidth(parseFloat(e.target.value) || 0)}
                    className="w-full bg-[#f8f9fa] border border-slate-300 rounded-lg px-3 py-2.5 font-bold"
                  />
                </div>
                <div>
                  <label htmlFor={stepTreadId} className="block text-xs font-bold text-slate-700 mb-1">Tread</label>
                  <input
                    id={stepTreadId}
                    type="number"
                    step="0.05"
                    value={stepTread}
                    onChange={(e) => setStepTread(parseFloat(e.target.value) || 0)}
                    className="w-full bg-[#f8f9fa] border border-slate-300 rounded-lg px-3 py-2.5 font-bold"
                  />
                </div>
                <div>
                  <label htmlFor={stepRiserId} className="block text-xs font-bold text-slate-700 mb-1">Riser</label>
                  <input
                    id={stepRiserId}
                    type="number"
                    step="0.05"
                    value={stepRiser}
                    onChange={(e) => setStepRiser(parseFloat(e.target.value) || 0)}
                    className="w-full bg-[#f8f9fa] border border-slate-300 rounded-lg px-3 py-2.5 font-bold"
                  />
                </div>
                <div>
                  <label htmlFor={numberOfStepsId} className="block text-xs font-bold text-slate-700 mb-1">Steps</label>
                  <input
                    id={numberOfStepsId}
                    type="number"
                    value={numberOfSteps}
                    onChange={(e) => setNumberOfSteps(parseInt(e.target.value, 10) || 1)}
                    className="w-full bg-[#f8f9fa] border border-slate-300 rounded-lg px-3 py-2.5 font-bold"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Results Box */}
          <div className="mt-8 pt-8 border-t border-slate-200">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-slate-500 block">
                  Estimated Concrete Required:
                </span>
                <div className="flex items-baseline space-x-2 mt-1">
                  <span className="font-heading text-5xl sm:text-6xl font-black text-[#1d4ed8]">
                    {resultFormatted}
                  </span>
                  <span className="font-heading text-2xl font-black text-slate-900">
                    m³ (Cubic Metres)
                  </span>
                </div>
                <div className="text-xs text-slate-600 mt-2 space-x-3">
                  <span>Equates to approx: <strong>~{bags} x 25kg bags</strong></span>
                  <span>•</span>
                  <span><strong>~{barrows} wheelbarrows</strong></span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
                <button
                  type="button"
                  onClick={() => onTransferToQuote(resultFormatted, 'C25 / RC25', getShapeName())}
                  className="px-8 py-4 rounded-full bg-[#1d4ed8] hover:bg-[#1e40af] text-white font-black text-sm uppercase tracking-wider shadow transition-all flex items-center justify-center space-x-2"
                >
                  <span>Book This Volume</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

            <p className="text-xs text-slate-500 text-center mt-4">
              * Remember: With our volumetric mixing trucks, you only pay for what goes in the ground. No surplus disposal fees.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
