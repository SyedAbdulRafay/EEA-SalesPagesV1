import React from 'react';
import { ServiceId } from '../types';
import { ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onSelectView: (view: ServiceId | 'compare') => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectView }) => {
  return (
    <footer className="border-t border-gray-200/90 bg-[#12211E] text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#19818F] to-[#5FB2BE] text-white font-bold">
                EE
              </div>
              <span className="font-heading text-lg font-bold tracking-tight">
                English Evolution Academy
              </span>
            </div>
            <p className="mt-3 text-xs text-gray-300 max-w-sm leading-relaxed">
              Helping non-native English speakers, especially international professionals, speak with control, accuracy, and confidence.
            </p>
            <p className="mt-3 text-xs text-[#5FB2BE]">
              Digital courses and group classes are taught personally by Anming.
            </p>
          </div>

          {/* Service Links */}
          <div>
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-gray-400">
              Academy Services
            </h4>
            <ul className="mt-3 space-y-2 text-xs text-gray-300">
              <li>
                <button
                  onClick={() => onSelectView('self-study')}
                  className="hover:text-[#5FB2BE] transition-colors cursor-pointer"
                >
                  Self-Study — $20/month
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectView('group-study')}
                  className="hover:text-[#5FB2BE] transition-colors cursor-pointer"
                >
                  Group Study — $250/month
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectView('vip')}
                  className="hover:text-[#5FB2BE] transition-colors cursor-pointer"
                >
                  1-on-1 VIP — $400/month
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectView('compare')}
                  className="hover:text-[#5FB2BE] transition-colors cursor-pointer"
                >
                  Compare All 3 Services
                </button>
              </li>
            </ul>
          </div>

          {/* Principles */}
          <div>
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-gray-400">
              Methodology
            </h4>
            <ul className="mt-3 space-y-2 text-xs text-gray-300">
              <li>• 80% Speaking practice</li>
              <li>• Target recurring mistake patterns</li>
              <li>• Sound natural without slang</li>
              <li>• Real workplace and life conversations</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col items-center justify-between border-t border-white/10 pt-6 text-xs text-gray-400 sm:flex-row">
          <p>© {new Date().getFullYear()} English Evolution Academy. All rights reserved.</p>
          <p className="mt-2 sm:mt-0 flex items-center gap-1">
            <span>Official service landing page blueprints</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
