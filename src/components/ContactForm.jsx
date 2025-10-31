"use client";

import { useState } from "react";

export default function ContactForm({ embedded = false, className = "" }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
      .then(async (res) => {
        setLoading(false);
        if (!res.ok) {
          const err = await res.json().catch(() => ({}));
          throw new Error(err?.error || 'Failed to send message');
        }
        setStatus('Thank you! I will get back to you soon.');
        setForm({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        setLoading(false);
        setStatus(err.message || 'Something went wrong. Please try again later.');
      });
  };

  const FormBody = (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-col gap-4 bg-white border border-gray-100 p-6 md:p-8 rounded-xl shadow-md ${className}`}
    >
      {/* Name Input */}
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Your Name"
        required
        className="p-3 rounded bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
      />

      {/* Email Input */}
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Your Email"
        required
        className="p-3 rounded bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
      />

      {/* Message Box */}
      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Typing your message here..."
        required
        className="p-3 rounded bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary resize-none h-40"
      />

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="text-white py-3 px-8 rounded-full transition disabled:opacity-60 disabled:cursor-not-allowed self-start mt-2"
        style={{ backgroundColor: 'var(--primary)', boxShadow: '0 6px 18px rgba(2,46,73,0.18)' }}
      >
        {loading ? 'Sending…' : 'Send'}
      </button>

      {/* Status Message */}
      {status && (
        <p className={`text-sm mt-2 ${status.includes('Thank') ? 'text-green-600' : 'text-red-500'}`}>
          {status}
        </p>
      )}
    </form>
  );

  // If the form is embedded (used inside another component), just return the form
  if (embedded) return FormBody;

  // Otherwise, render as a full-width section
  return (
    <section
      className="bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white py-24 px-6"
      id="contact"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-primary-dark mb-8 text-center">
          Contact Me
        </h2>
        {FormBody}
      </div>
    </section>
  );
}
