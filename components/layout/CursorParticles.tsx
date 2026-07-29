"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  life: number;
  maxLife: number;
  color: string;
};

const COLORS = ["#ffb300", "#ffd666", "#f2efe9"];

export default function CursorParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    let particles: Particle[] = [];
    let lastX = -1;
    let lastY = -1;
    const MAX_PARTICLES = 160;

    const spawn = (x: number, y: number) => {
      const count = 2;
      for (let i = 0; i < count; i++) {
        if (particles.length >= MAX_PARTICLES) particles.shift();
        particles.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 0.6,
          vy: -Math.random() * 0.5 - 0.15,
          size: Math.random() * 2 + 1,
          life: 0,
          maxLife: Math.random() * 400 + 500,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
        });
      }
    };

    const onMove = (e: MouseEvent) => {
      const dx = lastX < 0 ? 999 : e.clientX - lastX;
      const dy = lastY < 0 ? 999 : e.clientY - lastY;
      if (dx * dx + dy * dy > 64) {
        spawn(e.clientX, e.clientY);
        lastX = e.clientX;
        lastY = e.clientY;
      }
    };
    window.addEventListener("mousemove", onMove);

    let raf = 0;
    let lastTime = performance.now();

    const tick = (now: number) => {
      const dt = now - lastTime;
      lastTime = now;
      ctx.clearRect(0, 0, width, height);

      particles = particles.filter((p) => p.life < p.maxLife);
      for (const p of particles) {
        p.life += dt;
        p.x += p.vx * (dt / 16);
        p.y += p.vy * (dt / 16);

        const t = p.life / p.maxLife;
        const alpha = 1 - t;
        const size = p.size * (1 - t * 0.6);

        ctx.beginPath();
        ctx.globalAlpha = Math.max(alpha, 0);
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 6;
        ctx.arc(p.x, p.y, Math.max(size, 0), 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={canvasRef} className="cursor-particles" aria-hidden="true" />;
}
