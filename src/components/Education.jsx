import { education } from '../data/portfolio';
import { Award } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-24 dark:bg-dark-800 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <span className="font-mono text-cyber-500 text-sm tracking-widest uppercase">Academic Background</span>
          <h2 className="font-display text-5xl lg:text-6xl tracking-wider mt-2 dark:text-white text-slate-900">
            EDUCATION & COURSES
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-cyber-500 to-blue-500 mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <div
              key={i}
              className="reveal dark:bg-dark-700 bg-slate-50 border dark:border-white/5 border-slate-200
                rounded-2xl p-6 hover:border-cyber-500/40 transition-all duration-300 hover:-translate-y-2
                hover:shadow-xl dark:hover:shadow-cyber-500/5 relative overflow-hidden"
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              {/* Background icon */}
              <div className="absolute top-4 right-4 text-4xl opacity-10">{edu.icon}</div>

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl dark:bg-cyber-500/10 bg-cyber-100 flex items-center justify-center mb-4 text-xl">
                {edu.icon}
              </div>

              <h3 className="font-display text-lg tracking-wider dark:text-white text-slate-900 mb-1 leading-tight">
                {edu.degree}
              </h3>
              <p className="font-body text-sm text-cyber-500 font-medium mb-1">{edu.institution}</p>
              <p className="font-mono text-xs text-slate-500 mb-4">{edu.year}</p>

              {edu.gpa && (
                <div className="flex items-center gap-2 mb-4">
                  <Award size={13} className="text-yellow-500" />
                  <span className="font-mono text-xs dark:text-slate-300 text-slate-600">CGPA: {edu.gpa}</span>
                </div>
              )}

              <ul className="space-y-1.5">
                {edu.highlights.map((h, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyber-500 flex-shrink-0" />
                    <span className="font-body text-xs dark:text-slate-400 text-slate-600 leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
