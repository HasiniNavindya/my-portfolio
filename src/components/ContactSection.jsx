// src/components/ContactSection.jsx
"use client";

import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setLoading(false);
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err?.error || 'Failed to send message');
      }
      setStatus('Thank you! I will get back to you soon.');
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setLoading(false);
      setStatus(err.message || 'Something went wrong.');
    }
  };

  return (
    <section className="contact-section bg-gray-900 py-20 px-6" id="contact">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark">Get in Touch</h2>
          <p className="text-gray-400 text-sm mt-2">Any questions or remarks? Just write us a message!</p>
        </div>

        {/* Transparent form card */}
        <div className="bg-transparent rounded-xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="text-sm text-white/90 block mb-1">Email <span className="text-red-400">*</span></label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="w-full p-3 rounded-md bg-transparent placeholder-[#7aaed0] text-[#0b3b66] border border-white/20"
                />
              </div>

              <div className="flex-1">
                <label className="text-sm text-white/90 block mb-1">Name <span className="text-red-400">*</span></label>
                <input
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full p-3 rounded-md bg-transparent placeholder-[#7aaed0] text-[#0b3b66] border border-white/20"
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-white/90 block mb-1">Subject</label>
              <input
                name="subject"
                type="text"
                value={form.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                className="w-full p-3 rounded-md bg-transparent placeholder-[#7aaed0] text-[#0b3b66] border border-white/20"
              />
            </div>

            <div>
              <label className="text-sm text-white/90 block mb-1">Message <span className="text-red-400">*</span></label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your message..."
                required
                className="w-full p-3 rounded-md bg-transparent placeholder-[#7b8389] text-[#0b3b66] h-40 resize-none border border-white/20"
              />
            </div>

            <div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-white text-[#0b3b66] font-semibold py-4 px-10 rounded-full disabled:opacity-60 border border-white flex items-center gap-3"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M22 2L11 13" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M22 2l-7 20-4-9-9-4 20-7z" />
                  </svg>
                  {loading ? 'Sending…' : 'SEND MESSAGE'}
                </button>
              </div>
            </div>

            {status && (
              <p className={`mt-3 text-center ${status.includes('Thank') ? 'text-green-400' : 'text-red-400'}`}>{status}</p>
            )}
          </form>

          {/* Inline icon-buttons for quick actions: only icons shown */}
          <div className="mt-10 flex items-center justify-center gap-6">
            <a
              href="mailto:hasini.navindya001@gmail.com"
              aria-label="Send email"
              className="w-14 h-14 rounded-full flex items-center justify-center bg-transparent border border-white/20 hover:bg-white/10 transition-colors"
              title="Email"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8.5v7A2.5 2.5 0 0 0 5.5 18h13A2.5 2.5 0 0 0 21 15.5v-7" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8.5l8.5 6L20 8.5" />
              </svg>
            </a>

            <a
              href="https://github.com/HasiniNavindya"
              target="_blank"
              rel="noreferrer"
              aria-label="Open GitHub profile"
              className="w-14 h-14 rounded-full flex items-center justify-center bg-transparent border border-white/20 hover:bg-white/10 transition-colors"
              title="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.36-1.3-1.72-1.3-1.72-1.06-.73.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.69 0-1.26.45-2.29 1.2-3.1-.12-.3-.52-1.51.11-3.15 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92-.39c.99 0 1.99.13 2.92.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.64.23 2.85.11 3.15.75.81 1.2 1.84 1.2 3.1 0 4.42-2.7 5.4-5.27 5.68.42.37.8 1.1.8 2.22 0 1.6-.01 2.89-.01 3.28 0 .31.21.68.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/hasini-navindya"
              target="_blank"
              rel="noreferrer"
              aria-label="Open LinkedIn profile"
              className="w-14 h-14 rounded-full flex items-center justify-center bg-transparent border border-white/20 hover:bg-white/10 transition-colors"
              title="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452H17.21v-5.569c0-1.327-.026-3.036-1.849-3.036-1.85 0-2.133 1.445-2.133 2.94v5.665H9.028V9h3.078v1.56h.044c.43-.81 1.48-1.666 3.047-1.666 3.257 0 3.86 2.145 3.86 4.935v6.623zM5.337 7.433a1.77 1.77 0 1 1 0-3.54 1.77 1.77 0 0 1 0 3.54zM6.915 20.452H3.758V9h3.157v11.452z" />
              </svg>
            </a>

            <a
              href="tel:+94702857054"
              aria-label="Call phone"
              className="w-14 h-14 rounded-full flex items-center justify-center bg-transparent border border-white/20 hover:bg-white/10 transition-colors"
              title="Phone"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M22 16.92V20a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3 5.18 2 2 0 0 1 5 3h3.09a1 1 0 0 1 1 .75c.12.63.35 1.95.7 3.07a1 1 0 0 1-.24 1l-1.27 1.27a16 16 0 0 0 6.6 6.6l1.27-1.27a1 1 0 0 1 1-.24c1.12.35 2.44.58 3.07.7a1 1 0 0 1 .75 1V16.92z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}



