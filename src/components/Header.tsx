import React, { useState } from 'react';
import { ServiceId } from '../types';
import { BookOpen, Users, Award, Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  activeView: ServiceId | 'compare';
  onSelectView: (view: ServiceId | 'compare') => void;
  ctaText: string;
  onCtaClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeView,
  onSelectView,
  ctaText,
  onCtaClick,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-gray-200/90 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6">
        {/* Brand Logo & Name */}
        <div
          onClick={() => onSelectView('self-study')}
          className="flex items-center space-x-3 cursor-pointer group"
        >
          {/* Gecko / Emblem representation matching English Evolution styling */}
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#19818F] to-[#0E5259] text-white shadow-sm transition-transform group-hover:scale-105">
            <span className="font-heading font-black text-lg tracking-wider">EE</span>
          </div>
          <div>
            <div className="font-heading text-base font-bold tracking-tight text-[#12211E] group-hover:text-[#19818F] transition-colors">
              English Evolution
            </div>
            <div className="text-[10px] font-semibold uppercase tracking-widest text-[#0E5259]">
              Academy
            </div>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center space-x-1 md:flex">
          <button
            onClick={() => onSelectView('self-study')}
            className={`flex items-center space-x-1.5 rounded-lg px-3 py-2 text-xs font-semibold transition-colors cursor-pointer ${
              activeView === 'self-study'
                ? 'bg-[#FDF6EC] text-[#0E5259] border border-[#19818F]/20'
                : 'text-[#3C4A47] hover:bg-gray-100 hover:text-[#12211E]'
            }`}
          >
            <BookOpen className="h-3.5 w-3.5 text-[#19818F]" />
            <span>Self-Study ($20)</span>
          </button>

          <button
            onClick={() => onSelectView('group-study')}
            className={`flex items-center space-x-1.5 rounded-lg px-3 py-2 text-xs font-semibold transition-colors cursor-pointer ${
              activeView === 'group-study'
                ? 'bg-[#FDF6EC] text-[#0E5259] border border-[#19818F]/20'
                : 'text-[#3C4A47] hover:bg-gray-100 hover:text-[#12211E]'
            }`}
          >
            <Users className="h-3.5 w-3.5 text-[#19818F]" />
            <span>Group Study ($250)</span>
          </button>

          <button
            onClick={() => onSelectView('vip')}
            className={`flex items-center space-x-1.5 rounded-lg px-3 py-2 text-xs font-semibold transition-colors cursor-pointer ${
              activeView === 'vip'
                ? 'bg-[#FDF6EC] text-[#0E5259] border border-[#19818F]/20'
                : 'text-[#3C4A47] hover:bg-gray-100 hover:text-[#12211E]'
            }`}
          >
            <Award className="h-3.5 w-3.5 text-[#19818F]" />
            <span>1-on-1 VIP ($400)</span>
          </button>

          <button
            onClick={() => onSelectView('compare')}
            className={`rounded-lg px-3 py-2 text-xs font-semibold transition-colors cursor-pointer ${
              activeView === 'compare'
                ? 'bg-[#0E5259] text-white'
                : 'text-[#3C4A47] hover:bg-gray-100'
            }`}
          >
            Compare All 3
          </button>
        </nav>

        {/* Right CTA & Mobile Hamburger */}
        <div className="flex items-center space-x-3">
          <button
            onClick={onCtaClick}
            className="hidden sm:inline-flex items-center justify-center rounded-xl bg-[#19818F] px-4 py-2 text-xs font-semibold text-white shadow-xs transition hover:bg-[#0E5259] active:scale-98 cursor-pointer"
          >
            <span>{ctaText}</span>
            <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 md:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-gray-200 bg-white px-4 py-3 md:hidden">
          <div className="space-y-1">
            <button
              onClick={() => {
                onSelectView('self-study');
                setMobileMenuOpen(false);
              }}
              className={`w-full flex items-center justify-between rounded-lg px-3 py-2.5 text-xs font-semibold ${
                activeView === 'self-study' ? 'bg-[#FDF6EC] text-[#0E5259]' : 'text-gray-700'
              }`}
            >
              <span className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-[#19818F]" /> Self-Study
              </span>
              <span className="font-bold text-[#19818F]">$20/mo</span>
            </button>

            <button
              onClick={() => {
                onSelectView('group-study');
                setMobileMenuOpen(false);
              }}
              className={`w-full flex items-center justify-between rounded-lg px-3 py-2.5 text-xs font-semibold ${
                activeView === 'group-study' ? 'bg-[#FDF6EC] text-[#0E5259]' : 'text-gray-700'
              }`}
            >
              <span className="flex items-center gap-2">
                <Users className="h-4 w-4 text-[#19818F]" /> Group Study
              </span>
              <span className="font-bold text-[#19818F]">$250/mo</span>
            </button>

            <button
              onClick={() => {
                onSelectView('vip');
                setMobileMenuOpen(false);
              }}
              className={`w-full flex items-center justify-between rounded-lg px-3 py-2.5 text-xs font-semibold ${
                activeView === 'vip' ? 'bg-[#FDF6EC] text-[#0E5259]' : 'text-gray-700'
              }`}
            >
              <span className="flex items-center gap-2">
                <Award className="h-4 w-4 text-[#19818F]" /> 1-on-1 VIP
              </span>
              <span className="font-bold text-[#19818F]">$400/mo</span>
            </button>

            <button
              onClick={() => {
                onSelectView('compare');
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left rounded-lg px-3 py-2 text-xs font-semibold ${
                activeView === 'compare' ? 'bg-[#0E5259] text-white' : 'text-gray-700'
              }`}
            >
              Side-by-Side Comparison
            </button>

            <div className="pt-2">
              <button
                onClick={() => {
                  onCtaClick();
                  setMobileMenuOpen(false);
                }}
                className="w-full rounded-xl bg-[#19818F] py-2.5 text-center text-xs font-bold text-white shadow-xs"
              >
                {ctaText}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
