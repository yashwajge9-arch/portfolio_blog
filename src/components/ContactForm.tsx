import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Short-Form Content (Reels, TikTok, Shorts)',
    budgetRange: '$1,000 – $2,500',
    message: '',
    websiteHoneypot: '', // Spam honeypot (hidden from real users)
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name or brand.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 15) {
      newErrors.message = 'Please provide a brief summary of your project (min 15 characters).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Spam honeypot trap
    if (formData.websiteHoneypot) {
      // Silently discard bot submission
      setSubmitted(true);
      return;
    }

    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate instantaneous client-side handling
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl bg-[#12131c] border border-emerald-500/30 p-8 sm:p-10 text-center space-y-4">
        <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-400 mx-auto flex items-center justify-center">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="font-display text-xl font-bold text-white">
          Inquiry Received!
        </h3>
        <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
          Thank you for reaching out, <strong className="text-white">{formData.name}</strong>. I review every project brief personally and will respond to <strong className="text-amber-400">{formData.email}</strong> within 24 business hours.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: '',
              email: '',
              projectType: 'Short-Form Content (Reels, TikTok, Shorts)',
              budgetRange: '$1,000 – $2,500',
              message: '',
              websiteHoneypot: '',
            });
          }}
          className="mt-4 px-5 py-2 text-xs font-semibold rounded-lg bg-white/10 text-white hover:bg-white/20 transition"
        >
          Send Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4.5 text-left">
      {/* Honeypot field (hidden from visual view and screen readers) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="websiteHoneypot">Do not fill this field</label>
        <input
          type="text"
          id="websiteHoneypot"
          name="websiteHoneypot"
          tabIndex={-1}
          autoComplete="off"
          value={formData.websiteHoneypot}
          onChange={(e) => setFormData({ ...formData, websiteHoneypot: e.target.value })}
        />
      </div>

      {/* Name and Email grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-xs font-semibold text-slate-300 mb-1.5">
            Your Name / Brand <span className="text-amber-400">*</span>
          </label>
          <input
            type="text"
            id="name"
            placeholder="e.g. Marcus Bennett"
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
              if (errors.name) setErrors({ ...errors, name: '' });
            }}
            className={`w-full px-3.5 py-2.5 rounded-xl bg-[#141622] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 transition ${
              errors.name ? 'border-red-500' : 'border-white/10'
            }`}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.name}</span>
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-slate-300 mb-1.5">
            Work Email Address <span className="text-amber-400">*</span>
          </label>
          <input
            type="email"
            id="email"
            placeholder="e.g. marcus@brand.com"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
              if (errors.email) setErrors({ ...errors, email: '' });
            }}
            className={`w-full px-3.5 py-2.5 rounded-xl bg-[#141622] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 transition ${
              errors.email ? 'border-red-500' : 'border-white/10'
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.email}</span>
            </p>
          )}
        </div>
      </div>

      {/* Project Type & Budget Range */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="projectType" className="block text-xs font-semibold text-slate-300 mb-1.5">
            Project Type
          </label>
          <select
            id="projectType"
            value={formData.projectType}
            onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl bg-[#141622] border border-white/10 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
          >
            <option value="Short-Form Content (Reels, TikTok, Shorts)">Short-Form (Reels, TikTok, Shorts)</option>
            <option value="YouTube Long-Form Series">YouTube Long-Form Series</option>
            <option value="Documentary / Mini-Doc Edit">Documentary / Mini-Doc Edit</option>
            <option value="Video Podcast Post-Production">Video Podcast Post-Production</option>
            <option value="Color Grading & Finishing">Color Grading &amp; Finishing</option>
            <option value="Monthly Editing Retainer">Monthly Dedicated Retainer</option>
          </select>
        </div>

        <div>
          <label htmlFor="budgetRange" className="block text-xs font-semibold text-slate-300 mb-1.5">
            Target Budget Range
          </label>
          <select
            id="budgetRange"
            value={formData.budgetRange}
            onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl bg-[#141622] border border-white/10 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition"
          >
            <option value="Under $1,000">Under $1,000 (Single Short/Consultation)</option>
            <option value="$1,000 – $2,500">$1,000 – $2,500 (Project / Batch)</option>
            <option value="$2,500 – $5,000">$2,500 – $5,000 (Monthly Channel)</option>
            <option value="$5,000+">$5,000+ (Full Post-Production Retainer)</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-xs font-semibold text-slate-300 mb-1.5">
          Project Brief &amp; Footage Details <span className="text-amber-400">*</span>
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Tell me about your channel, timeline expectations, raw footage duration, and reference links..."
          value={formData.message}
          onChange={(e) => {
            setFormData({ ...formData, message: e.target.value });
            if (errors.message) setErrors({ ...errors, message: '' });
          }}
          className={`w-full px-3.5 py-2.5 rounded-xl bg-[#141622] border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 transition ${
            errors.message ? 'border-red-500' : 'border-white/10'
          }`}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />
            <span>{errors.message}</span>
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 px-6 rounded-xl bg-amber-500 text-black font-semibold text-sm hover:bg-amber-400 active:scale-98 transition flex items-center justify-center gap-2 shadow-lg disabled:opacity-50"
      >
        {isSubmitting ? (
          <span className="animate-pulse">Sending Inquiry...</span>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>Submit Project Inquiry</span>
          </>
        )}
      </button>

      <p className="text-[11px] text-slate-400 text-center">
        No spam, ever. Your email and details are kept strictly confidential under NDA.
      </p>
    </form>
  );
};
