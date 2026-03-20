import { useState } from 'react';
import { personal } from '../data/portfolio';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react';

const FORMSPREE_URL = 'https://formspree.io/f/xbdzqpey';

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    fetch(FORMSPREE_URL, {
      method: 'POST',
      body: new FormData(e.target),
      headers: { Accept: 'application/json' },
    })
      .then((res) => {
        if (res.ok) {
          setStatus('sent');
          e.target.reset();
        } else {
          setStatus('error');
        }
      })
      .catch(() => setStatus('error'));
  };

  const contactItems = [
    { icon: Mail,   label: 'Email',    value: personal.email,    href: `mailto:${personal.email}` },
    { icon: Phone,  label: 'Phone',    value: personal.phone,    href: `tel:${personal.phone}` },
    { icon: MapPin, label: 'Location', value: personal.location, href: null },
  ];

  const socials = [
    { icon: Github,   href: personal.github,            label: 'GitHub' },
    { icon: Linkedin, href: personal.linkedin,          label: 'LinkedIn' },
    { icon: Mail,     href: `mailto:${personal.email}`, label: 'Email' },
  ];

  return (
    <section id="contact" className="py-24 dark:bg-dark-800 bg-white relative overflow-hidden">
      {/* Background orbs */}
      <div className="orb w-80 h-80 bg-cyber-600/10 -bottom-20 -left-20 pointer-events-none" />
      <div className="orb w-64 h-64 bg-cyber-400/8 top-10 right-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="reveal text-center mb-16">
          <span className="font-mono text-cyber-500 text-sm tracking-widest uppercase">Let's build Together</span>
          <h2 className="font-display text-5xl lg:text-6xl tracking-wider mt-2 dark:text-white text-slate-900">
            CONTACT
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-cyber-500 to-cyber-800 mx-auto mt-4 mb-4" />
          <p className="font-body text-sm dark:text-slate-400 text-slate-600 max-w-md mx-auto">
            I'm currently open to new opportunities. Whether you have a question or just want to say hi — drop me a line!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left info panel */}
          <div className="lg:col-span-2 reveal-left space-y-6">
            {contactItems.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="contact-card p-5 flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl dark:bg-cyber-500/10 bg-cyber-100 flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-cyber-500" />
                </div>
                <div>
                  <p className="font-body text-xs dark:text-slate-500 text-slate-500 uppercase tracking-wider mb-0.5">{label}</p>
                  {href
                    ? <a href={href} className="font-body text-sm dark:text-slate-200 text-slate-800 hover:text-cyber-500 transition-colors">{value}</a>
                    : <p className="font-body text-sm dark:text-slate-200 text-slate-800">{value}</p>
                  }
                </div>
              </div>
            ))}

            {/* Socials */}
            <div className="pt-2">
              <p className="font-body text-xs dark:text-slate-500 text-slate-500 uppercase tracking-widest mb-4">Find me online</p>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-11 h-11 rounded-xl dark:bg-dark-700 bg-slate-100 border dark:border-white/5
                      border-slate-200 flex items-center justify-center dark:text-slate-400 text-slate-600
                      hover:text-cyber-500 dark:hover:border-cyber-500/30 hover:border-cyber-400
                      transition-all duration-200 hover:-translate-y-1"
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability badge */}
            <div className="dark:bg-green-500/10 bg-green-50 border dark:border-green-500/20 border-green-200
              rounded-xl p-4 flex items-center gap-3">
              <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse flex-shrink-0" />
              <div>
                <p className="font-body text-sm font-medium dark:text-green-300 text-green-700">Available for hire</p>
                <p className="font-body text-xs dark:text-green-500 text-green-600">Response within 24 hours</p>
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className="lg:col-span-3 reveal-right">
            <div className="dark:bg-dark-700 bg-slate-50 border dark:border-white/5 border-slate-200 rounded-2xl p-8">

              {/* ── Success state ── */}
              {status === 'sent' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                  <CheckCircle size={48} className="text-green-400" />
                  <h3 className="font-display text-2xl tracking-wider dark:text-white text-slate-900">Message Sent!</h3>
                  <p className="font-body text-sm dark:text-slate-400 text-slate-600">
                    Thanks for reaching out. I'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-2 px-6 py-2 rounded-full border border-cyber-500 text-cyber-500
                      hover:bg-cyber-500 hover:text-white transition-all font-body text-sm"
                  >
                    Send another
                  </button>
                </div>

              ) : (
                /* ── Form ── */
                <form onSubmit={handleSubmit} className="space-y-5">

                  {/* Error banner */}
                  {status === 'error' && (
                    <div className="px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20
                      flex items-center gap-3 text-red-400 font-body text-sm">
                      <AlertCircle size={16} className="flex-shrink-0" />
                      Something went wrong. Please try again or email me directly at{' '}
                      <a href={`mailto:${personal.email}`} className="underline underline-offset-2">
                        {personal.email}
                      </a>
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="font-body text-xs dark:text-slate-400 text-slate-600 uppercase tracking-wider mb-2 block">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl dark:bg-dark-800 bg-white border dark:border-white/5
                          border-slate-200 dark:text-slate-200 text-slate-800 font-body text-sm
                          focus:outline-none focus:border-cyber-500 transition-colors placeholder:text-slate-500"
                      />
                    </div>
                    <div>
                      <label className="font-body text-xs dark:text-slate-400 text-slate-600 uppercase tracking-wider mb-2 block">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl dark:bg-dark-800 bg-white border dark:border-white/5
                          border-slate-200 dark:text-slate-200 text-slate-800 font-body text-sm
                          focus:outline-none focus:border-cyber-500 transition-colors placeholder:text-slate-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-body text-xs dark:text-slate-400 text-slate-600 uppercase tracking-wider mb-2 block">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      placeholder="Project inquiry / Job opportunity"
                      className="w-full px-4 py-3 rounded-xl dark:bg-dark-800 bg-white border dark:border-white/5
                        border-slate-200 dark:text-slate-200 text-slate-800 font-body text-sm
                        focus:outline-none focus:border-cyber-500 transition-colors placeholder:text-slate-500"
                    />
                  </div>

                  <div>
                    <label className="font-body text-xs dark:text-slate-400 text-slate-600 uppercase tracking-wider mb-2 block">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell me about your project or opportunity..."
                      className="w-full px-4 py-3 rounded-xl dark:bg-dark-800 bg-white border dark:border-white/5
                        border-slate-200 dark:text-slate-200 text-slate-800 font-body text-sm resize-none
                        focus:outline-none focus:border-cyber-500 transition-colors placeholder:text-slate-500"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full py-3.5 bg-cyber-700 hover:bg-cyber-600 disabled:opacity-60 disabled:cursor-not-allowed
                      text-white font-body font-medium rounded-xl transition-all duration-300
                      flex items-center justify-center gap-2 glow-btn text-sm"
                  >
                    {status === 'sending' ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        Send Message
                      </>
                    )}
                  </button>

                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}