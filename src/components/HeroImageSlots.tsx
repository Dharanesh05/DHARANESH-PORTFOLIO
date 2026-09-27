import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, Maximize2, X, RefreshCw } from 'lucide-react';

export const HeroImageSlots: React.FC = () => {
  // Profile Main Slot State
  const [profileSrc, setProfileSrc] = useState<string>('/images/profile_avatar.jpg');
  const [previewImage, setPreviewImage] = useState<{ src: string; title: string } | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Trigger file browser
  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  // Process File Selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        setProfileSrc(result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Reset image back to default
  const handleResetDefault = () => {
    setProfileSrc('/images/profile_avatar.jpg');
  };

  return (
    <div className="relative w-full max-w-md mx-auto py-4 flex flex-col items-center justify-center select-none">
      {/* Hidden File Input for Image Upload */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />

      {/* Ambient Glow Backdrop */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 via-teal-500/20 to-green-600/20 rounded-full blur-3xl pointer-events-none animate-pulse" />

      {/* MAIN PROFILE SHOWCASE CARD */}
      <div className="relative w-full flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative group w-72 h-72 sm:w-84 sm:h-84 md:w-96 md:h-96 rounded-3xl p-3 glass-panel border-2 border-emerald-500/40 shadow-2xl shadow-emerald-950/40 overflow-hidden"
        >
          {/* Animated Glow Border */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-emerald-500/20 via-teal-400/10 to-green-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          {/* Profile Image Element */}
          <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-900">
            <img
              src={profileSrc}
              alt="Dharanesh R - Profile Showcase"
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />

            {/* Top Status Pill */}
            <div className="absolute top-3.5 left-3.5 z-10 glass-panel px-3.5 py-1.5 rounded-full border border-emerald-400/40 text-xs font-mono-tech font-bold text-white flex items-center gap-2 shadow-md bg-emerald-950/80">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>ECE & AI ENGINEER</span>
            </div>

            {/* Hover Action Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/45 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-5 gap-2.5">
              <div className="flex items-center gap-2.5">
                <button
                  onClick={handleUploadClick}
                  className="flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl shadow-lg transition-all cursor-pointer hover:scale-105"
                >
                  <Upload className="w-4 h-4" />
                  <span>Upload Photo</span>
                </button>
                <button
                  onClick={() => setPreviewImage({ src: profileSrc, title: 'Profile Showcase' })}
                  className="p-2.5 text-white bg-slate-800/90 hover:bg-slate-700 rounded-xl transition-all cursor-pointer hover:scale-105"
                  title="View Fullscreen"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
                {profileSrc !== '/images/profile_avatar.jpg' && (
                  <button
                    onClick={handleResetDefault}
                    className="p-2.5 text-emerald-300 bg-slate-900/90 hover:bg-slate-800 rounded-xl transition-all cursor-pointer hover:scale-105"
                    title="Reset Photo"
                  >
                    <RefreshCw className="w-4 h-4" />
                  </button>
                )}
              </div>
              <span className="text-[11px] font-mono-tech text-emerald-200">Click button to upload your photo</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      <AnimatePresence>
        {previewImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setPreviewImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-3xl w-full glass-panel p-4 rounded-3xl border border-emerald-500/40 shadow-2xl flex flex-col items-center gap-3"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full flex items-center justify-between px-2">
                <span className="text-sm font-mono-tech font-bold text-emerald-300">
                  {previewImage.title}
                </span>
                <button
                  onClick={() => setPreviewImage(null)}
                  className="p-1.5 text-slate-400 hover:text-white bg-slate-800/60 rounded-full transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="w-full max-h-[75vh] rounded-2xl overflow-hidden bg-slate-900 border border-slate-800">
                <img
                  src={previewImage.src}
                  alt={previewImage.title}
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
