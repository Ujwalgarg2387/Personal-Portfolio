import { useState, useEffect } from 'react';
import { personal } from '../data/portfolio';
import { Sun, Moon, Menu, X, Terminal as TerminalIcon } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Terminal', href: '#terminal' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ dark, setDark }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    setActive(href);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 nav-glass
          ${scrolled
            ? 'dark:bg-dark-800/80 bg-white/80 shadow-lg dark:shadow-dark-900/50 border-b dark:border-white/5 border-slate-200'
            : 'bg-transparent border-b border-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-lg bg-cyber-600 flex items-center justify-center font-mono font-bold text-sm text-white group-hover:bg-cyber-700 transition-colors">
              UG
            </div>
            <span className="font-display text-xl tracking-widest dark:text-white text-slate-900">
              UJWAL<span className="text-cyber-500">.</span>DEV
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className={`px-3 py-1.5 rounded-lg font-body text-sm font-medium transition-all duration-200
                    ${active === link.href
                      ? 'text-white bg-cyber-600 glow-btn'
                      : 'dark:text-slate-400 text-slate-600 hover:text-slate-600 hover:bg-cyber-500/20'
                    }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            {/* Theme toggle */}
            <button
              onClick={() => setDark(!dark)}
              className="w-9 h-9 rounded-full dark:bg-slate-800 bg-slate-200 flex items-center justify-center
                dark:hover:bg-cyber-500/10 hover:bg-cyber-700 transition-all duration-300 glow-btn
                dark:text-slate-300 text-slate-600 hover:text-white"
              aria-label="Toggle theme"
            >
              {dark
                ? <Sun size={16} className="text-yellow-400" />
                : <Moon size={16} />
              }
            </button>

            {/* Terminal shortcut */}
            <button
              onClick={() => handleNav('#terminal')}
              className="hidden sm:flex w-9 h-9 rounded-full dark:bg-slate-800 bg-slate-200 items-center justify-center
                dark:hover:bg-cyber-500/10 hover:bg-cyber-700 ttransition-all duration-300 glow-btn
                dark:text-slate-300 text-slate-600 hover:text-white"
              aria-label="Open terminal"
            >
              <TerminalIcon size={15} />
            </button>

            {/* Resume btn */}
            <a
              href={personal.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                border border-cyber-500 text-cyber-500 text-sm font-medium font-body
                hover:bg-cyber-700 hover:text-white transition-all duration-300 glow-btn"
            >
              Resume
            </a>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden dark:text-slate-300 text-slate-700"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 md:hidden pt-20">
          <div
            className="absolute inset-0 dark:bg-dark-900/95 bg-white/95 backdrop-blur-xl"
            onClick={() => setMenuOpen(false)}
          />
          <div className="relative z-10 flex flex-col items-center justify-center h-full gap-6">
            {navLinks.map((link, i) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-2xl font-display tracking-widest dark:text-white text-slate-900
                  hover:text-cyber-500 transition-colors"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {link.label.toUpperCase()}
              </button>
            ))}
            <a
              href={personal.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-8 py-3 rounded-full border border-cyber-500 text-cyber-500
                font-body font-medium hover:bg-cyber-500 hover:text-white transition-all"
            >
              View Resume
            </a>
          </div>
        </div>
      )}
    </>
  );
}