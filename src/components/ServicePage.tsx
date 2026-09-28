import React from 'react';
import { ServiceData } from '../types';
import { SectionMarker } from './SectionMarker';
import { HeroVisual } from './HeroVisual';
import { SolutionIcon } from './SolutionIcon';
import {
  CheckCircle2,
  ArrowRight,
  Sparkles,
  HelpCircle,
  Quote,
  Shield,
  Zap,
} from 'lucide-react';

interface ServicePageProps {
  data: ServiceData;
  showBlueprintMarkers: boolean;
  onCtaClick: () => void;
}

export const ServicePage: React.FC<ServicePageProps> = ({
  data,
  showBlueprintMarkers,
  onCtaClick,
}) => {
  return (
    <div className="w-full">
      {/* ========================================================================= */}
      {/* SERVICE IDENTIFIER BANNER (Requested: Clearly label which service it is) */}
      {/* ========================================================================= */}
      <div className="border-b border-[#19818F]/20 bg-[#FDF6EC] py-3 text-center">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-2 px-4 sm:px-6">
          <div className="flex items-center space-x-2 text-xs sm:text-sm">
            <span className="rounded bg-[#19818F] px-2 py-0.5 font-bold uppercase tracking-wider text-white">
              Service Concept: {data.name}
            </span>
            <span className="font-semibold text-[#0E5259]">
              ${data.price}/month
            </span>
            <span className="hidden text-[#3C4A47] sm:inline">· {data.vibePill}</span>
          </div>
          <div className="text-xs text-[#3C4A47]">
            <span className="font-medium text-[#12211E]">Core learning vibe:</span> {data.vibe}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
        {/* ========================================================================= */}
        {/* SECTION 1 — HERO                                                          */}
        {/* ========================================================================= */}
        <SectionMarker
          number={1}
          name="Hero (Problem/Desire Hook + Above-The-Fold CTA)"
          rationale="Captures visitor attention immediately with their core desire, shows exact price upfront, and gives a direct, unambiguous CTA above the fold."
          keyRule="No generic 'Learn More' buttons; keep supporting copy to 1–2 sentences; clean supporting visual."
          visible={showBlueprintMarkers}
        />

        <section className="relative pb-16 pt-4 sm:pb-24 sm:pt-8" id="hero">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Left Copy Column */}
            <div className="text-left lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#19818F]/30 bg-[#FDF6EC] px-3.5 py-1 text-xs font-semibold text-[#0E5259]">
                <Sparkles className="h-3.5 w-3.5 text-[#19818F]" />
                <span>{data.badge}</span>
                <span className="text-gray-300">•</span>
                <span className="font-bold text-[#19818F]">${data.price}/month</span>
              </div>

              <h1 className="font-heading mt-4 text-3xl font-extrabold tracking-tight text-[#12211E] sm:text-4xl md:text-5xl md:leading-[1.15]">
                {data.hero.headline}
              </h1>

              <p className="mt-5 text-base text-[#3C4A47] sm:text-lg leading-relaxed">
                {data.hero.supportingText}
              </p>

              {/* Price & Primary CTA (Immediately visible above the fold) */}
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <button
                  onClick={onCtaClick}
                  className="inline-flex items-center justify-center rounded-xl bg-[#19818F] px-7 py-4 text-base font-semibold text-white shadow-md transition-all hover:bg-[#0E5259] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#19818F] focus:ring-offset-2 active:scale-[0.99] cursor-pointer"
                >
                  <span>{data.ctaText}</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>

                <div className="text-left">
                  <div className="font-heading text-lg font-bold text-[#12211E]">
                    ${data.price} <span className="text-xs font-normal text-[#4F5B62]">{data.period}</span>
                  </div>
                  <div className="text-xs text-[#4F5B62]">
                    {data.id === 'self-study' && 'Cancel anytime · Instant access'}
                    {data.id === 'group-study' && 'Strict max 8 students per cohort'}
                    {data.id === 'vip' && 'Private calendar · Limited roster'}
                  </div>
                </div>
              </div>

              {/* Secondary reassurance note */}
              <p className="mt-4 text-xs font-medium text-[#4F5B62]">
                ✓ {data.hero.secondaryNote}
              </p>
            </div>

            {/* Right Subtle Supporting Visual */}
            <div className="lg:col-span-5">
              <HeroVisual serviceId={data.id} />
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2 — THE PROBLEM                                                   */}
        {/* ========================================================================= */}
        <div className="pt-8">
          <SectionMarker
            number={2}
            name="The Problem (Specific Frustrations Addressed)"
            rationale="Creates immediate resonance: 'Yes, that is exactly what I am struggling with.' Validates the friction that prevents progress."
            keyRule="Keep short. Use 2–4 concise points rather than large blocks of text. Make the problem specific to this particular service."
            visible={showBlueprintMarkers}
          />

          <section className="rounded-3xl border border-gray-200/80 bg-white p-6 sm:p-10 shadow-sm" id="problem">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#19818F]">
                The Challenge
              </span>
              <h2 className="font-heading mt-2 text-2xl font-bold text-[#12211E] sm:text-3xl">
                {data.problem.sectionTitle}
              </h2>
              <p className="mt-2 text-sm text-[#3C4A47] sm:text-base">
                {data.problem.sectionSubtitle}
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {data.problem.points.map((pt, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-gray-100 bg-[#FAFAF7] p-5 transition-colors hover:border-[#19818F]/30"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100 font-bold text-red-700 text-xs">
                      ✕
                    </span>
                    {pt.highlight && (
                      <span className="rounded bg-gray-200/70 px-2 py-0.5 text-[11px] font-medium text-[#3C4A47]">
                        {pt.highlight}
                      </span>
                    )}
                  </div>
                  <h3 className="font-heading mt-3 text-base font-semibold text-[#12211E]">
                    {pt.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-[#3C4A47] leading-relaxed">
                    {pt.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 3 — THE SOLUTION                                                  */}
        {/* ========================================================================= */}
        <div className="pt-12 sm:pt-16">
          <SectionMarker
            number={3}
            name="The Solution (Transformation & Learning Experience)"
            rationale="Shows how this specific service resolves the friction described above. Translates mechanism into practical daily student benefits."
            keyRule="Simple visual layout with 3–5 items. Each item: short title + one short explanation. Focus on transformation over technical jargon."
            visible={showBlueprintMarkers}
          />

          <section id="solution" className="py-4">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-[#19818F]">
                The Academy Approach
              </span>
              <h2 className="font-heading mt-2 text-2xl font-bold text-[#12211E] sm:text-3xl">
                {data.solution.sectionTitle}
              </h2>
              <p className="mt-2 text-sm text-[#3C4A47] sm:text-base">
                {data.solution.sectionSubtitle}
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {data.solution.points.map((pt, idx) => (
                <div
                  key={idx}
                  className="flex flex-col rounded-2xl border border-[#19818F]/20 bg-white p-6 shadow-xs transition hover:shadow-md hover:border-[#19818F]/40"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FDF6EC] text-[#19818F]">
                    <SolutionIcon name={pt.iconName} />
                  </div>
                  <h3 className="font-heading mt-4 text-base font-semibold text-[#12211E]">
                    {pt.title}
                  </h3>
                  <p className="mt-2 text-xs text-[#3C4A47] leading-relaxed">
                    {pt.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Mid-page subtle CTA prompt */}
            <div className="mt-8 text-center">
              <button
                onClick={onCtaClick}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#19818F] hover:text-[#0E5259] transition-colors"
              >
                <span>Ready to begin? {data.ctaText}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </section>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 4 — WHAT YOU GET                                                  */}
        {/* ========================================================================= */}
        <div className="pt-12 sm:pt-16">
          <SectionMarker
            number={4}
            name="What You Get (Tangible Deliverables List)"
            rationale="Eliminates ambiguity. The visitor sees a concrete checklist of what they are actually purchasing and receiving."
            keyRule="Clean, scannable layout. Tangible items. For VIP, use only confirmed items and placeholders [VIP feature] where unconfirmed."
            visible={showBlueprintMarkers}
          />

          <section
            className="rounded-3xl border border-[#19818F]/20 bg-[#FDF6EC]/40 p-6 sm:p-10 shadow-xs"
            id="what-you-get"
          >
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#19818F]">
                Included in Your Membership
              </span>
              <h2 className="font-heading mt-2 text-2xl font-bold text-[#12211E] sm:text-3xl">
                {data.whatYouGet.sectionTitle}
              </h2>
              <p className="mt-2 text-sm text-[#3C4A47] sm:text-base">
                {data.whatYouGet.sectionSubtitle}
              </p>
            </div>

            <div className="mt-8 divide-y divide-gray-200/80 rounded-2xl border border-gray-200 bg-white">
              {data.whatYouGet.items.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col gap-3 p-5 sm:flex-row sm:items-start sm:justify-between ${
                    item.isPlaceholder ? 'bg-amber-50/40' : ''
                  }`}
                >
                  <div className="flex items-start space-x-3.5">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#19818F]/15 text-[#19818F]">
                      <CheckCircle2 className="h-4 w-4 text-[#19818F]" />
                    </div>
                    <div>
                      <h3 className="font-heading text-sm font-semibold text-[#12211E]">
                        {item.title}
                        {item.isPlaceholder && (
                          <span className="ml-2 rounded bg-amber-200/80 px-2 py-0.5 text-[10px] font-bold text-amber-900">
                            Unconfirmed Placeholder
                          </span>
                        )}
                      </h3>
                      <p className="mt-1 text-xs text-[#3C4A47] leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </div>

                  <span className="shrink-0 self-start text-right text-xs font-semibold text-[#0E5259] sm:self-center">
                    Included
                  </span>
                </div>
              ))}
            </div>

            {data.whatYouGet.calloutBox && (
              <div className="mt-6 flex items-start gap-3 rounded-2xl border border-[#19818F]/20 bg-white p-4 text-xs text-[#3C4A47]">
                <HelpCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#19818F]" />
                <div>
                  <span className="font-semibold text-[#12211E]">
                    {data.whatYouGet.calloutBox.title}:{' '}
                  </span>
                  {data.whatYouGet.calloutBox.desc}
                </div>
              </div>
            )}
          </section>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 5 — TESTIMONIALS                                                  */}
        {/* ========================================================================= */}
        <div className="pt-12 sm:pt-16">
          <SectionMarker
            number={5}
            name="Testimonials (Authentic Social Proof)"
            rationale="Provides real student confirmation without marketing hype. Reassures the visitor that other students have made real progress."
            keyRule="Use 2–3 genuine testimonials from the live site. Do not invent quotes. Compact, clean design with student name and location."
            visible={showBlueprintMarkers}
          />

          <section id="testimonials" className="py-4">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-[#19818F]">
                Real Student Stories
              </span>
              <h2 className="font-heading mt-2 text-2xl font-bold text-[#12211E] sm:text-3xl">
                {data.testimonials.sectionTitle}
              </h2>
              <p className="mt-2 text-sm text-[#3C4A47] sm:text-base">
                {data.testimonials.sectionSubtitle}
              </p>
              {data.testimonials.note && (
                <p className="mt-1 text-xs text-[#4F5B62] italic">
                  {data.testimonials.note}
                </p>
              )}
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              {data.testimonials.items.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-6 shadow-xs transition hover:shadow-md hover:border-[#19818F]/30"
                >
                  <div>
                    <Quote className="h-6 w-6 text-[#19818F]/40" />
                    <p className="mt-3 text-xs sm:text-sm text-[#12211E] italic leading-relaxed">
                      "{item.quote}"
                    </p>
                  </div>

                  <div className="mt-6 border-t border-gray-100 pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-heading text-xs font-bold text-[#12211E]">
                          {item.author}
                        </p>
                        <p className="text-[11px] text-[#4F5B62]">{item.location}</p>
                      </div>
                      <div className="h-7 w-7 rounded-full bg-[#FDF6EC] flex items-center justify-center font-bold text-xs text-[#19818F]">
                        {item.author[0]}
                      </div>
                    </div>
                    {item.contextTag && (
                      <p className="mt-2 text-[10px] text-[#0E5259] font-medium bg-[#19818F]/5 rounded px-2 py-0.5">
                        {item.contextTag}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 6 — PRICING / OFFER                                               */}
        {/* ========================================================================= */}
        <div className="pt-12 sm:pt-16">
          <SectionMarker
            number={6}
            name="Pricing / Offer (Unambiguous Offer Card)"
            rationale="Clearly displays the price, what is included, billing frequency, and zero fine-print ambiguity so the visitor never has to search."
            keyRule="Visually prominent but clean. Service Name + Price + Billing Cadence + Included points + Primary CTA."
            visible={showBlueprintMarkers}
          />

          <section id="pricing" className="py-4">
            <div className="mx-auto max-w-xl">
              <div className="relative overflow-hidden rounded-3xl border-2 border-[#19818F] bg-white p-6 sm:p-10 shadow-xl">
                {/* Top Badge */}
                <div className="flex items-center justify-between border-b border-gray-100 pb-5">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#19818F]">
                      Official Academy Offer
                    </span>
                    <h2 className="font-heading text-2xl font-bold text-[#12211E]">
                      {data.pricing.planName}
                    </h2>
                  </div>
                  <div className="rounded-full bg-[#19818F]/10 px-3 py-1 text-xs font-bold text-[#19818F]">
                    {data.vibePill}
                  </div>
                </div>

                {/* Price Display */}
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="font-heading text-5xl font-extrabold tracking-tight text-[#12211E]">
                    {data.pricing.priceString}
                  </span>
                  <span className="text-sm font-semibold text-[#4F5B62]">
                    {data.pricing.billingCadence}
                  </span>
                </div>

                <p className="mt-2 text-xs text-[#3C4A47]">
                  {data.pricing.sectionSubtitle}
                </p>

                {/* Feature Checklist */}
                <div className="mt-6 space-y-3 border-t border-gray-100 pt-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#12211E]">
                    What is included:
                  </p>
                  {data.pricing.includedSummary.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3 text-xs text-[#3C4A47]">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#19818F]" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Primary CTA */}
                <div className="mt-8">
                  <button
                    onClick={onCtaClick}
                    className="w-full rounded-xl bg-[#19818F] py-4 text-center font-heading text-base font-bold text-white shadow-md transition-all hover:bg-[#0E5259] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#19818F] focus:ring-offset-2 active:scale-[0.99] cursor-pointer"
                  >
                    {data.ctaText} — {data.pricing.priceString}{data.period}
                  </button>
                </div>

                {/* Cancellation policy */}
                <div className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-[#4F5B62]">
                  <Shield className="h-3.5 w-3.5 text-[#19818F]" />
                  <span>{data.pricing.guaranteeOrPolicy}</span>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* ========================================================================= */}
        {/* SECTION 7 — FINAL CTA                                                     */}
        {/* ========================================================================= */}
        <div className="pt-12 sm:pt-16 pb-8">
          <SectionMarker
            number={7}
            name="Final CTA (Simple, Confident Close)"
            rationale="Ends the page cleanly on a high note without fluff. One confident headline, one reinforcing sentence, and the consistent CTA."
            keyRule="Do not add long FAQs, repetitive summaries, or extra sections after this. Keep it direct and warm."
            visible={showBlueprintMarkers}
          />

          <section
            className="rounded-3xl bg-gradient-to-br from-[#0E5259] to-[#19818F] p-8 text-center text-white sm:p-12 shadow-lg"
            id="final-cta"
          >
            <div className="mx-auto max-w-2xl">
              <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                English Evolution Academy
              </span>

              <h2 className="font-heading mt-4 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
                {data.finalCta.headline}
              </h2>

              <p className="mt-3 text-sm sm:text-base text-white/90 leading-relaxed">
                {data.finalCta.reinforcingText}
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <button
                  onClick={onCtaClick}
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 font-heading text-base font-bold text-[#0E5259] shadow-md transition-all hover:bg-[#FDF6EC] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white active:scale-[0.99] cursor-pointer"
                >
                  <span>{data.ctaText}</span>
                  <ArrowRight className="ml-2 h-4 w-4 text-[#0E5259]" />
                </button>
              </div>

              <p className="mt-4 text-xs text-white/75">
                {data.finalCta.supportingNote}
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
