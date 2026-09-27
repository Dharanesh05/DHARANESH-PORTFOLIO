import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Copy, Check, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { AnimatedFrame } from './AnimatedFrame';
import { RevealOnScroll } from './RevealOnScroll';
import { TiltCard } from './TiltCard';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Enter a valid email address';
    }
    if (!formData.subject.trim()) errs.subject = 'Subject is required';
    if (!formData.message.trim()) errs.message = 'Message is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;

      window.location.href = mailtoUrl;
    }, 800);
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <AnimatedFrame id="contact">
      {/* Magazine Final Page Big Header */}
      <RevealOnScroll>
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono-tech font-bold uppercase tracking-widest bg-[#F20D2F]/10 text-[#F20D2F] border border-[#F20D2F]/30">
            09 — CONTACT
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-heading font-extrabold tracking-tight text-[#FFFFFF] leading-tight">
            LET'S BUILD <br className="hidden sm:inline" />
            <span className="text-[#F20D2F] font-serif-editorial italic font-normal">SOMETHING USEFUL.</span>
          </h2>
          <p className="text-base sm:text-xl text-[#A3A3A3] font-normal max-w-2xl mx-auto">
            Have an idea, project or opportunity? Let's connect.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#F20D2F] to-[#A8061F] mx-auto rounded-full" />
        </div>
      </RevealOnScroll>

      {/* Quick Editorial Contact Action Buttons */}
      <RevealOnScroll delay={0.1}>
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14 max-w-3xl mx-auto">
          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.96 }}
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-2.5 px-7 py-4 text-sm font-bold text-[#FFFFFF] bg-[#F20D2F] hover:bg-[#A8061F] rounded-2xl shadow-md cursor-pointer transition-colors"
          >
            <Mail className="w-5 h-5 text-[#FFFFFF]" />
            <span>EMAIL ME DIRECTLY</span>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.96 }}
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-7 py-4 text-sm font-bold text-[#FFFFFF] bg-[#111111] hover:bg-[#1C1C1C] border border-[#262626] hover:border-[#F20D2F] rounded-2xl shadow-xs cursor-pointer transition-colors"
          >
            <GithubIcon className="w-5 h-5 text-[#FFFFFF]" />
            <span>GITHUB</span>
            <ExternalLink className="w-4 h-4 text-[#737373]" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.96 }}
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-7 py-4 text-sm font-bold text-[#FFFFFF] bg-[#111111] hover:bg-[#1C1C1C] border border-[#262626] hover:border-[#F20D2F] rounded-2xl shadow-xs cursor-pointer transition-colors"
          >
            <LinkedinIcon className="w-5 h-5 text-[#F20D2F]" />
            <span>LINKEDIN</span>
            <ExternalLink className="w-4 h-4 text-[#737373]" />
          </motion.a>
        </div>
      </RevealOnScroll>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Direct Details */}
        <div className="lg:col-span-5 space-y-5">
          <RevealOnScroll delay={0.15}>
            <TiltCard className="p-6 rounded-2xl border border-[#262626] bg-[#111111] hover:border-[#F20D2F] flex items-center justify-between group shadow-xs transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#F20D2F]/10 border border-[#F20D2F]/30 flex items-center justify-center text-[#F20D2F] group-hover:scale-105 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono-tech text-[#737373] uppercase font-bold">Direct Email</div>
                  <a href={`mailto:${personalInfo.email}`} className="text-sm font-bold text-[#FFFFFF] hover:text-[#F20D2F] transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(personalInfo.email, 'email')}
                className="p-2 text-[#A3A3A3] hover:text-[#F20D2F] bg-[#1C1C1C] rounded-lg border border-[#262626] shadow-xs cursor-pointer"
                title="Copy Email"
              >
                {copiedField === 'email' ? <Check className="w-4 h-4 text-[#F20D2F]" /> : <Copy className="w-4 h-4" />}
              </button>
            </TiltCard>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <TiltCard className="p-6 rounded-2xl border border-[#262626] bg-[#111111] hover:border-[#F20D2F] flex items-center justify-between group shadow-xs transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#F20D2F]/10 border border-[#F20D2F]/30 flex items-center justify-center text-[#F20D2F] group-hover:scale-105 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono-tech text-[#737373] uppercase font-bold">Phone / WhatsApp</div>
                  <a href={`tel:${personalInfo.phone}`} className="text-sm font-bold text-[#FFFFFF] hover:text-[#F20D2F] transition-colors">
                    +91 {personalInfo.phone}
                  </a>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                className="p-2 text-[#A3A3A3] hover:text-[#F20D2F] bg-[#1C1C1C] rounded-lg border border-[#262626] shadow-xs cursor-pointer"
                title="Copy Phone"
              >
                {copiedField === 'phone' ? <Check className="w-4 h-4 text-[#F20D2F]" /> : <Copy className="w-4 h-4" />}
              </button>
            </TiltCard>
          </RevealOnScroll>

          <RevealOnScroll delay={0.25}>
            <div className="p-6 rounded-2xl border border-[#262626] bg-[#111111] space-y-3 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#F20D2F]/10 border border-[#F20D2F]/30 flex items-center justify-center text-[#F20D2F]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono-tech text-[#737373] uppercase font-bold">Campus & Location</div>
                  <div className="text-sm font-bold text-[#FFFFFF]">{personalInfo.college}</div>
                  <div className="text-xs text-[#A3A3A3] font-normal">{personalInfo.location}</div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* Right Column: Direct Message Form */}
        <div className="lg:col-span-7">
          <RevealOnScroll delay={0.15}>
            <div className="p-6 sm:p-8 rounded-3xl border border-[#262626] bg-[#111111] shadow-md shadow-black/50">
              <h3 className="text-xl font-heading font-bold text-[#FFFFFF] mb-2">Send a Direct Message</h3>
              <p className="text-xs text-[#A3A3A3] mb-6 font-normal">
                Fill out the form below to initiate direct email communication.
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-[#F20D2F]/10 border border-[#F20D2F]/30 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-[#F20D2F] mx-auto" />
                  <h4 className="text-lg font-heading font-bold text-[#FFFFFF]">Message Prepared!</h4>
                  <p className="text-xs text-[#A3A3A3]">
                    Your default email client has been launched with your message pre-filled. If it didn't open automatically, you can email directly to <strong className="text-[#FFFFFF]">{personalInfo.email}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-4 py-2 text-xs font-mono-tech font-bold text-[#FFFFFF] bg-[#F20D2F] hover:bg-[#A8061F] rounded-xl cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono-tech text-[#A3A3A3] font-bold mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-[#1C1C1C] border border-[#262626] text-[#FFFFFF] placeholder:text-[#737373] text-xs focus:outline-none focus:border-[#F20D2F] transition-colors"
                      />
                      {errors.name && (
                        <span className="text-[10px] text-[#F20D2F] flex items-center gap-1 mt-1 font-mono-tech">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-mono-tech text-[#A3A3A3] font-bold mb-1">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#1C1C1C] border border-[#262626] text-[#FFFFFF] placeholder:text-[#737373] text-xs focus:outline-none focus:border-[#F20D2F] transition-colors"
                      />
                      {errors.email && (
                        <span className="text-[10px] text-[#F20D2F] flex items-center gap-1 mt-1 font-mono-tech">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono-tech text-[#A3A3A3] font-bold mb-1">
                      Subject *
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Internship Opportunity / Project Inquiry"
                      className="w-full px-4 py-3 rounded-xl bg-[#1C1C1C] border border-[#262626] text-[#FFFFFF] placeholder:text-[#737373] text-xs focus:outline-none focus:border-[#F20D2F] transition-colors"
                    />
                    {errors.subject && (
                      <span className="text-[10px] text-[#F20D2F] flex items-center gap-1 mt-1 font-mono-tech">
                        <AlertCircle className="w-3 h-3" /> {errors.subject}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono-tech text-[#A3A3A3] font-bold mb-1">
                      Message *
                    </label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Dharanesh, I would like to discuss..."
                      className="w-full px-4 py-3 rounded-xl bg-[#1C1C1C] border border-[#262626] text-[#FFFFFF] placeholder:text-[#737373] text-xs focus:outline-none focus:border-[#F20D2F] transition-colors resize-none"
                    />
                    {errors.message && (
                      <span className="text-[10px] text-[#F20D2F] flex items-center gap-1 mt-1 font-mono-tech">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 text-xs font-bold font-mono-tech text-[#FFFFFF] bg-[#F20D2F] hover:bg-[#A8061F] rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#FFFFFF]" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </RevealOnScroll>
        </div>

      </div>
    </AnimatedFrame>
  );
};
