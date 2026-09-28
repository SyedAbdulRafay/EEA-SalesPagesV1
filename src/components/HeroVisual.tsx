import React from 'react';
import { ServiceId } from '../types';
import {
  BookOpen,
  MessageSquare,
  Users,
  Video,
  CheckCircle2,
  Clock,
  Sparkles,
  Award,
  Layers,
  Calendar,
  Lock,
} from 'lucide-react';

interface HeroVisualProps {
  serviceId: ServiceId;
}

export const HeroVisual: React.FC<HeroVisualProps> = ({ serviceId }) => {
  if (serviceId === 'self-study') {
    return (
      <div className="relative mx-auto w-full max-w-md">
        {/* Soft backdrop glow */}
        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[#19818F]/20 to-[#F0997E]/20 blur-xl opacity-70" />

        <div className="relative overflow-hidden rounded-2xl border border-[#19818F]/20 bg-white p-6 shadow-xl">
          {/* Card Header */}
          <div className="flex items-center justify-between border-b border-gray-100 pb-4">
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FDF6EC] text-[#19818F]">
                <BookOpen className="h-5 w-5" />
              </div>
              <div>
                <p className="font-heading text-sm font-semibold text-[#12211E]">Digital Course Portal</p>
                <p className="text-xs text-[#3C4A47]">Self-Paced Dashboard</p>
              </div>
            </div>
            <span className="rounded-full bg-[#19818F]/10 px-2.5 py-1 text-xs font-semibold text-[#19818F]">
              $20 / mo
            </span>
          </div>

          {/* Module checklist */}
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between rounded-xl bg-gray-50 p-3">
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="h-4 w-4 text-[#19818F]" />
                <span className="text-xs font-medium text-[#12211E]">Natural Phrasing Patterns</span>
              </div>
              <span className="text-[11px] font-medium text-[#3C4A47]">Video & Audio</span>
            </div>

            <div className="flex items-center justify-between rounded-xl bg-gray-50 p-3">
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="h-4 w-4 text-[#19818F]" />
                <span className="text-xs font-medium text-[#12211E]">Mistake Elimination Drills</span>
              </div>
              <span className="text-[11px] font-medium text-[#3C4A47]">Practice PDF</span>
            </div>

            <div className="flex items-center justify-between rounded-xl bg-gray-50 p-3">
              <div className="flex items-center space-x-3">
                <MessageSquare className="h-4 w-4 text-[#19818F]" />
                <span className="text-xs font-medium text-[#12211E]">Q&A Forum & Discussions</span>
              </div>
              <span className="rounded bg-[#19818F]/15 px-1.5 py-0.5 text-[10px] font-bold text-[#19818F]">
                Active
              </span>
            </div>
          </div>

          {/* Card footer note */}
          <div className="mt-5 flex items-center justify-between rounded-lg bg-[#FDF6EC] px-3.5 py-2.5 text-xs text-[#12211E]">
            <span className="flex items-center gap-1.5 font-medium">
              <Clock className="h-3.5 w-3.5 text-[#19818F]" />
              Study at your own speed
            </span>
            <span className="font-semibold text-[#0E5259]">No live class stress</span>
          </div>
        </div>
      </div>
    );
  }

  if (serviceId === 'group-study') {
    return (
      <div className="relative mx-auto w-full max-w-md">
        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[#19818F]/25 to-[#F3BD3B]/20 blur-xl opacity-75" />

        <div className="relative overflow-hidden rounded-2xl border border-[#19818F]/25 bg-white p-6 shadow-xl">
          {/* Card Header */}
          <div className="flex items-center justify-between border-b border-gray-100 pb-4">
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FDF6EC] text-[#19818F]">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <p className="font-heading text-sm font-semibold text-[#12211E]">Small Live Cohort</p>
                <p className="text-xs text-[#3C4A47]">Weekly Live Sessions</p>
              </div>
            </div>
            <span className="rounded-full bg-[#F0997E]/15 px-2.5 py-1 text-xs font-bold text-[#0E5259]">
              Strict Max 8
            </span>
          </div>

          {/* Seat Grid Graphic */}
          <div className="mt-4 rounded-xl bg-gray-50 p-3.5">
            <div className="flex items-center justify-between text-xs">
              <span className="font-medium text-[#12211E]">Cohort Class Cap: 8 Students</span>
              <span className="text-[11px] font-semibold text-[#19818F]">80% Speaking Time</span>
            </div>
            <div className="mt-3 grid grid-cols-4 gap-2">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((seat) => (
                <div
                  key={seat}
                  className="flex flex-col items-center justify-center rounded-lg border border-gray-200 bg-white py-2 text-center shadow-xs"
                >
                  <div className="h-2 w-2 rounded-full bg-[#19818F]" />
                  <span className="mt-1 text-[10px] font-medium text-gray-600">Seat {seat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Live class metadata */}
          <div className="mt-4 space-y-2 text-xs">
            <div className="flex items-center justify-between py-1 border-b border-gray-100">
              <span className="text-[#3C4A47] flex items-center gap-1.5">
                <Video className="h-3.5 w-3.5 text-[#19818F]" /> Live Zoom classes
              </span>
              <span className="font-medium text-[#12211E]">Taught personally by Anming</span>
            </div>
            <div className="flex items-center justify-between py-1">
              <span className="text-[#3C4A47] flex items-center gap-1.5">
                <Layers className="h-3.5 w-3.5 text-[#19818F]" /> Curriculum Focus
              </span>
              <span className="font-medium text-[#12211E]">Accuracy & Real Conversation</span>
            </div>
          </div>

          {/* Footer badge */}
          <div className="mt-4 flex items-center justify-between rounded-lg bg-[#FDF6EC] px-3.5 py-2.5 text-xs text-[#0E5259]">
            <span className="font-medium">All digital courses included</span>
            <span className="font-bold text-[#19818F]">$250 / month</span>
          </div>
        </div>
      </div>
    );
  }

  // 1-on-1 VIP
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[#19818F]/25 to-[#0E5259]/20 blur-xl opacity-75" />

      <div className="relative overflow-hidden rounded-2xl border border-[#19818F]/30 bg-white p-6 shadow-xl">
        {/* Card Header */}
        <div className="flex items-center justify-between border-b border-gray-100 pb-4">
          <div className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0E5259] text-white">
              <Award className="h-5 w-5" />
            </div>
            <div>
              <p className="font-heading text-sm font-semibold text-[#12211E]">1-on-1 VIP Coaching</p>
              <p className="text-xs text-[#3C4A47]">Personalized One-to-One</p>
            </div>
          </div>
          <span className="rounded-full bg-[#0E5259]/10 px-2.5 py-1 text-xs font-bold text-[#0E5259]">
            Private Roster
          </span>
        </div>

        {/* VIP dossier details */}
        <div className="mt-4 space-y-3">
          <div className="rounded-xl border border-[#19818F]/20 bg-[#FDF6EC]/60 p-3">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-[#0E5259]">One-to-One Focus</span>
              <span className="text-[11px] font-bold text-[#19818F]">100% Private</span>
            </div>
            <p className="mt-1 text-xs text-[#3C4A47]">
              Every minute is dedicated solely to your speech, questions, and communication style.
            </p>
          </div>

          <div className="rounded-xl bg-gray-50 p-3 text-xs space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-gray-500">Instructor:</span>
              <span className="font-medium text-gray-900">Anming Alexander (1-on-1)</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-500">Curriculum:</span>
              <span className="font-medium text-gray-900">[VIP personalized plan]</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-500">Schedule:</span>
              <span className="font-medium text-gray-900">[VIP flexible arrangement]</span>
            </div>
          </div>

          <div className="rounded-lg border border-dashed border-gray-300 p-2.5 text-center text-[11px] text-[#4F5B62]">
            Note: All digital courses included · Neutral placeholders reserved for unconfirmed VIP features
          </div>
        </div>

        {/* Footer */}
        <div className="mt-4 flex items-center justify-between rounded-lg bg-[#0E5259] px-3.5 py-2.5 text-xs text-white">
          <span className="font-medium">Direct personal attention</span>
          <span className="font-bold text-[#F3BD3B]">$400 / month</span>
        </div>
      </div>
    </div>
  );
};
