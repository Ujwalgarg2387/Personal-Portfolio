import { personal, stats } from '../data/portfolio';
import { MapPin, Mail, Phone, Download } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 dark:bg-dark-800 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-5 pointer-events-none">
        <div className="w-full h-full rounded-full border border-cyber-500" style={{ transform: 'scale(1.5)' }} />
        <div className="absolute inset-8 rounded-full border border-cyber-500" />
        <div className="absolute inset-16 rounded-full border border-cyber-500" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="reveal text-center mb-16">
          <span className="font-mono text-cyber-500 text-sm tracking-widest uppercase">Who I Am</span>
          <h2 className="font-display text-5xl lg:text-6xl tracking-wider mt-2 dark:text-white text-slate-900">
            ABOUT ME
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-cyber-500 to-blue-500 mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="reveal-left">
            <p className="font-body dark:text-slate-300 text-slate-700 leading-relaxed text-base mb-5">
              {personal.bio}
            </p>
            <p className="font-body dark:text-slate-300 text-slate-700 leading-relaxed text-base mb-8">
              {personal.bio2}
            </p>

            {/* Contact details */}
            <div className="space-y-3 mb-8">
              {[
                { icon: Mail, label: personal.email, href: `mailto:${personal.email}` },
                { icon: Phone, label: personal.phone, href: `tel:${personal.phone}` },
                { icon: MapPin, label: personal.location, href: null },
              ].map(({ icon: Icon, label, href }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full dark:bg-cyber-500/10 bg-cyber-100 flex items-center justify-center flex-shrink-0">
                    <Icon size={15} className="text-cyber-500" />
                  </div>
                  {href
                    ? <a href={href} className="font-body text-sm dark:text-slate-300 text-slate-700
                        hover:text-cyber-500 transition-colors">{label}</a>
                    : <span className="font-body text-sm dark:text-slate-300 text-slate-700">{label}</span>
                  }
                </div>
              ))}
            </div>

            <a
              href={personal.resume}
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-cyber-600 hover:bg-cyber-600
                text-white font-body font-medium rounded-full transition-all duration-300 glow-btn text-sm"
            >
              <Download size={15} />
              Download Resume
            </a>
          </div>

          {/* Right – stats */}
          <div className="reveal-right">
            <div className="grid grid-cols-2 gap-5 mb-8">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="dark:bg-dark-700 bg-slate-50 border dark:border-white/5 border-slate-200
                    rounded-2xl p-6 text-center hover:border-cyber-500/40 transition-all duration-300
                    hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-cyber-500/5"
                >
                  <p className="font-display text-4xl tracking-wider gradient-text mb-1">{s.value}</p>
                  <p className="font-body text-sm dark:text-slate-400 text-slate-500">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Code snippet card */}
            <div className="terminal-window p-5 rounded-xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-3 font-mono text-xs text-slate-500">about.me</span>
              </div>
              <pre className="font-mono text-xs leading-relaxed">
                <span className="text-purple-400">const</span>
                <span className="text-cyan-300"> developer</span>
                <span className="text-slate-400"> = {'{'}</span>
                {'\n'}
                <span className="text-slate-400">  </span>
                <span className="text-blue-300">name</span>
                <span className="text-slate-400">: </span>
                <span className="text-green-300">'Ujwal Garg'</span>
                <span className="text-slate-400">,</span>
                {'\n'}
                <span className="text-slate-400">  </span>
                <span className="text-blue-300">role</span>
                <span className="text-slate-400">: </span>
                <span className="text-green-300">'Full Stack Developer'</span>
                <span className="text-slate-400">,</span>
                {'\n'}
                <span className="text-slate-400">  </span>
                <span className="text-blue-300">stack</span>
                <span className="text-slate-400">: </span>
                <span className="text-green-300">'Java · React · Flutter'</span>
                <span className="text-slate-400">,</span>
                {'\n'}
                <span className="text-slate-400">  </span>
                <span className="text-blue-300">openToWork</span>
                <span className="text-slate-400">: </span>
                <span className="text-yellow-300">true</span>
                {'\n'}
                <span className="text-slate-400">{'}'}</span>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}