"use client";

import { useEffect, useRef } from "react";

export default function GlobalBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return; // respect reduced motion

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = Math.max(1, window.devicePixelRatio || 1);

    function rand(min, max) { return Math.random() * (max - min) + min; }

    let particles = [];
    function initParticles() {
      particles = [];
      const PARTICLE_COUNT = Math.max(160, Math.floor((width * height) / 9000));
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          r: rand(0.25, 0.9),
          vx: rand(-0.12, 0.12),
          vy: rand(-0.04, 0.04),
          alpha: rand(0.25, 0.95),
          twinkle: Math.random() * Math.PI * 2,
          twSpeed: rand(0.06, 0.14),
        });
      }
    }

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.max(1, window.devicePixelRatio || 1);
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initParticles();
    }

    initParticles();

    let rafId;
    function draw() {
      // clear high-res canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // subtle vertical gradient background (deep navy/purple)
      const g = ctx.createLinearGradient(0, 0, 0, height);
      g.addColorStop(0, '#06061a');
      g.addColorStop(1, '#040415');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, width, height);

      for (let p of particles) {
        p.x += p.vx + Math.sin(p.twinkle) * 0.06;
        p.y += p.vy + Math.cos(p.twinkle) * 0.03;
        p.twinkle += p.twSpeed;

        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        const alpha = 0.5 * (0.6 + Math.sin(p.twinkle) * 0.4) * p.alpha;
        ctx.beginPath();
        ctx.fillStyle = `rgba(255,255,255,${alpha})`;
        ctx.shadowBlur = p.r * 6;
        ctx.shadowColor = `rgba(255,255,255,${alpha})`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      rafId = requestAnimationFrame(draw);
    }

    window.addEventListener('resize', resize);
    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div aria-hidden="true" className="global-bg">
      <canvas ref={canvasRef} />
    </div>
  );
}
