import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Terminal from './components/Terminal';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useScrollReveal, useScrollProgress } from './hooks/useScrollReveal';

// ── Preloader ─────────────────────────────────────────────────────────────────
function Preloader({ onDone }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
  let current = 0;
  let timeout;

  const next = () => {
    // Each step: random increment + random delay = organic feel
    const remaining = 100 - current;
    if (current >= 100) {
      setTimeout(() => {
        setFadeOut(true);
        setTimeout(onDone, 600);
      }, 400);
      return;
    }

    // Decide chunk size based on current progress
    let chunk;
    if (current < 20) {
      chunk = Math.random() * 8 + 3;        // slow start: 3–11%
    } else if (current < 50) {
      chunk = Math.random() * 18 + 12;      // sudden burst: 12–30%
    } else if (current < 75) {
      chunk = Math.random() * 4 + 1;        // slow again: 1–5%
    } else if (current < 80) {
      chunk = Math.random() * 3 + 0.5;      // near stall: 0.5–2.5%
    } else {
      chunk = Math.random() * 15 + 8;       // final burst to 100%
    }

    current = Math.min(100, current + chunk);
    setProgress(Math.floor(current));

    // Delay also varies — longer in crawl zones
    let delay;
    if (current < 20)       delay = Math.random() * 200 + 150;   // 150–350ms
    else if (current < 50)  delay = Math.random() * 500 + 300;   // 300–800ms (slow)
    else if (current < 55)  delay = Math.random() * 80  + 40;    // 40–120ms  (burst)
    else if (current < 80)  delay = Math.random() * 400 + 250;   // 250–650ms (slow)
    else if (current < 82)  delay = Math.random() * 600 + 400;   // 400–1000ms (stall)
    else                    delay = Math.random() * 60  + 30;    // 30–90ms   (final burst)

    timeout = setTimeout(next, delay);
  };

  timeout = setTimeout(next, 200);
  return () => clearTimeout(timeout);
}, [onDone]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center
        bg-[#050810] transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
    >
      {/* Ambient glow */}
      <div className="absolute w-96 h-96 rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />

      {/* Logo / Name */}
      <div className="relative flex flex-col items-center gap-6 mb-10">
        <div className="w-16 h-16 rounded-2xl border border-cyan-500/40 flex items-center justify-center
          shadow-[0_0_30px_rgba(0,217,204,0.2)] bg-cyan-500/5">
          <span className="font-mono text-2xl font-bold text-cyan-400">UG</span>
        </div>
        <div className="text-center">
          <h1 className="font-mono text-2xl tracking-[0.3em] text-white">UJWAL GARG</h1>
          <p className="font-mono text-xs text-cyan-500/70 tracking-widest mt-1">PORTFOLIO · INITIALIZING</p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-64 flex flex-col items-center gap-3">
        <div className="w-full h-[2px] bg-white/5 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-300 ease-out"
            style={{
              width: `${progress}%`,
              background: 'linear-gradient(90deg, #00d9cc, #0066ff)',
              boxShadow: '0 0 10px rgba(0,217,204,0.6)',
            }}
          />
        </div>
        <div className="flex justify-between w-full">
          <span className="font-mono text-[10px] text-slate-600 tracking-widest">LOADING</span>
          <span className="font-mono text-[10px] text-cyan-500 tabular-nums">{progress}%</span>
        </div>
      </div>

      {/* Animated dots */}
      <div className="flex gap-1.5 mt-8">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-1 h-1 rounded-full bg-cyan-500/50"
            style={{ animation: `pulse 1.2s ease-in-out ${i * 0.2}s infinite` }}
          />
        ))}
      </div>
    </div>
  );
}

// ── App ───────────────────────────────────────────────────────────────────────
export default function App() {
  const [dark, setDark] = useState(true);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'light') setDark(false);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
    if (window.location.hash) {
      history.replaceState(null, '', window.location.pathname);
    }
  }, []);

  useScrollReveal('reveal');
  useScrollReveal('reveal-left');
  useScrollReveal('reveal-right');
  useScrollProgress();

  return (
    <div className={dark ? 'dark' : ''}>
      {!loaded && <Preloader onDone={() => setLoaded(true)} />}

      <div
        className={`transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      >
        <div id="scroll-progress" />
        <div className="scan-line" />
        <div className="min-h-screen dark:bg-dark-900 bg-slate-100 dark:text-slate-100 text-slate-900 transition-colors duration-300">
          <Navbar dark={dark} setDark={setDark} />
          <main>
            <Hero dark={dark} />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Education />
            <Terminal />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}