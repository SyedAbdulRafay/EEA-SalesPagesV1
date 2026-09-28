/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ServiceId } from './types';
import { servicesData } from './data/academyData';
import { Header } from './components/Header';
import { OwnerToolbar } from './components/OwnerToolbar';
import { ServicePage } from './components/ServicePage';
import { ComparisonMatrix } from './components/ComparisonMatrix';
import { EnrollmentModal } from './components/EnrollmentModal';
import { DevSpecsModal } from './components/DevSpecsModal';
import { Footer } from './components/Footer';

export default function App() {
  const [activeView, setActiveView] = useState<ServiceId | 'compare'>('self-study');
  const [showBlueprintMarkers, setShowBlueprintMarkers] = useState(true);
  const [viewportMode, setViewportMode] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false);
  const [isDevSpecsOpen, setIsDevSpecsOpen] = useState(false);

  // Active service details for CTA and modals
  const activeServiceId: ServiceId = activeView === 'compare' ? 'self-study' : activeView;
  const currentService = servicesData[activeServiceId];

  const handleCtaClick = () => {
    setIsEnrollmentOpen(true);
  };

  const handleOpenEnrollmentForService = (serviceId: ServiceId) => {
    setActiveView(serviceId);
    setIsEnrollmentOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAFAF7] text-[#12211E] flex flex-col font-sans">
      {/* Top Website Owner Blueprint & Preview Toolbar */}
      <OwnerToolbar
        activeView={activeView}
        onSelectView={(view) => setActiveView(view)}
        showBlueprintMarkers={showBlueprintMarkers}
        onToggleBlueprint={() => setShowBlueprintMarkers(!showBlueprintMarkers)}
        viewportMode={viewportMode}
        onChangeViewport={(mode) => setViewportMode(mode)}
        onOpenDevSpecs={() => setIsDevSpecsOpen(true)}
      />

      {/* Main Viewport Container (with optional tablet/mobile preview simulator) */}
      <div
        className={`flex-1 transition-all duration-300 ${
          viewportMode === 'tablet'
            ? 'mx-auto my-8 max-w-[768px] rounded-3xl border-8 border-gray-800 bg-[#FAFAF7] shadow-2xl overflow-hidden'
            : viewportMode === 'mobile'
            ? 'mx-auto my-8 max-w-[390px] rounded-3xl border-8 border-gray-800 bg-[#FAFAF7] shadow-2xl overflow-hidden'
            : 'w-full'
        }`}
      >
        {/* Device frame header indicator if simulator active */}
        {viewportMode !== 'desktop' && (
          <div className="bg-gray-800 px-4 py-2 text-center text-[10px] font-mono font-medium text-gray-300 flex items-center justify-between">
            <span>
              {viewportMode === 'tablet' ? 'iPad / Tablet Preview (768px)' : 'iPhone / Mobile Preview (390px)'}
            </span>
            <button
              onClick={() => setViewportMode('desktop')}
              className="text-[#5FB2BE] hover:underline cursor-pointer"
            >
              Reset to Full Desktop
            </button>
          </div>
        )}

        {/* Brand Header */}
        <Header
          activeView={activeView}
          onSelectView={(view) => setActiveView(view)}
          ctaText={currentService.ctaText}
          onCtaClick={handleCtaClick}
        />

        {/* Content View: Single Service Sales Page OR Comparison Matrix */}
        <main className="flex-1">
          {activeView === 'compare' ? (
            <ComparisonMatrix
              onSelectService={(service) => setActiveView(service)}
              onOpenEnrollment={handleOpenEnrollmentForService}
            />
          ) : (
            <ServicePage
              key={activeView}
              data={servicesData[activeView]}
              showBlueprintMarkers={showBlueprintMarkers}
              onCtaClick={handleCtaClick}
            />
          )}
        </main>

        {/* Brand Footer */}
        <Footer onSelectView={(view) => setActiveView(view)} />
      </div>

      {/* Checkout / Application Simulation Modal */}
      <EnrollmentModal
        serviceId={activeServiceId}
        isOpen={isEnrollmentOpen}
        onClose={() => setIsEnrollmentOpen(false)}
      />

      {/* Developer & Copywriter Specs Reference Modal */}
      <DevSpecsModal
        isOpen={isDevSpecsOpen}
        onClose={() => setIsDevSpecsOpen(false)}
        activeServiceId={activeServiceId}
      />
    </div>
  );
}
