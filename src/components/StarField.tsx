import React, { useEffect, useRef } from 'react';

interface StarFieldProps {
  className?: string;
}

export const StarField: React.FC<StarFieldProps> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    const stars: Array<{ x: number; y: number; size: number; opacity: number; twinkleSpeed: number }> = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createStars = () => {
      stars.length = 0;
      const numStars = Math.floor((canvas.width * canvas.height) / 4000);
      
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.3,
          opacity: Math.random() * 0.9 + 0.1,
          twinkleSpeed: Math.random() * 0.015 + 0.003
        });
      }
    };

    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      stars.forEach(star => {
        star.opacity += Math.sin(time * star.twinkleSpeed) * 0.01;
        star.opacity = Math.max(0.1, Math.min(1, star.opacity));
        
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        
        // Add occasional golden stars
        if (Math.random() < 0.1) {
          ctx.fillStyle = `rgba(248, 214, 19, ${star.opacity * 0.6})`;
        } else {
          ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * 0.8})`;
        }
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createStars();
    animate(0);

    window.addEventListener('resize', () => {
      resizeCanvas();
      createStars();
    });

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ zIndex: -1 }}
    />
  );
};