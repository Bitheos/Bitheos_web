'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

export interface NavLink {
  name: string;
  href: string;
}

interface NavLinkGroupProps {
  navLinks: NavLink[];
  activeLink: string;
}

const NavLinkGroup: React.FC<NavLinkGroupProps> = ({ navLinks, activeLink }) => {
  const dockRef = useRef<HTMLDivElement>(null);
  const [indicator, setIndicator] = useState<{ left: number; width: number } | null>(null);

  const measure = useCallback(() => {
    const dock = dockRef.current;
    if (!dock) return;

    const target = Array.from(dock.querySelectorAll<HTMLAnchorElement>('a[data-href]'))
      .find((link) => link.getAttribute('data-href') === activeLink);

    if (!target) {
      setIndicator(null);
      return;
    }

    const dockRect = dock.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    setIndicator({ left: targetRect.left - dockRect.left, width: targetRect.width });
  }, [activeLink]);

  useEffect(() => {
    const frame = window.requestAnimationFrame(measure);
    return () => window.cancelAnimationFrame(frame);
  }, [measure]);

  useEffect(() => {
    const dock = dockRef.current;
    if (!dock) return;

    const observer = new ResizeObserver(measure);
    observer.observe(dock);
    window.addEventListener('resize', measure);
    document.fonts?.ready.then(measure);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [measure]);

  return (
    <StyledWrapper>
      <div className="dock" ref={dockRef}>
        <span
          className="indicator"
          aria-hidden="true"
          style={{
            opacity: indicator ? 1 : 0,
            transform: `translateX(${indicator?.left ?? 0}px)`,
            width: indicator?.width ?? 0,
          }}
        />
        {navLinks.map((link) => {
          const isActive = link.href === activeLink;
          return (
            <a
              key={link.name}
              href={link.href}
              data-href={link.href}
              aria-current={isActive ? 'true' : undefined}
              className={`navLink${isActive ? ' active' : ''}`}
            >
              {link.name}
            </a>
          );
        })}
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .dock {
    position: relative;
    display: flex;
    align-items: center;
    gap: 2px;
    padding: 4px;
    border-radius: 999px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0.02));
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.18),
      inset 0 -1px 0 rgba(0, 0, 0, 0.25),
      0 10px 30px rgba(0, 0, 0, 0.35);
    backdrop-filter: blur(14px) saturate(1.4);
    -webkit-backdrop-filter: blur(14px) saturate(1.4);
  }

  .indicator {
    position: absolute;
    top: 4px;
    left: 0;
    bottom: 4px;
    border-radius: 999px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.24), rgba(255, 255, 255, 0.07));
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow:
      0 0 0 1px rgba(99, 102, 241, 0.16),
      0 8px 22px rgba(79, 70, 229, 0.28),
      inset 0 1px 0 rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    pointer-events: none;
    transition:
      transform 420ms cubic-bezier(0.22, 1, 0.36, 1),
      width 420ms cubic-bezier(0.22, 1, 0.36, 1),
      opacity 260ms ease;
    will-change: transform, width;
  }

  .indicator::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: radial-gradient(130% 150% at 50% 130%, rgba(129, 140, 248, 0.5), rgba(129, 140, 248, 0) 70%);
  }

  .navLink {
    position: relative;
    z-index: 1;
    padding: 8px 18px;
    border-radius: 999px;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.02em;
    white-space: nowrap;
    text-decoration: none;
    color: rgba(255, 255, 255, 0.62);
    transition:
      color 300ms cubic-bezier(0.25, 0.8, 0.25, 1),
      transform 300ms cubic-bezier(0.25, 0.8, 0.25, 1),
      text-shadow 300ms ease;
  }

  .navLink::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.03));
    opacity: 0;
    transition: opacity 300ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }

  .navLink:hover {
    color: rgba(255, 255, 255, 0.95);
  }

  .navLink:hover::before {
    opacity: 1;
  }

  .navLink:active {
    transform: translateY(1px);
  }

  .navLink.active {
    color: #ffffff;
    text-shadow: 0 0 18px rgba(129, 140, 248, 0.55);
  }

  .navLink.active::before {
    opacity: 0;
  }

  .navLink:focus-visible {
    outline: 2px solid rgba(165, 180, 252, 0.9);
    outline-offset: 2px;
    color: #ffffff;
  }

  @media (prefers-reduced-motion: reduce) {
    .indicator,
    .navLink,
    .navLink::before {
      transition-duration: 1ms;
    }
  }
`;

export default NavLinkGroup;