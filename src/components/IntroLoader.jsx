import { useEffect, useState } from 'react';

const TIMINGS = {
  exitDelay: 1800,
  exitDuration: 720,
};

function getReducedMotion() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export default function IntroLoader({ phase, onPhaseChange }) {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = getReducedMotion();
    setReducedMotion(prefersReducedMotion);

    if (typeof document !== 'undefined') {
      const { body, documentElement } = document;
      const prevBodyOverflow = body.style.overflow;
      const prevHtmlOverflow = documentElement.style.overflow;
      const prevHtmlScrollBehavior = documentElement.style.scrollBehavior;
      const prevHtmlScrollbarGutter = documentElement.style.scrollbarGutter;

      body.style.overflow = 'hidden';
      documentElement.style.overflow = 'hidden';
      documentElement.style.scrollbarGutter = 'stable';

      const loadingDelay = prefersReducedMotion ? 120 : TIMINGS.exitDelay;
      const exitDuration = prefersReducedMotion ? 180 : TIMINGS.exitDuration;

      const timers = [
        window.setTimeout(() => onPhaseChange('exiting'), loadingDelay),
        window.setTimeout(() => onPhaseChange('completed'), loadingDelay + exitDuration),
      ];

      return () => {
        timers.forEach((timer) => window.clearTimeout(timer));
        body.style.overflow = prevBodyOverflow;
        documentElement.style.overflow = prevHtmlOverflow;
        documentElement.style.scrollBehavior = prevHtmlScrollBehavior;
        documentElement.style.scrollbarGutter = prevHtmlScrollbarGutter;
      };
    }

    return undefined;
  }, [onPhaseChange]);

  if (phase === 'completed') return null;

  return (
    <div
      className={`intro-loader intro-loader--${phase}${reducedMotion ? ' intro-loader--reduced' : ''}`}
      role="presentation"
      aria-hidden="true"
    >
      <div className="intro-loader__content">
        <div className="intro-loader__logo-wrap">
          <img className="intro-loader__logo" src="/INTRO.svg" alt="" draggable="false" />
        </div>

        <div className="intro-loader__indicator" aria-hidden="true">
          <span className="intro-loader__track" />
        </div>
      </div>
    </div>
  );
}
