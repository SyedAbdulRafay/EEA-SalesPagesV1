import React from 'react';
import { ServiceId } from '../types';
import { servicesData } from '../data/academyData';
import { Check, X, ArrowRight, ShieldCheck, Sparkles, BookOpen, Users, Award } from 'lucide-react';

interface ComparisonMatrixProps {
  onSelectService: (service: ServiceId) => void;
  onOpenEnrollment: (service: ServiceId) => void;
}

export const ComparisonMatrix: React.FC<ComparisonMatrixProps> = ({
  onSelectService,
  onOpenEnrollment,
}) => {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      {/* Intro */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="rounded-full bg-[#19818F]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#0E5259]">
          Academy Service Comparison
        </span>
        <h1 className="font-heading mt-3 text-3xl font-extrabold tracking-tight text-[#12211E] sm:text-4xl">
          Compare English Evolution Academy Services
        </h1>
        <p className="mt-3 text-base text-[#3C4A47] leading-relaxed">
          Three distinct tiers designed for different learning styles and schedules. Each service solves a specific problem while sharing the core English Evolution methodology.
        </p>
      </div>

      {/* 3-Column Plan Cards */}
      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Tier 1: Self-Study */}
        <div className="flex flex-col justify-between rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md hover:border-[#19818F]/40">
          <div>
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FDF6EC] px-3 py-1 text-xs font-bold text-[#0E5259]">
                <BookOpen className="h-3.5 w-3.5 text-[#19818F]" />
                Self-Paced
              </span>
              <span className="text-xs font-semibold text-[#4F5B62]">Flexible</span>
            </div>

            <h3 className="font-heading mt-4 text-2xl font-bold text-[#12211E]">Self-Study</h3>
            <p className="mt-1 text-xs text-[#3C4A47]">
              For independent learners who want clear direction without fixed live schedules.
            </p>

            <div className="mt-5 flex items-baseline gap-1 border-b border-gray-100 pb-5">
              <span className="font-heading text-4xl font-extrabold text-[#12211E]">$20</span>
              <span className="text-xs text-[#4F5B62]">/ month</span>
            </div>

            <ul className="mt-6 space-y-3 text-xs text-[#3C4A47]">
              <li className="flex items-start gap-2.5">
                <Check className="h-4 w-4 shrink-0 text-[#19818F]" />
                <span>All digital video, text, & audio courses</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="h-4 w-4 shrink-0 text-[#19818F]" />
                <span>Classmate community space</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="h-4 w-4 shrink-0 text-[#19818F]" />
                <span>Direct questions in the Q&A forum</span>
              </li>
              <li className="flex items-start gap-2.5 text-gray-400">
                <X className="h-4 w-4 shrink-0 text-gray-300" />
                <span>No live classes (100% self-paced)</span>
              </li>
              <li className="flex items-start gap-2.5 text-gray-400">
                <X className="h-4 w-4 shrink-0 text-gray-300" />
                <span>No 1-on-1 private coaching</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 space-y-2">
            <button
              onClick={() => onSelectService('self-study')}
              className="w-full flex items-center justify-center rounded-xl bg-[#19818F] py-3 text-xs font-bold text-white shadow-xs transition hover:bg-[#0E5259] cursor-pointer"
            >
              <span>View Self-Study Sales Page</span>
              <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </button>
            <p className="text-center text-[11px] text-[#4F5B62]">
              Instant access · Cancel anytime
            </p>
          </div>
        </div>

        {/* Tier 2: Group Study */}
        <div className="relative flex flex-col justify-between rounded-3xl border-2 border-[#19818F] bg-white p-6 shadow-lg">
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[#19818F] px-3.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white">
            Most Popular
          </div>

          <div>
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FDF6EC] px-3 py-1 text-xs font-bold text-[#0E5259]">
                <Users className="h-3.5 w-3.5 text-[#19818F]" />
                Small Cohort
              </span>
              <span className="text-xs font-bold text-[#0E5259]">Max 8 Students</span>
            </div>

            <h3 className="font-heading mt-4 text-2xl font-bold text-[#12211E]">Group Study</h3>
            <p className="mt-1 text-xs text-[#3C4A47]">
              For students who want weekly live interaction, speaking practice, and peer accountability.
            </p>

            <div className="mt-5 flex items-baseline gap-1 border-b border-gray-100 pb-5">
              <span className="font-heading text-4xl font-extrabold text-[#12211E]">$250</span>
              <span className="text-xs text-[#4F5B62]">/ month</span>
            </div>

            <ul className="mt-6 space-y-3 text-xs text-[#3C4A47]">
              <li className="flex items-start gap-2.5 font-medium text-[#12211E]">
                <Check className="h-4 w-4 shrink-0 text-[#19818F]" />
                <span>Small live group classes (Max 8 students)</span>
              </li>
              <li className="flex items-start gap-2.5 font-medium text-[#12211E]">
                <Check className="h-4 w-4 shrink-0 text-[#19818F]" />
                <span>Structured curriculum to improve accuracy</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="h-4 w-4 shrink-0 text-[#19818F]" />
                <span>All digital courses & lesson materials</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="h-4 w-4 shrink-0 text-[#19818F]" />
                <span>Classmate community & cohort channel</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="h-4 w-4 shrink-0 text-[#19818F]" />
                <span>Live feedback & corrections from Anming</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 space-y-2">
            <button
              onClick={() => onSelectService('group-study')}
              className="w-full flex items-center justify-center rounded-xl bg-[#19818F] py-3 text-xs font-bold text-white shadow-xs transition hover:bg-[#0E5259] cursor-pointer"
            >
              <span>View Group Study Sales Page</span>
              <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </button>
            <p className="text-center text-[11px] text-[#4F5B62]">
              Strictly limited to 8 students per class
            </p>
          </div>
        </div>

        {/* Tier 3: 1-on-1 VIP */}
        <div className="flex flex-col justify-between rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md hover:border-[#19818F]/40">
          <div>
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0E5259]/10 px-3 py-1 text-xs font-bold text-[#0E5259]">
                <Award className="h-3.5 w-3.5 text-[#0E5259]" />
                Private Coaching
              </span>
              <span className="text-xs font-semibold text-[#0E5259]">1-on-1</span>
            </div>

            <h3 className="font-heading mt-4 text-2xl font-bold text-[#12211E]">1-on-1 VIP</h3>
            <p className="mt-1 text-xs text-[#3C4A47]">
              Personalized one-to-one learning option tailored entirely to your goals and pace.
            </p>

            <div className="mt-5 flex items-baseline gap-1 border-b border-gray-100 pb-5">
              <span className="font-heading text-4xl font-extrabold text-[#12211E]">$400</span>
              <span className="text-xs text-[#4F5B62]">/ month</span>
            </div>

            <ul className="mt-6 space-y-3 text-xs text-[#3C4A47]">
              <li className="flex items-start gap-2.5 font-medium text-[#12211E]">
                <Check className="h-4 w-4 shrink-0 text-[#19818F]" />
                <span>Personalized one-to-one learning sessions</span>
              </li>
              <li className="flex items-start gap-2.5 font-medium text-[#12211E]">
                <Check className="h-4 w-4 shrink-0 text-[#19818F]" />
                <span>Direct individualized feedback on your errors</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="h-4 w-4 shrink-0 text-[#19818F]" />
                <span>All digital courses included</span>
              </li>
              <li className="flex items-start gap-2.5 text-[#3C4A47]">
                <Check className="h-4 w-4 shrink-0 text-[#19818F]" />
                <span>[VIP feature: personalized curriculum plan]</span>
              </li>
              <li className="flex items-start gap-2.5 text-[#3C4A47]">
                <Check className="h-4 w-4 shrink-0 text-[#19818F]" />
                <span>[VIP feature: direct instructor coordination]</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 space-y-2">
            <button
              onClick={() => onSelectService('vip')}
              className="w-full flex items-center justify-center rounded-xl bg-[#0E5259] py-3 text-xs font-bold text-white shadow-xs transition hover:bg-[#19818F] cursor-pointer"
            >
              <span>View 1-on-1 VIP Sales Page</span>
              <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </button>
            <p className="text-center text-[11px] text-[#4F5B62]">
              Limited roster availability · Application basis
            </p>
          </div>
        </div>
      </div>

      {/* Feature Comparison Matrix Table */}
      <div className="mt-16 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xs">
        <div className="border-b border-gray-200 bg-[#FDF6EC]/60 px-6 py-4">
          <h3 className="font-heading text-lg font-bold text-[#12211E]">
            Detailed Feature Breakdown Across Services
          </h3>
          <p className="text-xs text-[#3C4A47]">
            Side-by-side comparison of deliverables, access, and instructional format.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50/50">
                <th className="py-3.5 px-6 font-semibold text-[#12211E]">Feature / Dimension</th>
                <th className="py-3.5 px-6 font-bold text-[#0E5259]">Self-Study ($20/mo)</th>
                <th className="py-3.5 px-6 font-bold text-[#19818F]">Group Study ($250/mo)</th>
                <th className="py-3.5 px-6 font-bold text-[#0E5259]">1-on-1 VIP ($400/mo)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="py-3.5 px-6 font-medium text-[#12211E]">Primary Focus</td>
                <td className="py-3.5 px-6 text-[#3C4A47]">Independence & flexibility</td>
                <td className="py-3.5 px-6 text-[#3C4A47]">Live practice & accountability</td>
                <td className="py-3.5 px-6 text-[#3C4A47]">Direct personalized guidance</td>
              </tr>
              <tr>
                <td className="py-3.5 px-6 font-medium text-[#12211E]">Live Classes</td>
                <td className="py-3.5 px-6 text-gray-400">None (self-paced)</td>
                <td className="py-3.5 px-6 text-[#12211E] font-semibold">Weekly live (max 8 students)</td>
                <td className="py-3.5 px-6 text-[#12211E] font-semibold">Private 1-on-1 sessions</td>
              </tr>
              <tr>
                <td className="py-3.5 px-6 font-medium text-[#12211E]">Class Size</td>
                <td className="py-3.5 px-6 text-[#3C4A47]">Independent</td>
                <td className="py-3.5 px-6 text-[#0E5259] font-bold">Strict max 8 students</td>
                <td className="py-3.5 px-6 text-[#0E5259] font-bold">1 student only</td>
              </tr>
              <tr>
                <td className="py-3.5 px-6 font-medium text-[#12211E]">Digital Course Access</td>
                <td className="py-3.5 px-6 text-[#19818F] font-semibold">✓ All digital courses</td>
                <td className="py-3.5 px-6 text-[#19818F] font-semibold">✓ All digital courses</td>
                <td className="py-3.5 px-6 text-[#19818F] font-semibold">✓ All digital courses</td>
              </tr>
              <tr>
                <td className="py-3.5 px-6 font-medium text-[#12211E]">Community Access</td>
                <td className="py-3.5 px-6 text-[#12211E]">Classmate community</td>
                <td className="py-3.5 px-6 text-[#12211E]">Cohort channel + community</td>
                <td className="py-3.5 px-6 text-[#12211E]">Included</td>
              </tr>
              <tr>
                <td className="py-3.5 px-6 font-medium text-[#12211E]">Instructor Feedback</td>
                <td className="py-3.5 px-6 text-[#3C4A47]">Q&A Forum responses</td>
                <td className="py-3.5 px-6 text-[#3C4A47]">Real-time live class corrections</td>
                <td className="py-3.5 px-6 text-[#0E5259] font-semibold">Private line-by-line feedback</td>
              </tr>
              <tr>
                <td className="py-3.5 px-6 font-medium text-[#12211E]">Structured Curriculum</td>
                <td className="py-3.5 px-6 text-[#3C4A47]">Self-guided path</td>
                <td className="py-3.5 px-6 text-[#12211E] font-semibold">5-week structured accuracy cycle</td>
                <td className="py-3.5 px-6 text-[#12211E] font-semibold">[VIP personalized plan]</td>
              </tr>
              <tr>
                <td className="py-3.5 px-6 font-medium text-[#12211E]">Primary Action</td>
                <td className="py-3.5 px-6">
                  <button
                    onClick={() => onSelectService('self-study')}
                    className="text-[#19818F] font-bold hover:underline cursor-pointer"
                  >
                    Start Self-Study →
                  </button>
                </td>
                <td className="py-3.5 px-6">
                  <button
                    onClick={() => onSelectService('group-study')}
                    className="text-[#19818F] font-bold hover:underline cursor-pointer"
                  >
                    Join Group Study →
                  </button>
                </td>
                <td className="py-3.5 px-6">
                  <button
                    onClick={() => onSelectService('vip')}
                    className="text-[#0E5259] font-bold hover:underline cursor-pointer"
                  >
                    Apply for 1-on-1 VIP →
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
