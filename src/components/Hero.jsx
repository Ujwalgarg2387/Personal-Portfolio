import { useEffect, useRef, useState } from 'react';
import { personal } from '../data/portfolio';
import { ArrowDown, Github, Linkedin, Mail, MapPin, Briefcase, GraduationCap, Code2 } from 'lucide-react';

// ── Put your photo as src/assets/profile.jpg (or update extension below) ─────
import profileImg from '../assets/profile.jpg';

const TITLES = [
  'Full Stack Developer',
  'Java Backend Engineer',
  'React.js Developer',
  'Python & ML Enthusiast',
  'RESTful API Architect',
];

// ── Canvas particle field ─────────────────────────────────────────────────────
function ParticleCanvas() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    const particles = [];
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener('resize', resize);
    const count = Math.floor(window.innerWidth / 18);
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width, y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.3,
        dx: (Math.random() - 0.5) * 0.3, dy: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.5 + 0.1,
      });
    }
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0,217,204,${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      particles.forEach((p) => {
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,217,204,${p.alpha})`; ctx.fill();
        p.x += p.dx; p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width)  p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
  }, []);
  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-60" />;
}

// ── macOS title bar ───────────────────────────────────────────────────────────
function TitleBar({ label }) {
  return (
    <div className="h-10 dark:bg-dark-800 bg-slate-100 flex items-center px-4 gap-2
      border-b dark:border-white/5 border-slate-200 flex-shrink-0">
      <span className="w-3 h-3 rounded-full bg-red-400" />
      <span className="w-3 h-3 rounded-full bg-yellow-400" />
      <span className="w-3 h-3 rounded-full bg-green-400" />
      <span className="ml-auto font-mono text-xs dark:text-slate-500 text-slate-400">{label}</span>
    </div>
  );
}

// ── Simple 3D Tilt wrapper (no flip) ─────────────────────────────────────────
function TiltCard({ children, onClick }) {
  const ref = useRef(null);
  const handleMove = (e) => {
    const el = ref.current; if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width  - 0.5;
    const y = (e.clientY - rect.top)  / rect.height - 0.5;
    el.style.transform = `perspective(1000px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) translateZ(10px)`;
  };
  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0)';
  };
  return (
    <div ref={ref} onMouseMove={handleMove} onMouseLeave={handleLeave} onClick={onClick}
      className="card-3d transition-transform duration-300 cursor-pointer">
      {children}
    </div>
  );
}

// ── Hero profile card — static, just tilt. Your photo goes inside the avatar ─
function HeroCard({ onCardClick }) {
  return (
    <TiltCard onClick={onCardClick}>
      <div className="relative w-72 h-96 rounded-2xl overflow-hidden
        dark:bg-dark-700 bg-white border dark:border-white/10 border-slate-200
        shadow-2xl dark:shadow-black/50 flex flex-col group">

        <TitleBar label="ujwal.profile" />

        <div className="flex-1 p-5 flex flex-col items-center text-center">
          {/* Avatar circle — real photo inside */}
          <div className="w-24 h-24 rounded-full overflow-hidden mb-4
            ring-2 ring-cyber-500/50 ring-offset-2
            dark:ring-offset-dark-700 ring-offset-white
            shadow-lg shadow-cyber-500/20">
            <img
              src={profileImg}
              alt="Ujwal Garg"
              className="w-full h-full object-cover object-center"
              onError={(e) => { e.target.src = personal.avatar; }}
            />
          </div>

          <h3 className="font-display text-xl tracking-widest dark:text-white text-slate-900 mb-1">
            UJWAL GARG
          </h3>
          <p className="font-mono text-xs text-cyber-500 mb-4">Full Stack Developer</p>

          {/* Stats grid */}
          <div className="w-full grid grid-cols-2 gap-3">
            {[
              { label: 'Experience', val: '1.5+ yrs' },
              { label: 'Projects',   val: '10+' },
              { label: 'Tech Stack', val: '15+' },
              { label: 'Certifications',   val: '6+' },
            ].map((s) => (
              <div key={s.label} className="dark:bg-dark-600 bg-slate-50 rounded-lg p-2
                border dark:border-white/5 border-slate-200">
                <p className="font-mono text-xs text-cyber-500 font-semibold">{s.val}</p>
                <p className="font-body text-xs dark:text-slate-500 text-slate-400 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>

          
        </div>

        {/* Hover overlay: "click to expand" hint */}
              <div className="absolute inset-0 top-10 z-10 flex flex-col items-center justify-center gap-2
                opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-md
                bg-gradient-to-b from-transparent via-black/25 to-black/55 rounded-b-2xl">
                <div className="w-10 h-10 rounded-full bg-cyber-500/20 border border-cyber-500/50
                  flex items-center justify-center backdrop-blur-sm animate-pulse">
                  <Code2 size={18} className="text-cyber-400" />
                </div>
                <span className="font-mono text-xs text-white/80 tracking-wide">Click to expand</span>
              </div>

        {/* Inset ring */}
        <div className="absolute inset-0 pointer-events-none rounded-2xl
          ring-1 ring-inset dark:ring-white/10 ring-slate-200" />
      </div>
    </TiltCard>
  );
}

// ── Expanded modal — itself flips on Y axis when it enters / exits ────────────
// Front face: full photo with name overlay
// Back face:  info rows + skills + stats + CTA buttons
// The card auto-flips to back after a short delay so you see both faces.
// Clicking the modal backdrop closes it (flips back out).
function ProfileModal({ onClose }) {
  const [backdropIn,  setBackdropIn]  = useState(false);   // backdrop fade
  const [cardFlipped, setCardFlipped] = useState(false);   // front→back flip
  const [closing,     setClosing]     = useState(false);   // exit animation

  // Mouse tilt state (only active on back face)
  const cardRef = useRef(null);
  const [rotX,  setRotX]  = useState(0);
  const [rotY,  setRotY]  = useState(0);
  const [shine, setShine] = useState({ x: 50, y: 50 });

  useEffect(() => {
  document.body.style.overflow = 'hidden';
  const t1 = setTimeout(() => setBackdropIn(true), 20);

  return () => {
    clearTimeout(t1);
    document.body.style.overflow = '';
  };
}, []);

  const handleClose = () => {
    setClosing(true);
    setCardFlipped(false);          // flip back to front
    setBackdropIn(false);
    setTimeout(onClose, 700);       // unmount after animation
  };

  const handleMouseMove = (e) => {
    if (closing) return;
    const el = cardRef.current; if (!el) return;
    const rect = el.getBoundingClientRect();
    const dx = (e.clientX - (rect.left + rect.width  / 2)) / (rect.width  / 2);
    const dy = (e.clientY - (rect.top  + rect.height / 2)) / (rect.height / 2);
    setRotY(dx * 14); setRotX(-dy * 14);
    setShine({ x: ((e.clientX - rect.left) / rect.width) * 100, y: ((e.clientY - rect.top) / rect.height) * 100 });
  };
  const handleMouseLeave = () => { setRotX(0); setRotY(0); setShine({ x: 50, y: 50 }); };

  const chipSkills = ['Java', 'Spring Boot', 'React.js', 'Python', 'Flutter', 'PostgreSQL'];

  // The outer wrapper rotates the whole card in 3D via mouse tilt
  const isMoving = rotX !== 0 || rotY !== 0;
  const tiltTransform  = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.05)`;
  const tiltTransition = isMoving ? 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.35s ease'
            : 'transform 0.12s ease-out';

  return (
    <div
      className={`fixed inset-0 z-[200] flex items-center justify-center
        transition-opacity duration-500 ${backdropIn && !closing ? 'opacity-100' : 'opacity-0'}`}
      onClick={handleClose}
    >
      {/* Backdrop */}
      <div className={`absolute inset-0 transition-all duration-500
        ${backdropIn && !closing ? 'backdrop-blur-md bg-black/65' : 'backdrop-blur-none bg-black/0'}`} />

      {/* Tilt wrapper — mouse tilt applied here */}
      <div
        ref={cardRef}
        onClick={(e) => {
    e.stopPropagation();
    setCardFlipped((prev) => !prev);
  }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transform: tiltTransform, transition: tiltTransition, perspective: '1000px' }}
        className="relative rounded-2xl cursor-default select-none"
      >
        {/* Holographic shine (always visible, tracks mouse) */}
        <div
          className="absolute inset-0 z-30 rounded-2xl pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${shine.x}% ${shine.y}%,
              rgba(255,255,255,0.13) 0%, rgba(0,217,204,0.07) 35%, transparent 70%)`,
            mixBlendMode: 'screen',
            transition: 'background 0.08s ease',
          }}
        />

        {/* Flip container — spins on Y */}
        <div
          style={{
            width: '320px',
            transformStyle: 'preserve-3d',
            transition: 'transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1)',
            transform: cardFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          }}
        >

          {/* ── FRONT FACE — full photo ─────────────────────────────────── */}
          <div
            style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
            className="w-80 rounded-2xl overflow-hidden shadow-2xl shadow-black/50
              dark:bg-dark-700 bg-white border dark:border-white/10 border-slate-200 flex flex-col"
          >
            <TitleBar label="ujwal.photo" />

            <div className="relative overflow-hidden" style={{ height: '380px' }}>
              <img
                src={profileImg}
                alt="Ujwal Garg"
                className="w-full h-full object-cover object-center"
                onError={(e) => { e.target.src = personal.avatar; }}
              />
              {/* Bottom gradient + name */}
              <div className="absolute inset-x-0 bottom-0 h-28
                bg-gradient-to-t from-black/75 to-transparent" />
              <div className="absolute bottom-5 left-0 right-0 flex flex-col items-center gap-1.5">
                <h2 className="font-display text-2xl tracking-widest text-white drop-shadow-lg">
                  UJWAL GARG
                </h2>
                
              </div>
            </div>
          </div>

          {/* ── BACK FACE — info + skills + actions ────────────────────── */}
          <div
            style={{
              backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
              position: 'absolute', top: 0, left: 0,
            }}
            className="w-80 rounded-2xl overflow-hidden shadow-2xl shadow-black/50
              dark:bg-dark-700 bg-white border dark:border-cyber-500/30 border-cyber-200 flex flex-col"
          >
            {/* Gradient banner */}
            <div className="relative h-28 overflow-hidden flex-shrink-0"
              style={{ background: 'linear-gradient(135deg,#00d9cc 0%,#0066ff 55%,#bf00ff 100%)' }}>
              <div className="absolute inset-0 grid-bg opacity-20" />
              <div className="absolute -top-5 -right-5 w-28 h-28 rounded-full bg-white/10" />
              <div className="absolute top-10 -left-8 w-20 h-20 rounded-full bg-white/5" />
              {/* Available pill */}
              <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2.5 py-1
                rounded-full bg-black/30 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="font-mono text-xs text-white/90">Available</span>
              </div>
              
            </div>

            {/* Avatar floating at seam */}
            <div className="absolute left-1/2 z-10 pointer-events-none"
              style={{ top: '74px', transform: 'translateX(-50%)' }}>
              <div className="w-20 h-20 rounded-full overflow-hidden
                ring-4 ring-cyber-500/70 ring-offset-4
                dark:ring-offset-dark-700 ring-offset-white shadow-xl shadow-cyber-500/30">
                <img
                  // src="https://api.dicebear.com/7.x/adventurer/svg?seed=Ujwal&backgroundColor=0d47a1"
                  src={profileImg}
                  alt="avatar"
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.src = personal.avatar; }}
                />
              </div>
            </div>

            {/* Body */}
            <div className="px-6 pb-6 pt-14 text-center">
              <h2 className="font-display text-2xl tracking-widest dark:text-white text-slate-900">
                UJWAL GARG
              </h2>
              <p className="font-mono text-xs text-cyber-500 mt-1 mb-4">Full Stack Developer</p>

              {/* Info rows */}
              <div className="space-y-2 mb-4 text-left">
                {[
                  { icon: MapPin,        text: 'Noida, Uttar Pradesh, India' },
                  { icon: Briefcase,     text: 'Backend Dev @ CliQ India' },
                  { icon: GraduationCap, text: 'B.E. CS (AIML) · CU 2023' },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-md dark:bg-cyber-500/10 bg-cyber-100
                      flex items-center justify-center flex-shrink-0">
                      <Icon size={11} className="text-cyber-500" />
                    </div>
                    <span className="font-body text-xs dark:text-slate-400 text-slate-600">{text}</span>
                  </div>
                ))}
              </div>

              {/* Skill chips */}
              <div className="flex flex-wrap gap-1.5 justify-center mb-4">
                {chipSkills.map((s) => (
                  <span key={s} className="font-mono text-xs px-2.5 py-1 rounded-full
                    dark:bg-cyber-500/10 bg-cyber-50 dark:text-cyber-400 text-cyber-700
                    border dark:border-cyber-500/20 border-cyber-200">{s}</span>
                ))}
              </div>

              <div className="w-full h-px dark:bg-white/5 bg-slate-200 mb-4" />

            
            </div>

            <div className="h-1 w-full flex-shrink-0"
              style={{ background: 'linear-gradient(90deg,#00d9cc,#0066ff,#bf00ff)' }} />
          </div>

        </div>{/* /flip container */}
      </div>{/* /tilt wrapper */}
    </div>
  );
}

// ── Main Hero ─────────────────────────────────────────────────────────────────
export default function Hero({ dark }) {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed,  setDisplayed]  = useState('');
  const [deleting,   setDeleting]   = useState(false);
  const [charIndex,  setCharIndex]  = useState(0);
  const [cardOpen,   setCardOpen]   = useState(false);

  useEffect(() => {
    const current = TITLES[titleIndex];
    let timeout;
    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 65);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 35);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setTitleIndex((i) => (i + 1) % TITLES.length);
    }
    setDisplayed(current.slice(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, titleIndex]);

  return (
    <section id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden">

      <div className="orb w-96 h-96 bg-cyber-600/20 top-1/4 -left-32" style={{ animationDelay:'0s' }} />
      <div className="orb w-72 h-72 bg-blue-600/15 bottom-1/4 -right-20" style={{ animationDelay:'3s' }} />
      <div className="orb w-56 h-56 bg-purple-600/10 top-3/4 left-1/4" style={{ animationDelay:'1.5s' }} />

      <ParticleCanvas />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16
        flex flex-col lg:flex-row items-center gap-16">

        {/* Left text */}
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full
            dark:bg-cyber-500/10 bg-cyber-100 border dark:border-cyber-500/20 border-cyber-300
            dark:text-cyber-400 text-cyber-700 text-sm font-mono mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Open to opportunities
          </div>

          <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl tracking-wider mb-4 animate-slide-up
dark:text-white text-slate-900 leading-none">
  
  <span className="ujwal-text">UJWAL</span>
  <span className="garg-text ml-4 gradient-text">GARG</span>

</h1>

          <div className="font-mono text-lg sm:text-xl dark:text-slate-400 text-slate-600 mb-6 h-8">
            <span className="text-slate-600">&gt;</span>{' '}
            <span>{displayed}</span>
            <span className="terminal-cursor" />
          </div>

          <p className="font-body text-base dark:text-slate-400 text-slate-600
            max-w-lg mb-10 leading-relaxed mx-auto lg:mx-0 animate-fade-in"
            style={{ animationDelay: '0.3s' }}>
            {personal.tagline}
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior:'smooth' })}
              className="px-7 py-3 bg-cyber-600 hover:bg-cyber-600 text-white
                font-body font-medium rounded-full transition-all duration-300 glow-btn text-sm">
              View Projects
            </button>
            <button
              onClick={() => document.getElementById('terminal')?.scrollIntoView({ behavior:'smooth' })}
              className="px-7 py-3 border dark:border-white/20 border-slate-300
                dark:text-white text-slate-900 rounded-full font-body font-medium text-sm
                hover:border-cyber-500 hover:text-cyber-500 transition-all duration-300">
              Open Terminal
            </button>
          </div>

          <div className="flex gap-4 justify-center lg:justify-start">
            {[
              { icon: Github,   href: personal.github,            label: 'GitHub' },
              { icon: Linkedin, href: personal.linkedin,          label: 'LinkedIn' },
              { icon: Mail,     href: `mailto:${personal.email}`, label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                className="w-10 h-10 rounded-full dark:bg-white/5 bg-slate-200 flex items-center justify-center
                  dark:text-slate-400 text-slate-600 hover:text-cyber-500 dark:hover:bg-cyber-500/10
                  hover:bg-cyber-100 transition-all duration-200 border dark:border-white/5 border-slate-200">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Right — hero card (tilt only, your photo in avatar circle) */}
        <div className="flex-shrink-0">
          <HeroCard onCardClick={() => setCardOpen(true)} />
        </div>
      </div>

      <button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior:'smooth' })}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2
          dark:text-slate-500 text-slate-400 hover:text-cyber-500 transition-colors cursor-pointer">
        <span className="font-mono text-xs tracking-widest">SCROLL</span>
        <ArrowDown size={16} className="animate-bounce" />
      </button>

      {cardOpen && <ProfileModal onClose={() => setCardOpen(false)} />}
    </section>
  );
}

// ── chipSkills used in ProfileModal back face ─────────────────────────────────
const chipSkills = ['Java', 'Spring Boot', 'React.js', 'Python', 'Flutter', 'PostgreSQL'];