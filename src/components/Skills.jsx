import { useEffect, useRef } from 'react';
import { skills } from '../data/portfolio';

function SkillBar({ name, level, delay = 0 }) {
  const fillRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && fillRef.current) {
            setTimeout(() => {
              fillRef.current.style.transform = `scaleX(${level / 100})`;
            }, delay);
          }
        });
      },
      { threshold: 0.5 }
    );
    if (wrapperRef.current) observer.observe(wrapperRef.current);
    return () => observer.disconnect();
  }, [level, delay]);

  return (
    <div ref={wrapperRef} className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="font-body text-sm dark:text-slate-300 text-slate-700">{name}</span>
        <span className="font-mono text-xs text-cyber-500">{level}%</span>
      </div>
      <div className="skill-bar">
        <div
          ref={fillRef}
          className="skill-fill"
          style={{ transform: 'scaleX(0)' }}
        />
      </div>
    </div>
  );
}

const TAB_LABELS = {
  backend: { label: 'Backend', emoji: '⚙️' },
  frontend: { label: 'Frontend', emoji: '🎨' },
  devops: { label: 'DevOps', emoji: '🚀' },
};

import { useState } from 'react';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('frontend');

  return (
    <section id="skills" className="py-24 dark:bg-dark-900 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <span className="font-mono text-cyber-500 text-sm tracking-widest uppercase">What I Know</span>
          <h2 className="font-display text-5xl lg:text-6xl tracking-wider mt-2 dark:text-white text-slate-900">
            SKILLS
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-cyber-500 to-blue-500 mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left – tabbed skill bars */}
          <div className="reveal-left">
            {/* Tabs */}
            <div className="flex gap-2 mb-8 p-1 dark:bg-dark-700 bg-white rounded-xl border
              dark:border-white/5 border-slate-200 w-fit">
              {Object.entries(TAB_LABELS).map(([key, { label, emoji }]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-4 py-2 rounded-lg font-body text-sm font-medium transition-all duration-200
                    ${activeTab === key
                      ? 'bg-cyber-600 text-white shadow-sm'
                      : 'dark:text-slate-400 text-slate-600 hover:text-cyber-500'
                    }`}
                >
                  {emoji} {label}
                </button>
              ))}
            </div>

            {/* Bars */}
            <div>
              {skills[activeTab].map((s, i) => (
                <SkillBar key={`${activeTab}-${s.name}`} name={s.name} level={s.level} delay={i * 100} />
              ))}
            </div>
          </div>

          {/* Right – other skills + flip cards */}
          <div className="reveal-right space-y-8">
            {/* Tech tags */}
            <div>
              <h3 className="font-body font-semibold dark:text-slate-200 text-slate-800 mb-4 text-sm uppercase
                tracking-widest">
                Additional Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.other.map((tag) => (
                  <span
                    key={tag}
                    className="tag-bg font-mono text-xs px-3 py-1.5 rounded-full border
                      dark:border-cyber-500/20 border-cyber-300/50 hover:border-cyber-500 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Mini flip cards */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { title: 'API Design', back: 'REST APIs\n Spring Boot', icon: '☕', color: '#e8a838' },
                { title: 'React.js', back: 'Hooks &\nContext API', icon: '⚛️', color: '#4db8c8' },
                { title: 'Database\nArch', back: 'PostgreSQL\n& MySQL', icon: '🗄️', color: '#5b9cf6' },
                { title: 'Python', back: 'Core & ML Basics', icon: '🐍', color: '#5dab7a' },
                { title: 'Security', back: 'JWT Auth\nRole-Based Access\nData Protection', icon: '🔐', color: '#d4735e' },
                { title: 'Cloud', back: 'Azure\n& Docker', icon: '🐳', color: '#7b8fdb' },
              ].map((card) => (
                <div
                  key={card.title}
                  className="flip-card"
                  style={{ height: '100px' }}
                >
                  <div className="flip-card-inner">
                    {/* Front */}
                    <div
                      className="flip-card-front dark:bg-dark-700 bg-white border dark:border-white/5
                        border-slate-200 flex flex-col items-center justify-center gap-1"
                    >
                      <span className="text-2xl">{card.icon}</span>
                      <p className="font-mono text-xs text-center dark:text-slate-300 text-slate-700 whitespace-pre-line leading-tight">
                        {card.title}
                      </p>
                    </div>
                    {/* Back */}
                    <div
                      className="flip-card-back flex flex-col items-center justify-center gap-1"
                      style={{ background: `${card.color}18`, border: `1px solid ${card.color}40` }}
                    >
                      <p className="font-mono text-xs text-center whitespace-pre-line leading-tight"
                        style={{ color: card.color }}>
                        {card.back}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}