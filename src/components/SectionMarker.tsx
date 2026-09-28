import React from 'react';

interface SectionMarkerProps {
  number: number;
  name: string;
  rationale: string;
  keyRule: string;
  visible: boolean;
}

export const SectionMarker: React.FC<SectionMarkerProps> = ({
  number,
  name,
  rationale,
  keyRule,
  visible,
}) => {
  if (!visible) return null;

  return (
    <div className="mb-6 rounded-xl border border-[#19818F]/30 bg-[#FDF6EC] p-3 text-xs shadow-sm transition-all sm:p-4">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#19818F]/20 pb-2">
        <div className="flex items-center space-x-2">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#19818F] font-bold text-white text-[11px]">
            {number}
          </span>
          <span className="font-bold tracking-wide text-[#0E5259] uppercase">
            Section {number}: {name}
          </span>
        </div>
        <span className="rounded bg-[#19818F]/10 px-2 py-0.5 font-medium text-[#19818F]">
          Blueprint Guide
        </span>
      </div>
      <div className="mt-2 grid grid-cols-1 gap-2 text-[#3C4A47] sm:grid-cols-2">
        <div>
          <span className="font-semibold text-[#12211E]">Conversion Purpose: </span>
          {rationale}
        </div>
        <div>
          <span className="font-semibold text-[#12211E]">Design Discipline: </span>
          {keyRule}
        </div>
      </div>
    </div>
  );
};
