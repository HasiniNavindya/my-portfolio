"use client";

import { useState, useEffect } from 'react';

export default function AchievementCard({ a }) {
  const [open, setOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  const [cardIndex, setCardIndex] = useState(0);

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setOpen(false);
      if (e.key === 'ArrowRight') setModalIndex((i) => (i + 1) % (a.images?.length || 1));
      if (e.key === 'ArrowLeft') setModalIndex((i) => (i - 1 + (a.images?.length || 1)) % (a.images?.length || 1));
    }
    if (open) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, a.images]);

  return (
    <>
      <article className="group bg-gray-800/50 border border-white/8 rounded-xl overflow-hidden shadow-sm transform transition-all duration-200 hover:shadow-xl hover:-translate-y-1 hover:scale-102">
        <div className="h-36 md:h-44 w-full relative bg-gray-900 overflow-hidden">
          <img src={a.images[cardIndex]} alt={`${a.title} image ${cardIndex+1}`} className="w-full h-36 md:h-44 object-cover" />

          <button type="button" aria-label="Previous image" onClick={(e) => { e.stopPropagation(); setCardIndex((ci) => (ci - 1 + (a.images?.length || 1)) % (a.images?.length || 1)); }} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-2 hover:bg-black/60 z-30">
            ◀
          </button>
          <button type="button" aria-label="Next image" onClick={(e) => { e.stopPropagation(); setCardIndex((ci) => (ci + 1) % (a.images?.length || 1)); }} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-2 hover:bg-black/60 z-30">
            ▶
          </button>

          <div className="absolute left-1/2 -translate-x-1/2 bottom-2 flex gap-2 z-30">
            {a.images.map((_, i) => (
              <button key={i} onClick={(e) => { e.stopPropagation(); setCardIndex(i); }} className={`w-2 h-2 rounded-full ${i === cardIndex ? 'bg-white' : 'bg-white/30'}`} aria-label={`Go to image ${i+1}`} />
            ))}
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-lg font-bold text-white mb-1">{a.title} — {a.year}</h3>
          <p className="text-gray-300 text-sm mb-3">{a.place} • {a.organizer}</p>

          <div className="flex items-center justify-end">
            <button onClick={() => { setModalIndex(cardIndex); setOpen(true); }} className="inline-block bg-white text-gray-900 px-3 py-2 rounded-md font-medium hover:bg-gray-100 transition">View</button>
          </div>
        </div>
      </article>

      {open ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4" role="dialog" aria-modal="true" aria-label={`${a.title} gallery`} onClick={() => setOpen(false)}>
            <div className="relative max-w-4xl w-full max-h-[90vh] bg-transparent" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setOpen(false)} className="absolute -top-3 -right-3 bg-white text-gray-900 rounded-full w-10 h-10 flex items-center justify-center shadow-lg" aria-label="Close">✕</button>

              <div className="flex flex-col md:flex-row items-center gap-4">
                <button onClick={(e) => { e.stopPropagation(); setModalIndex((i) => (i - 1 + (a.images?.length || 1)) % (a.images?.length || 1)); }} className="p-2 bg-white/10 rounded">◀</button>
                <img src={a.images[modalIndex]} alt={`${a.title} full ${modalIndex+1}`} className="w-full h-[50vh] md:h-[70vh] object-contain rounded-lg bg-white/5" />
                <button onClick={(e) => { e.stopPropagation(); setModalIndex((i) => (i + 1) % (a.images?.length || 1)); }} className="p-2 bg-white/10 rounded">▶</button>
              </div>

            <div className="mt-3 flex items-center justify-between">
              <div className="text-sm text-gray-300">{a.title} — {modalIndex+1}/{a.images.length}</div>
              <a href={a.images[modalIndex]} target="_blank" rel="noreferrer" className="inline-block bg-white text-gray-900 px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition">Open in new tab</a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
