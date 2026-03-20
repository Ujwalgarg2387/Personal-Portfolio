import { personal } from '../data/portfolio';
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Terminal', href: '#terminal' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { icon: Github, href: personal.github, label: 'GitHub' },
  { icon: Linkedin, href: personal.linkedin, label: 'LinkedIn' },
  { icon: Mail, href: `mailto:${personal.email}`, label: 'Email' },
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="dark:bg-dark-900 bg-slate-100 border-t dark:border-white/5 border-slate-200 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-cyber-600 flex items-center justify-center font-mono font-bold text-sm text-white">
                UG
              </div>
              <span className="font-display text-xl tracking-widest dark:text-white text-slate-900">
                UJWAL<span className="text-cyber-500">.</span>DEV
              </span>
            </div>
            <p className="font-body text-sm dark:text-slate-500 text-slate-500 leading-relaxed max-w-xs">
              Full Stack Software Developer — Java, Python, React.js & Flutter — building scalable apps with clean architecture.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-mono text-xs text-cyber-500 uppercase tracking-widest mb-4">Navigation</h4>
            <ul className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="font-body text-sm dark:text-slate-400 text-slate-600 hover:text-cyber-500 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono text-xs text-cyber-500 uppercase tracking-widest mb-4">Connect</h4>
            <div className="flex gap-3 mb-4">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full dark:bg-dark-700 bg-white border dark:border-white/5
                    border-slate-200 flex items-center justify-center dark:text-slate-400 text-slate-500
                    hover:text-cyber-500 hover:border-cyber-500/30 transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
            <p className="font-body text-sm dark:text-slate-400 text-slate-600">
              <a href={`mailto:${personal.email}`} className="hover:text-cyber-500 transition-colors">
                {personal.email}
              </a>
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t dark:border-white/5 border-slate-200 pt-6 flex flex-col sm:flex-row
          items-center justify-between gap-4">
          <p className="font-body text-xs dark:text-slate-500 text-slate-500 flex items-center gap-1">
            © {new Date().getFullYear()} Ujwal Garg. All rights reserved.
          </p>

          {/* Back to top */}
          <button
            onClick={scrollTop}
            className="flex items-center gap-2 font-mono text-xs dark:text-slate-500 text-slate-500
              hover:text-cyber-500 transition-colors"
          >
            <ArrowUp size={14} />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}