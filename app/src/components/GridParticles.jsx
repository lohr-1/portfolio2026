import React, { useRef, useEffect } from 'react';

export default function GridParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    // Mouse coordinates relative to the canvas
    const mouse = { x: null, y: null, targetX: null, targetY: null };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.targetX = null;
      mouse.targetY = null;
    };

    const parent = canvas.parentElement;
    if (parent) {
      parent.addEventListener('mousemove', handleMouseMove);
      parent.addEventListener('mouseleave', handleMouseLeave);
    }

    // Grid details
    const gridSize = 40;
    
    // Symbols to render in the background
    const symbolsList = ['+', '■', '◆', '//', 'x'];
    const numParticles = 24;
    const particles = [];

    // Initialize particles
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        baseX: 0,
        baseY: 0,
        size: Math.floor(Math.random() * 8) + 8, // Font size for glyph
        symbol: symbolsList[Math.floor(Math.random() * symbolsList.length)],
        opacity: Math.random() * 0.12 + 0.04,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        parallaxFactor: Math.random() * 15 + 10, // how much it shifts with mouse
      });
    }

    // Smooth mouse coordinates interpolation
    mouse.x = width / 2;
    mouse.y = height / 2;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Interpolate mouse movement
      if (mouse.targetX !== null && mouse.targetY !== null) {
        mouse.x += (mouse.targetX - mouse.x) * 0.08;
        mouse.y += (mouse.targetY - mouse.y) * 0.08;
      } else {
        // Return mouse tracking to center slowly
        mouse.x += (width / 2 - mouse.x) * 0.03;
        mouse.y += (height / 2 - mouse.y) * 0.03;
      }

      // 1. Draw subtle technical grid dots
      ctx.fillStyle = 'rgba(119, 119, 119, 0.05)';
      const offsetX = ((mouse.x - width / 2) * 0.02) % gridSize;
      const offsetY = ((mouse.y - height / 2) * 0.02) % gridSize;

      for (let x = offsetX; x < width; x += gridSize) {
        for (let y = offsetY; y < height; y += gridSize) {
          ctx.beginPath();
          ctx.arc(x, y, 1, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // 2. Draw blueprint crosshairs / grid markers at corners
      ctx.strokeStyle = 'rgba(119, 119, 119, 0.1)';
      ctx.lineWidth = 1;
      const borderPadding = 20;

      // Draw cross at top-left
      ctx.beginPath();
      ctx.moveTo(borderPadding - 5, borderPadding);
      ctx.lineTo(borderPadding + 5, borderPadding);
      ctx.moveTo(borderPadding, borderPadding - 5);
      ctx.lineTo(borderPadding, borderPadding + 5);
      ctx.stroke();

      // Draw cross at bottom-right
      ctx.beginPath();
      ctx.moveTo(width - borderPadding - 5, height - borderPadding);
      ctx.lineTo(width - borderPadding + 5, height - borderPadding);
      ctx.moveTo(width - borderPadding, height - borderPadding - 5);
      ctx.lineTo(width - borderPadding, height - borderPadding + 5);
      ctx.stroke();

      // 3. Draw particles (blueprint symbols)
      particles.forEach((p) => {
        // Move particle
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around boundaries
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Apply mouse parallax shift
        const dx = (mouse.x - width / 2) / p.parallaxFactor;
        const dy = (mouse.y - height / 2) / p.parallaxFactor;

        // Calculate actual render coordinate
        const renderX = p.x + dx;
        const renderY = p.y + dy;

        // Render symbol
        ctx.fillStyle = `rgba(0, 0, 0, ${p.opacity})`;
        ctx.font = `bold ${p.size}px "Space Grotesk", monospace`;
        ctx.textBaseline = 'middle';
        ctx.textAlign = 'center';
        ctx.fillText(p.symbol, renderX, renderY);
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (parent) {
        parent.removeEventListener('mousemove', handleMouseMove);
        parent.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />;
}
