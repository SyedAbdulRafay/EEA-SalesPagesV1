import React, { useState } from 'react';
import { X, Copy, Check, FileText, Code, Layers, Sparkles } from 'lucide-react';
import { servicesData } from '../data/academyData';
import { ServiceId } from '../types';

interface DevSpecsModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeServiceId: ServiceId;
}

export const DevSpecsModal: React.FC<DevSpecsModalProps> = ({
  isOpen,
  onClose,
  activeServiceId,
}) => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'copy' | 'wordpress'>('architecture');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentService = servicesData[activeServiceId];

  const handleCopyText = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const copyString = `SERVICE: ${currentService.name.toUpperCase()} ($${currentService.price}/MONTH)
CTA: "${currentService.ctaText}"

SECTION 1 — HERO
Headline: ${currentService.hero.headline}
Supporting: ${currentService.hero.supportingText}
Price Callout: ${currentService.hero.priceNotice}
CTA: ${currentService.ctaText}

SECTION 2 — THE PROBLEM
Title: ${currentService.problem.sectionTitle}
Points:
${currentService.problem.points.map((p, i) => `${i + 1}. ${p.title} - ${p.description}`).join('\n')}

SECTION 3 — THE SOLUTION
Title: ${currentService.solution.sectionTitle}
Points:
${currentService.solution.points.map((s, i) => `${i + 1}. ${s.title}: ${s.description}`).join('\n')}

SECTION 4 — WHAT YOU GET
Title: ${currentService.whatYouGet.sectionTitle}
Deliverables:
${currentService.whatYouGet.items.map((w, i) => `• ${w.title} - ${w.detail}`).join('\n')}

SECTION 5 — TESTIMONIALS
${currentService.testimonials.items.map((t) => `"${t.quote}" — ${t.author}, ${t.location}`).join('\n\n')}

SECTION 6 — PRICING / OFFER
Plan: ${currentService.pricing.planName}
Price: ${currentService.pricing.priceString} ${currentService.pricing.billingCadence}
Included:
${currentService.pricing.includedSummary.map((item) => `✓ ${item}`).join('\n')}
CTA: ${currentService.ctaText}

SECTION 7 — FINAL CTA
Headline: ${currentService.finalCta.headline}
Reinforcement: ${currentService.finalCta.reinforcingText}
CTA: ${currentService.ctaText}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
      <div className="relative flex max-h-[90vh] w-full max-w-3xl flex-col rounded-3xl border border-gray-200 bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
          <div className="flex items-center space-x-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#19818F] text-white">
              <Code className="h-4 w-4" />
            </span>
            <div>
              <h2 className="font-heading text-base font-bold text-[#12211E]">
                Owner & Developer Implementation Reference
              </h2>
              <p className="text-xs text-[#3C4A47]">
                Clear section blueprint, copy export, and WordPress / SureCart architecture
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 bg-gray-50 px-6 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('architecture')}
            className={`border-b-2 px-4 py-3 transition cursor-pointer ${
              activeTab === 'architecture'
                ? 'border-[#19818F] text-[#0E5259]'
                : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            <span className="flex items-center gap-1.5">
              <Layers className="h-3.5 w-3.5" /> 7-Section Blueprint Rationale
            </span>
          </button>
          <button
            onClick={() => setActiveTab('copy')}
            className={`border-b-2 px-4 py-3 transition cursor-pointer ${
              activeTab === 'copy'
                ? 'border-[#19818F] text-[#0E5259]'
                : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            <span className="flex items-center gap-1.5">
              <FileText className="h-3.5 w-3.5" /> Ready-to-Paste Copy ({currentService.name})
            </span>
          </button>
          <button
            onClick={() => setActiveTab('wordpress')}
            className={`border-b-2 px-4 py-3 transition cursor-pointer ${
              activeTab === 'wordpress'
                ? 'border-[#19818F] text-[#0E5259]'
                : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            <span className="flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5" /> WordPress / SureCart Notes
            </span>
          </button>
        </div>

        {/* Body Content */}
        <div className="flex-1 overflow-y-auto p-6 text-xs text-[#3C4A47] leading-relaxed">
          {activeTab === 'architecture' && (
            <div className="space-y-4">
              <div className="rounded-xl bg-[#FDF6EC] p-3 text-xs text-[#0E5259]">
                <strong>Why this exact 7-section structure works:</strong> Visitors decide within 10 seconds whether an offer is for them. This structure takes them smoothly from "Problem Recognition" to "Tangible Deliverables", "Social Proof", and "Clear Pricing" without feeling like a generic long-form sales letter.
              </div>

              <div className="space-y-3">
                <div className="rounded-xl border border-gray-200 p-3">
                  <p className="font-bold text-[#12211E]">1. HERO (Above the fold)</p>
                  <p className="text-[11px] text-[#4F5B62]">
                    Hooks the visitor with their exact speaking aspiration, states the price transparently, and provides a direct, active CTA ("Start Self-Study" / "Join Group Study" / "Apply for VIP") immediately visible without scrolling.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 p-3">
                  <p className="font-bold text-[#12211E]">2. THE PROBLEM (2–4 concise points)</p>
                  <p className="text-[11px] text-[#4F5B62]">
                    Validates the student's personal friction: "Yes, that's exactly what I'm struggling with." Must be service-specific (e.g. erratic work hours vs fear of freezing in meetings vs personal executive needs).
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 p-3">
                  <p className="font-bold text-[#12211E]">3. THE SOLUTION (3–5 transformation items)</p>
                  <p className="text-[11px] text-[#4F5B62]">
                    Simple cards with short title + 1 short explanation. Focuses on the learning experience (80% speaking time, direct forum answers, small cohorts) rather than technical jargon.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 p-3">
                  <p className="font-bold text-[#12211E]">4. WHAT YOU GET (Tangible checklist)</p>
                  <p className="text-[11px] text-[#4F5B62]">
                    Scannable list answering: "What exactly do I receive for my money?" (e.g. All digital courses, community, Q&A forum, live classes). For VIP, uses confirmed items with placeholders.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 p-3">
                  <p className="font-bold text-[#12211E]">5. TESTIMONIALS (2–3 genuine quotes)</p>
                  <p className="text-[11px] text-[#4F5B62]">
                    Authentic quotes from real students (Rafa, Agnes, Mohammed, Francisco, Abed, Nataliia) from englishevolutionacademy.com. Zero fabricated metrics or fake claims.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 p-3">
                  <p className="font-bold text-[#12211E]">6. PRICING / OFFER (Focused card)</p>
                  <p className="text-[11px] text-[#4F5B62]">
                    Service Name, prominent dollar figure, billing frequency, included summary, cancellation policy, and primary CTA. No hunting for price.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-200 p-3">
                  <p className="font-bold text-[#12211E]">7. FINAL CTA (Confident close)</p>
                  <p className="text-[11px] text-[#4F5B62]">
                    Ends the page cleanly. Short headline, one sentence reinforcing the value, and the same primary CTA. No repetitive fluff or endless FAQs.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'copy' && (
            <div>
              <div className="flex items-center justify-between pb-3">
                <span className="font-bold text-[#12211E]">
                  Full text for {currentService.name} (${currentService.price}/month):
                </span>
                <button
                  onClick={() => handleCopyText(copyString)}
                  className="inline-flex items-center gap-1 rounded-lg bg-[#19818F] px-3 py-1.5 text-xs font-semibold text-white shadow-xs hover:bg-[#0E5259] cursor-pointer"
                >
                  {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                  <span>{copied ? 'Copied!' : 'Copy All Text'}</span>
                </button>
              </div>

              <pre className="max-h-96 overflow-y-auto rounded-xl bg-gray-900 p-4 font-mono text-[11px] text-gray-200 whitespace-pre-wrap">
                {copyString}
              </pre>
            </div>
          )}

          {activeTab === 'wordpress' && (
            <div className="space-y-4">
              <div className="rounded-xl bg-gray-50 p-4 border border-gray-200">
                <h4 className="font-bold text-[#12211E]">WordPress Theme CSS Tokens</h4>
                <p className="mt-1 text-xs text-[#4F5B62]">
                  These match your live `style.css` directly:
                </p>
                <div className="mt-3 grid grid-cols-2 gap-2 text-[11px] font-mono">
                  <div className="bg-white p-2 rounded border border-gray-200">
                    <span className="font-bold text-[#19818F]">--color-primary:</span> #19818F
                  </div>
                  <div className="bg-white p-2 rounded border border-gray-200">
                    <span className="font-bold text-[#0E5259]">--color-primary-dark:</span> #0E5259
                  </div>
                  <div className="bg-white p-2 rounded border border-gray-200">
                    <span className="font-bold text-[#F0997E]">--color-coral:</span> #F0997E
                  </div>
                  <div className="bg-white p-2 rounded border border-gray-200">
                    <span className="font-bold text-[#12211E]">--color-ink:</span> #12211E
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-gray-50 p-4 border border-gray-200">
                <h4 className="font-bold text-[#12211E]">SureCart Checkout Integration</h4>
                <p className="mt-1 text-xs text-[#4F5B62]">
                  On the WordPress site, link each primary CTA button directly to the corresponding SureCart checkout form or slide-out cart:
                </p>
                <ul className="mt-2 space-y-1.5 text-xs text-[#3C4A47]">
                  <li>• <strong>Self-Study:</strong> SureCart Checkout Form ID for product "Self-Study Academy" ($20/mo recurring)</li>
                  <li>• <strong>Group Study:</strong> SureCart Checkout Form ID for product "Group Study Cohort" ($250/mo recurring)</li>
                  <li>• <strong>1-on-1 VIP:</strong> Connects to an intake form / application block (Fluent Forms or WPForms) with redirect to custom invoice ($400/mo)</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 bg-gray-50 px-6 py-3 text-right">
          <button
            onClick={onClose}
            className="rounded-xl bg-gray-200 px-4 py-2 text-xs font-semibold text-gray-700 hover:bg-gray-300 cursor-pointer"
          >
            Close Reference
          </button>
        </div>
      </div>
    </div>
  );
};
