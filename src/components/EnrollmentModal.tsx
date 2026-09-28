import React, { useState } from 'react';
import { ServiceId } from '../types';
import { servicesData } from '../data/academyData';
import { X, CheckCircle2, Shield, Lock, ArrowRight, UserCheck } from 'lucide-react';

interface EnrollmentModalProps {
  serviceId: ServiceId;
  isOpen: boolean;
  onClose: () => void;
}

export const EnrollmentModal: React.FC<EnrollmentModalProps> = ({
  serviceId,
  isOpen,
  onClose,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    notes: '',
  });

  if (!isOpen) return null;

  const service = servicesData[serviceId];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
      <div className="relative w-full max-w-lg rounded-3xl border border-gray-200 bg-white p-6 shadow-2xl sm:p-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 rounded-full p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
        >
          <X className="h-5 w-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#19818F]/15 text-[#19818F]">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 className="font-heading mt-4 text-2xl font-bold text-[#12211E]">
              {serviceId === 'vip' ? 'Application Received' : 'Welcome to the Academy!'}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#3C4A47] leading-relaxed">
              {serviceId === 'vip'
                ? `Thank you, ${formData.name || 'there'}. Anming will review your goals and schedule request to confirm calendar availability within 24 hours.`
                : `Your enrollment preview for ${service.name} (${service.pricing.priceString}/mo) has been initiated. In production, this connects seamlessly to your SureCart checkout.`}
            </p>
            <div className="mt-6">
              <button
                onClick={handleReset}
                className="rounded-xl bg-[#19818F] px-6 py-2.5 text-xs font-bold text-white transition hover:bg-[#0E5259] cursor-pointer"
              >
                Close Preview
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Modal Header */}
            <div className="border-b border-gray-100 pb-4">
              <span className="rounded bg-[#19818F]/10 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-[#19818F]">
                {serviceId === 'vip' ? 'Application Intake' : 'SureCart Checkout Preview'}
              </span>
              <h3 className="font-heading mt-2 text-xl font-bold text-[#12211E] sm:text-2xl">
                {serviceId === 'vip' ? 'Apply for 1-on-1 VIP Coaching' : `Enroll in ${service.name}`}
              </h3>
              <p className="mt-1 text-xs text-[#3C4A47]">
                {service.pricing.priceString} {service.pricing.billingCadence} · English Evolution Academy
              </p>
            </div>

            {/* Quick Summary Box */}
            <div className="mt-4 rounded-xl bg-[#FDF6EC] p-3 text-xs text-[#12211E]">
              <p className="font-semibold text-[#0E5259]">Selected Plan Highlights:</p>
              <ul className="mt-1.5 space-y-1 text-[#3C4A47]">
                {service.pricing.includedSummary.slice(0, 3).map((item, idx) => (
                  <li key={idx} className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-3 w-3 text-[#19818F]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
              <div>
                <label className="block text-xs font-medium text-[#12211E]">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Maria Gonzalez"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-1 w-full rounded-xl border border-gray-300 px-3.5 py-2.5 text-xs focus:border-[#19818F] focus:outline-none focus:ring-1 focus:ring-[#19818F]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#12211E]">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-1 w-full rounded-xl border border-gray-300 px-3.5 py-2.5 text-xs focus:border-[#19818F] focus:outline-none focus:ring-1 focus:ring-[#19818F]"
                />
              </div>

              {serviceId === 'vip' ? (
                <div>
                  <label className="block text-xs font-medium text-[#12211E]">
                    Your primary speaking goal or challenge
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Preparing for international leadership meetings and fixing persistent phrasing errors."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="mt-1 w-full rounded-xl border border-gray-300 px-3.5 py-2 text-xs focus:border-[#19818F] focus:outline-none focus:ring-1 focus:ring-[#19818F]"
                  />
                </div>
              ) : (
                <div className="rounded-xl border border-gray-200 bg-gray-50 p-3 text-[11px] text-[#4F5B62] flex items-center gap-2">
                  <Lock className="h-4 w-4 shrink-0 text-[#19818F]" />
                  <span>Secure billing simulation with SureCart checkout integration.</span>
                </div>
              )}

              <button
                type="submit"
                className="mt-2 w-full rounded-xl bg-[#19818F] py-3.5 text-center font-heading text-xs font-bold uppercase tracking-wider text-white shadow-md transition hover:bg-[#0E5259] active:scale-99 cursor-pointer"
              >
                {serviceId === 'vip'
                  ? 'Submit VIP Application'
                  : `Confirm & ${service.ctaText} — ${service.pricing.priceString}`}
              </button>

              <div className="flex items-center justify-center gap-1.5 text-center text-[11px] text-gray-500">
                <Shield className="h-3.5 w-3.5 text-gray-400" />
                <span>
                  {serviceId === 'self-study' && 'Cancel anytime from your account dashboard'}
                  {serviceId === 'group-study' && '8-student maximum strictly maintained'}
                  {serviceId === 'vip' && 'Private calendar booking coordinated upon review'}
                </span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
