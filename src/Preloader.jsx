import React, { useEffect, useState, useRef } from 'react';
import './Preloader.css';

const NAME_CHARS = ['E','R','A','M',' ','N','A','U','S','H','A','D'];
const PARTICLES  = Array.from({ length: 22 }, (_, i) => i);

export default function Preloader({ onComplete }) {
  const [count,   setCount]   = useState(0);
  const [phase,   setPhase]   = useState('enter');   // enter | run | exit | done
  const [visible, setVisible] = useState(Array(NAME_CHARS.length).fill(false));
  const rafRef = useRef(null);

  /* ── letter-by-letter reveal ── */
  useEffect(() => {
    NAME_CHARS.forEach((_, i) => {
      setTimeout(() => {
        setVisible(v => { const n=[...v]; n[i]=true; return n; });
      }, 300 + i * 90);
    });
  }, []);

  /* ── counter ── */
  useEffect(() => {
    if (phase !== 'run') return;
    let start = null;
    const duration = 2800;
    const step = ts => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = p < 0.5 ? 2*p*p : 1 - Math.pow(-2*p+2,2)/2;
      setCount(Math.floor(eased * 100));
      if (p < 1) { rafRef.current = requestAnimationFrame(step); }
      else {
        setCount(100);
        setTimeout(() => setPhase('exit'), 300);
        setTimeout(() => setPhase('done'), 1600);
        setTimeout(() => onComplete?.(), 1800);
      }
    };
    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [phase, onComplete]);

  /* ── start run after enter animation ── */
  useEffect(() => {
    const t = setTimeout(() => setPhase('run'), 600);
    return () => clearTimeout(t);
  }, []);

  if (phase === 'done') return null;

  return (
    <div className={`pl2-root pl2-phase--${phase}`} aria-live="polite" aria-label="Loading Eram Naushad portfolio">

      {/* ══ DEEP BACKGROUND LAYERS ══ */}
      <div className="pl2-bg-base"   aria-hidden="true" />
      <div className="pl2-bg-radial" aria-hidden="true" />
      <div className="pl2-noise"     aria-hidden="true" />

      {/* ══ ANIMATED GRID ══ */}
      <div className="pl2-grid" aria-hidden="true" />

      {/* ══ MORPHING BLOB ══ */}
      <div className="pl2-blob pl2-blob--1" aria-hidden="true" />
      <div className="pl2-blob pl2-blob--2" aria-hidden="true" />
      <div className="pl2-blob pl2-blob--3" aria-hidden="true" />

      {/* ══ PARTICLES ══ */}
      <div className="pl2-particles" aria-hidden="true">
        {PARTICLES.map(i => (
          <span key={i} className="pl2-particle" style={{ '--pi': i }} />
        ))}
      </div>

      {/* ══ SPINNING RINGS ══ */}
      <div className="pl2-ring pl2-ring--1" aria-hidden="true">
        <div className="pl2-ring-dot" />
      </div>
      <div className="pl2-ring pl2-ring--2" aria-hidden="true">
        <div className="pl2-ring-dot" />
      </div>
      <div className="pl2-ring pl2-ring--3" aria-hidden="true" />

      {/* ══ HORIZONTAL SCAN LINE ══ */}
      <div className="pl2-scanline" aria-hidden="true" />

      {/* ══ CORNER BRACKETS ══ */}
      {['tl','tr','bl','br'].map(pos => (
        <div key={pos} className={`pl2-bracket pl2-bracket--${pos}`} aria-hidden="true">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            {pos === 'tl' && <><path d="M1 18 L1 1 L18 1" stroke="url(#g1)" strokeWidth="1.5"/></>}
            {pos === 'tr' && <><path d="M18 1 L35 1 L35 18" stroke="url(#g1)" strokeWidth="1.5"/></>}
            {pos === 'bl' && <><path d="M1 18 L1 35 L18 35" stroke="url(#g1)" strokeWidth="1.5"/></>}
            {pos === 'br' && <><path d="M18 35 L35 35 L35 18" stroke="url(#g1)" strokeWidth="1.5"/></>}
            <defs>
              <linearGradient id="g1" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#e8a0a0" stopOpacity="0.9"/>
                <stop offset="100%" stopColor="#c4b5d4" stopOpacity="0.4"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
      ))}

      {/* ══ MAIN CONTENT ══ */}
      <div className="pl2-center">

        {/* eyebrow */}
        <div className="pl2-eyebrow" aria-hidden="true">
          <span className="pl2-eyebrow-line" />
          <span className="pl2-eyebrow-text">PORTFOLIO</span>
          <span className="pl2-eyebrow-line" />
        </div>

        {/* Giant name */}
        <h1 className="pl2-name" aria-label="Eram Naushad">
          {NAME_CHARS.map((ch, i) => (
            <span
              key={i}
              className={`pl2-char${ch === ' ' ? ' pl2-char--space' : ''}${visible[i] ? ' pl2-char--visible' : ''}`}
              style={{ '--ci': i }}
            >
              {ch === ' ' ? '\u00A0' : ch}
            </span>
          ))}
        </h1>

        {/* tagline */}
        <p className="pl2-tagline">
          {'Student · Aspiring AI Enthusiast'.split('').map((c, i) => (
            <span key={i} className="pl2-tchar" style={{ '--ti': i }}>{c === ' ' ? '\u00A0' : c}</span>
          ))}
        </p>

        {/* counter + bar */}
        <div className="pl2-progress-wrap">
          <div className="pl2-counter-wrap">
            <span className="pl2-counter">{String(count).padStart(3,'0')}</span>
            <span className="pl2-counter-pct">%</span>
          </div>
          <div className="pl2-bar-outer">
            <div className="pl2-bar-track">
              <div className="pl2-bar-fill" style={{ width: `${count}%` }}>
                <div className="pl2-bar-shimmer" />
                <div className="pl2-bar-tip" />
              </div>
            </div>
            <div className="pl2-bar-labels">
              <span>LOADING</span>
              <span>EXPERIENCE</span>
            </div>
          </div>
        </div>

        {/* status text */}
        <div className="pl2-status">
          {count < 30  && <span className="pl2-status-text">Initialising...</span>}
          {count >= 30 && count < 65  && <span className="pl2-status-text">Building experience...</span>}
          {count >= 65 && count < 95  && <span className="pl2-status-text">Almost there...</span>}
          {count >= 95 && <span className="pl2-status-text">Welcome ✦</span>}
        </div>

      </div>

      {/* ══ BOTTOM META ══ */}
      <div className="pl2-meta-left" aria-hidden="true">
        <span className="pl2-meta-dot" />
        <span>Kolkata, India</span>
      </div>
      <div className="pl2-meta-right" aria-hidden="true">
        <span>2025</span>
        <span className="pl2-meta-sep">·</span>
        <span>Commerce &amp; AI</span>
      </div>

      {/* ══ EXIT CURTAINS ══ */}
      <div className="pl2-curtain pl2-curtain--top"    aria-hidden="true" />
      <div className="pl2-curtain pl2-curtain--bottom" aria-hidden="true" />

    </div>
  );
}
