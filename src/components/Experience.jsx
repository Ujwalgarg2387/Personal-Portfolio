import { experience } from '../data/portfolio';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 dark:bg-dark-900 bg-slate-50 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <span className="font-mono text-cyber-500 text-sm tracking-widest uppercase">Journey</span>
          <h2 className="font-display text-5xl lg:text-6xl tracking-wider mt-2 dark:text-white text-slate-900">
            EXPERIENCE
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-cyber-500 to-blue-500 mx-auto mt-4" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px
            bg-gradient-to-b from-transparent via-cyber-500/30 to-transparent
            md:-translate-x-1/2" />

          <div className="space-y-12">
            {experience.map((job, i) => (
              <div
                key={i}
                className={`reveal relative flex items-start gap-6 md:gap-0
                  ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 w-3 h-3 rounded-full
                  border-2 flex-shrink-0 top-5 z-10"
                  style={{ background: job.color, borderColor: job.color, boxShadow: `0 0 10px ${job.color}60` }}
                />

                {/* Content card */}
                <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <div className="dark:bg-dark-700 bg-white border dark:border-white/5 border-slate-200
                    rounded-2xl p-6 hover:border-cyber-500/30 transition-all duration-300 hover:-translate-y-1
                    hover:shadow-lg dark:hover:shadow-black/30">
                    {/* Header */}
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: `${job.color}20` }}>
                        <Briefcase size={15} style={{ color: job.color }} />
                      </div>
                      <div>
                        <h3 className="font-display text-lg tracking-wider dark:text-white text-slate-900">
                          {job.role}
                        </h3>
                        <p className="font-body text-sm" style={{ color: job.color }}>{job.company}</p>
                        <p className="font-mono text-xs text-slate-500 mt-0.5">{job.period}</p>
                      </div>
                    </div>

                    {/* Bullets */}
                    <ul className="space-y-2">
                      {job.bullets.map((b, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ background: job.color }} />
                          <span className="font-body text-sm dark:text-slate-400 text-slate-600 leading-relaxed">
                            {b}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
