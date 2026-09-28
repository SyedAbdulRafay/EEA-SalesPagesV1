import React from 'react';
import { ServiceId } from '../types';
import {
  Layers,
  Code2,
  Monitor,
  Tablet,
  Smartphone,
  Info,
  CheckCircle,
  Eye,
} from 'lucide-react';

interface OwnerToolbarProps {
  activeView: ServiceId | 'compare';
  onSelectView: (view: ServiceId | 'compare') => void;
  showBlueprintMarkers: boolean;
  onToggleBlueprint: () => void;
  viewportMode: 'desktop' | 'tablet' | 'mobile';
  onChangeViewport: (mode: 'desktop' | 'tablet' | 'mobile') => void;
  onOpenDevSpecs: () => void;
}

export const OwnerToolbar: React.FC<OwnerToolbarProps> = ({
  activeView,
  onSelectView,
  showBlueprintMarkers,
  onToggleBlueprint,
  viewportMode,
  onChangeViewport,
  onOpenDevSpecs,
}) => {
  return (
    <aside aria-label="Website Owner Preview Controls" className="sticky top-0 z-50 border-b border-[#0E5259]/30 bg-[#12211E] text-white shadow-md">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-3 py-2 sm:px-6">
        {/* Left: Purpose indicator & quick switch buttons */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center space-x-1.5 border-r border-white/20 pr-3">
            <span className="h-2 w-2 rounded-full bg-[#5FB2BE] animate-pulse" />
            <span className="text-[11px] font-bold tracking-wider uppercase text-gray-300">
              Sales Page Designer
            </span>
          </div>

          {/* Quick service selector pills */}
          <div className="flex items-center rounded-lg bg-black/40 p-0.5 text-xs">
            <button
              onClick={() => onSelectView('self-study')}
              className={`rounded-md px-2.5 py-1 font-semibold transition-all cursor-pointer ${
                activeView === 'self-study'
                  ? 'bg-[#19818F] text-white shadow-xs'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              1. Self-Study <span className="text-[10px] text-teal-200">($20)</span>
            </button>

            <button
              onClick={() => onSelectView('group-study')}
              className={`rounded-md px-2.5 py-1 font-semibold transition-all cursor-pointer ${
                activeView === 'group-study'
                  ? 'bg-[#19818F] text-white shadow-xs'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              2. Group Study <span className="text-[10px] text-teal-200">($250)</span>
            </button>

            <button
              onClick={() => onSelectView('vip')}
              className={`rounded-md px-2.5 py-1 font-semibold transition-all cursor-pointer ${
                activeView === 'vip'
                  ? 'bg-[#19818F] text-white shadow-xs'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              3. 1-on-1 VIP <span className="text-[10px] text-teal-200">($400)</span>
            </button>

            <button
              onClick={() => onSelectView('compare')}
              className={`rounded-md px-2.5 py-1 font-semibold transition-all cursor-pointer ${
                activeView === 'compare'
                  ? 'bg-[#0E5259] text-white border border-[#5FB2BE]/40'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Compare All 3
            </button>
          </div>
        </div>

        {/* Right: Section Explainer toggle, device preview, developer specs */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Section Blueprint Guide Toggle */}
          <button
            onClick={onToggleBlueprint}
            className={`flex items-center space-x-1.5 rounded-lg px-2.5 py-1 text-xs font-medium transition cursor-pointer ${
              showBlueprintMarkers
                ? 'bg-[#F3BD3B] text-[#12211E] font-bold shadow-xs'
                : 'bg-white/10 text-gray-200 hover:bg-white/20'
            }`}
            title="Toggle Section 1–7 Explainer Boxes with UX Rationale"
          >
            <Layers className="h-3.5 w-3.5" />
            <span>{showBlueprintMarkers ? 'Blueprint Guide ON' : 'Show Section Blueprint'}</span>
          </button>

          {/* Device viewport frame toggle */}
          <div className="hidden items-center rounded-lg bg-black/40 p-0.5 text-xs sm:flex">
            <button
              onClick={() => onChangeViewport('desktop')}
              className={`rounded p-1 text-gray-300 hover:text-white ${
                viewportMode === 'desktop' ? 'bg-white/20 text-white' : ''
              }`}
              title="Full desktop view"
            >
              <Monitor className="h-3.5 w-3.5" />
            </button>
            <button
              onClick={() => onChangeViewport('tablet')}
              className={`rounded p-1 text-gray-300 hover:text-white ${
                viewportMode === 'tablet' ? 'bg-white/20 text-white' : ''
              }`}
              title="Tablet preview (768px)"
            >
              <Tablet className="h-3.5 w-3.5" />
            </button>
            <button
              onClick={() => onChangeViewport('mobile')}
              className={`rounded p-1 text-gray-300 hover:text-white ${
                viewportMode === 'mobile' ? 'bg-white/20 text-white' : ''
              }`}
              title="Mobile preview (390px)"
            >
              <Smartphone className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Dev / Implementation Specs */}
          <button
            onClick={onOpenDevSpecs}
            className="flex items-center space-x-1 rounded-lg border border-[#5FB2BE]/40 bg-[#0E5259] px-2.5 py-1 text-xs font-medium text-white transition hover:bg-[#19818F] cursor-pointer"
          >
            <Code2 className="h-3.5 w-3.5 text-[#5FB2BE]" />
            <span>Dev & Copy Specs</span>
          </button>
        </div>
      </div>
    </aside>
  );
};
