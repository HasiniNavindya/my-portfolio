"use client";

import { useState, useEffect } from 'react';

export default function CertificationCard({ cert }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setOpen(false);
    }
    if (open) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      <article className="group bg-gray-800/50 border border-white/8 rounded-xl overflow-hidden shadow-sm transform transition-all duration-200 hover:shadow-xl hover:-translate-y-2 hover:scale-105 hover:ring-2 hover:ring-primary-dark/40 hover:z-10">
        <div className="h-40 w-full relative bg-gray-900">
          <img src={cert.image} alt={`${cert.title} certificate`} className="w-full h-full object-cover" />
        </div>

        <div className="p-6">
          <h3 className="text-lg font-bold text-white mb-1">{cert.title}</h3>
          <p className="text-gray-300 text-sm mb-4">{cert.issuer} • {cert.year}</p>

          <div className="flex items-center justify-end">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-block bg-white text-gray-900 px-3 py-2 rounded-md font-medium hover:bg-gray-100 transition"
            >
              View
            </button>
          </div>
        </div>
      </article>

      {open ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`${cert.title} full certificate`}
          onClick={() => setOpen(false)}
        >
          <div className="relative max-w-4xl w-full max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-3 -right-3 bg-white text-gray-900 rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
              aria-label="Close preview"
            >
              ✕
            </button>

            <img src={cert.image} alt={`${cert.title} full certificate`} className="w-full h-full object-contain rounded-lg" />

            {cert.link && (
              <div className="mt-3 text-right">
                <a href={cert.link} target="_blank" rel="noreferrer" className="inline-block bg-white text-gray-900 px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition">
                  Open in new tab
                </a>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}
