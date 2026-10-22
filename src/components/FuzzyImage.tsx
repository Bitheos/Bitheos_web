'use client'

import React, { useEffect, useRef } from 'react';

interface FuzzyImageProps {
  src: string;
  alt: string;
  size?: number;
  className?: string;
  enableHover?: boolean;
  baseIntensity?: number;
  hoverIntensity?: number;
  fuzzRange?: number;
  /** Estado de hover externo. Si se pasa, sustituye la detección interna. */
  hovered?: boolean;
}

const FuzzyImage: React.FC<FuzzyImageProps> = ({
  src,
  alt,
  size = 32,
  className = '',
  enableHover = true,
  baseIntensity = 0.06,
  hoverIntensity = 0.3,
  fuzzRange,
  hovered,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const hoveredRef = useRef(hovered);

  useEffect(() => {
    hoveredRef.current = hovered;
  }, [hovered]);

  useEffect(() => {
    let animationFrameId = 0;
    let isCancelled = false;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const pixels = Math.round(size * dpr);
    canvas.width = pixels;
    canvas.height = pixels;
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const externallyControlled = hoveredRef.current !== undefined;
    const range = fuzzRange ?? Math.max(6, size * 0.5);

    // La imagen se escala una sola vez a un canvas intermedio; el temblor
    // copia filas de ese canvas, no del PNG original.
    const offscreen = document.createElement('canvas');
    offscreen.width = pixels;
    offscreen.height = pixels;
    const offCtx = offscreen.getContext('2d');
    if (!offCtx) return;

    const img = new window.Image();
    img.decoding = 'async';

    let isHovering = false;
    let started = false;

    const draw = (intensity: number) => {
      ctx.clearRect(0, 0, pixels, pixels);
      for (let row = 0; row < pixels; row++) {
        const dx = Math.floor(intensity * (Math.random() - 0.5) * range) * dpr;
        ctx.drawImage(offscreen, 0, row, pixels, 1, dx, row, pixels, 1);
      }
    };

    const run = () => {
      if (isCancelled) return;
      const isActive = hoveredRef.current ?? isHovering;
      draw(isActive ? hoverIntensity : baseIntensity);
      animationFrameId = window.requestAnimationFrame(run);
    };

    const handleLoad = () => {
      if (isCancelled || started) return;
      started = true;
      offCtx.clearRect(0, 0, pixels, pixels);
      offCtx.drawImage(img, 0, 0, pixels, pixels);
      if (reduceMotion) {
        draw(0);
        return;
      }
      run();
    };

    img.addEventListener('load', handleLoad, { once: true });
    img.src = src;
    if (img.complete) handleLoad();

    const handleMouseEnter = () => {
      isHovering = true;
    };
    const handleMouseLeave = () => {
      isHovering = false;
    };

    if (enableHover && !reduceMotion && !externallyControlled) {
      canvas.addEventListener('mouseenter', handleMouseEnter);
      canvas.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      isCancelled = true;
      window.cancelAnimationFrame(animationFrameId);
      img.removeEventListener('load', handleLoad);
      canvas.removeEventListener('mouseenter', handleMouseEnter);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [src, size, enableHover, baseIntensity, hoverIntensity, fuzzRange]);

  return <canvas ref={canvasRef} role="img" aria-label={alt} className={className} />;
};

export default FuzzyImage;
