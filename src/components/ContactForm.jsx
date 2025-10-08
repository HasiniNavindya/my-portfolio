// src/components/ContactForm.jsx
"use client";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Thank you! I will get back to you soon.");
    setForm({ name: "", email: "", message: "" });
    // Here you can later integrate SendGrid API or Next.js API route
  };

  return (
    <section className="bg-gray-900 text-white py-24 px-6" id="contact">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-red-500 mb-8 text-center">
          Contact Me
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 bg-gray-800 p-8 rounded-lg shadow"
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="p-3 rounded bg-gray-700 text-white focus:outline-none"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="p-3 rounded bg-gray-700 text-white focus:outline-none"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            className="p-3 rounded bg-gray-700 text-white focus:outline-none resize-none h-32"
          />
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-600 text-white py-3 rounded transition"
          >
            Send Message
          </button>
        </form>
        {status && <p className="mt-4 text-green-400 text-center">{status}</p>}
      </div>
    </section>
  );
}
