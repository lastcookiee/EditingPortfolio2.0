"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EMAIL = "kunalsingh.prf@gmail.com";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    const mailtoSubject = encodeURIComponent(
      subject || `New Inquiry from ${name}`
    );
    const mailtoBody = encodeURIComponent(
      `Hi Kunal,\n\n${message}\n\n---\nFrom: ${name}\nEmail: ${email}`
    );

    // Open user's email client with the pre-filled message
    window.location.href = `mailto:${EMAIL}?subject=${mailtoSubject}&body=${mailtoBody}`;

    // Reset after a short delay
    setTimeout(() => {
      setIsSending(false);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      onClose();
    }, 1000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[10001] flex items-center justify-center p-4 md:p-8"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/90 modal-backdrop" />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 40 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative w-full max-w-lg z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Glow effect behind modal */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00d4ff]/20 to-[#a855f7]/20 blur-xl opacity-50 pointer-events-none" />

            <div className="relative bg-[#0a0a0a] border border-white/10 overflow-hidden">
              {/* Scanlines */}
              <div className="absolute inset-0 scanlines opacity-10 pointer-events-none" />

              {/* Header */}
              <div className="p-6 md:p-8 border-b border-white/5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] tracking-[0.4em] text-[#00d4ff]/50 font-mono uppercase mb-1">
                      // NEW MESSAGE
                    </p>
                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                      Let&apos;s Talk<span className="text-[#00d4ff]">.</span>
                    </h3>
                  </div>
                  <button
                    onClick={onClose}
                    className="w-8 h-8 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all duration-300 text-xs"
                    data-cursor-hover
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-5">
                {/* Name */}
                <div className="group">
                  <label className="text-[10px] tracking-[0.2em] text-white/30 uppercase block mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full bg-transparent border-b border-white/10 focus:border-[#00d4ff]/50 text-white text-sm py-2 outline-none transition-colors duration-300 placeholder:text-white/15"
                  />
                </div>

                {/* Email */}
                <div className="group">
                  <label className="text-[10px] tracking-[0.2em] text-white/30 uppercase block mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@example.com"
                    className="w-full bg-transparent border-b border-white/10 focus:border-[#00d4ff]/50 text-white text-sm py-2 outline-none transition-colors duration-300 placeholder:text-white/15"
                  />
                </div>

                {/* Subject */}
                <div className="group">
                  <label className="text-[10px] tracking-[0.2em] text-white/30 uppercase block mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Project inquiry, collaboration, etc."
                    className="w-full bg-transparent border-b border-white/10 focus:border-[#00d4ff]/50 text-white text-sm py-2 outline-none transition-colors duration-300 placeholder:text-white/15"
                  />
                </div>

                {/* Message */}
                <div className="group">
                  <label className="text-[10px] tracking-[0.2em] text-white/30 uppercase block mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about your project..."
                    className="w-full bg-transparent border-b border-white/10 focus:border-[#00d4ff]/50 text-white text-sm py-2 outline-none transition-colors duration-300 resize-none placeholder:text-white/15"
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={isSending}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 0 30px rgba(0,212,255,0.3)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-[#00d4ff] to-[#a855f7] text-black font-bold text-sm tracking-[0.15em] uppercase relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                  data-cursor-hover
                >
                  <span className="relative z-10">
                    {isSending ? "Opening Email Client..." : "Send Message"}
                  </span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </motion.button>

                {/* Note */}
                <p className="text-[10px] text-white/15 text-center tracking-[0.1em]">
                  This will open your email client with the message pre-filled.
                </p>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
