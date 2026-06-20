import React from 'react';

// ── Reveal-on-scroll + animated counters ─────────────────────────────────────
// Uses scroll + getBoundingClientRect (works reliably in any embedding context).

export function revealInView() {
  const vh = window.innerHeight || document.documentElement.clientHeight;
  document.querySelectorAll('[data-reveal]:not(.in), .rule-draw:not(.in)').forEach(el => {
    const r = el.getBoundingClientRect();
    if (r.top < vh * 0.9 && r.bottom > -40) {
      const delay = parseInt(el.dataset.revealDelay || '0', 10);
      if (delay) setTimeout(() => el.classList.add('in'), delay);
      else el.classList.add('in');
    }
  });
}

export function useReveal() {
  React.useEffect(() => {
    let raf;
    const onScroll = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(revealInView); };
    window.__initReveals = revealInView;
    revealInView();
    const t1 = setTimeout(revealInView, 140);
    const t2 = setTimeout(revealInView, 480);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(raf); clearTimeout(t1); clearTimeout(t2);
    };
  }, []);
}

export function useCounter(target, { duration = 1600, start = 0 } = {}) {
  const ref = React.useRef(null);
  const [val, setVal] = React.useState(start);
  React.useEffect(() => {
    let started = false, raf;
    const run = () => {
      if (started || !ref.current) return;
      const r = ref.current.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      if (r.top < vh * 0.92 && r.bottom > 0) {
        started = true;
        const t0 = performance.now();
        const step = (now) => {
          const p = Math.min(1, (now - t0) / duration);
          const eased = 1 - Math.pow(1 - p, 3);
          setVal(Math.round(start + (target - start) * eased));
          if (p < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
        window.removeEventListener('scroll', run);
      }
    };
    run();
    const t = setTimeout(run, 160);
    window.addEventListener('scroll', run, { passive: true });
    return () => { window.removeEventListener('scroll', run); cancelAnimationFrame(raf); clearTimeout(t); };
  }, [target, duration, start]);
  return [ref, val];
}
