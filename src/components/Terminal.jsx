import { useState, useRef, useEffect, useCallback } from 'react';
import { terminalCommands, personal } from '../data/portfolio';
import { Terminal as TerminalIcon, Maximize2, Minimize2, X } from 'lucide-react';
import { createPortal } from 'react-dom';

const WELCOME = [
  { text: '╔════════════════════════════════════════════╗', type: 'info' },
  { text: '║  ujwal.garg — portfolio terminal  v1.0 ║', type: 'info' },
  { text: '╚════════════════════════════════════════════╝', type: 'info' },
  { text: '', type: 'output' },
  { text: '  Welcome! Type `help` to see available commands.', type: 'output' },
  { text: '', type: 'output' },
];

const COLOR_MAP = {
  output: 'text-slate-400',
  success: 'text-green-400',
  error: 'text-red-400',
  info: 'text-cyan-400',
  prompt: 'text-cyber-500',
};

export default function Terminal() {
  const [lines, setLines] = useState(WELCOME);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [histIdx, setHistIdx] = useState(-1);
  const [maximized, setMaximized] = useState(false);

  const inputRef = useRef(null);
  const bottomRef = useRef(null);
  const containerRef = useRef(null);
  const outputRef = useRef(null);   // ← ref for the inner scrollable div

  useEffect(() => {
    // Scroll only inside the terminal output box — never the page
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [lines]);

  const focusInput = () => inputRef.current?.focus();

  const runCommand = useCallback((raw) => {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;

    // Append user input line
    setLines((prev) => [
      ...prev,
      { text: `$ ${raw}`, type: 'prompt' },
    ]);

    // Save to history
    setHistory((prev) => [raw, ...prev.slice(0, 49)]);
    setHistIdx(-1);

    // Process
    if (cmd === 'clear') {
      setLines([]);
      return;
    }

    if (terminalCommands[cmd]) {
      setLines((prev) => [...prev, ...terminalCommands[cmd].output]);
      // Side effect: open resume
      if (cmd === 'view-resume') {
        setTimeout(() => window.open(personal.resume, '_blank'), 800);
      }
      return;
    }

    // Navigate commands
    if (cmd === 'goto about' || cmd === 'nav about') {
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
      setLines((prev) => [...prev, { text: '  Navigating to About section...', type: 'success' }]);
      return;
    }
    if (cmd === 'goto projects' || cmd === 'nav projects') {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
      setLines((prev) => [...prev, { text: '  Navigating to Projects section...', type: 'success' }]);
      return;
    }
    if (cmd === 'goto contact' || cmd === 'nav contact') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      setLines((prev) => [...prev, { text: '  Navigating to Contact section...', type: 'success' }]);
      return;
    }

    // Unknown command
    setLines((prev) => [
      ...prev,
      { text: `  bash: ${cmd}: command not found`, type: 'error' },
      { text: `  Type 'help' to see available commands.`, type: 'output' },
    ]);
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      runCommand(input);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const newIdx = Math.min(histIdx + 1, history.length - 1);
      setHistIdx(newIdx);
      setInput(history[newIdx] ?? '');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const newIdx = Math.max(histIdx - 1, -1);
      setHistIdx(newIdx);
      setInput(newIdx === -1 ? '' : (history[newIdx] ?? ''));
    } else if (e.key === 'Tab') {
      e.preventDefault();
      // Auto-complete
      const partial = input.toLowerCase();
      const match = Object.keys(terminalCommands).find((k) => k.startsWith(partial));
      if (match) setInput(match);
    } else if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault();
      setLines([]);
    }
  };

  const quickCmds = ['help', 'about', 'skills', 'projects', 'experience', 'achievements', 'contact-info', 'clear'];

  const TerminalUI = (
  <div
    className={`terminal-window overflow-hidden transition-all duration-300
      ${maximized ? 'fixed inset-6 z-[9999] rounded-xl' : 'rounded-xl'}`}
    ref={containerRef}
  >
    {/* Title bar */}
    <div className="flex items-center px-4 py-3 border-b border-white/5 dark:bg-dark-800/50">
      <div className="flex gap-2">
        <button
          onClick={() => setLines([])}
          className="w-3.5 h-3.5 rounded-full bg-red-500 hover:bg-red-400 transition-colors flex items-center justify-center group"
        >
          <X size={8} className="opacity-0 group-hover:opacity-100 text-red-900" />
        </button>

        <button className="w-3.5 h-3.5 rounded-full bg-yellow-500" />

        <button
          onClick={() => setMaximized(!maximized)}
          className="w-3.5 h-3.5 rounded-full bg-green-500 flex items-center justify-center group"
        >
          {maximized
            ? <Minimize2 size={8} className="opacity-0 group-hover:opacity-100 text-green-900" />
            : <Maximize2 size={8} className="opacity-0 group-hover:opacity-100 text-green-900" />
          }
        </button>
      </div>

      <div className="flex-1 text-center">
        <span className="font-mono text-xs text-slate-500 flex items-center justify-center gap-2">
          <TerminalIcon size={12} />
          ujwal@portfolio: ~
        </span>
      </div>
    </div>

    {/* Output */}
    <div
      ref={outputRef}
      className={`font-mono text-sm p-5 overflow-y-auto cursor-text ${maximized ? 'h-[calc(100%-9rem)]' : 'h-72'}`}
      onClick={focusInput}
    >
      {lines.map((line, i) => (
        <div key={i} className={`leading-6 whitespace-pre ${COLOR_MAP[line.type] || 'text-slate-400'}`}>
          {line.text}
        </div>
      ))}

      <div className="flex items-center gap-2 mt-1">
        <span className="text-cyber-500 flex-shrink-0">
          <span className="text-green-400">ujwal</span>
          <span className="text-slate-500">@</span>
          <span className="text-blue-400">portfolio</span>
          <span className="text-slate-500">:</span>
          <span className="text-yellow-400">~</span>
          <span className="text-slate-400"> $ </span>
        </span>

        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent outline-none text-slate-200 caret-cyber-500 font-mono text-sm"
        />

        <span className="terminal-cursor" />
      </div>
    </div>

    {/* Quick cmds */}
    <div className="border-t border-white/5 px-4 py-3 flex flex-wrap gap-2 dark:bg-dark-800/30">
      {quickCmds.map((cmd) => (
        <button
          key={cmd}
          onClick={() => { runCommand(cmd); focusInput(); }}
          className="font-mono text-xs px-3 py-1 rounded-full dark:bg-white/5 bg-slate-200"
        >
          {cmd}
        </button>
      ))}
    </div>
  </div>
);

  return (
    <section id="terminal" className="py-24 dark:bg-dark-900 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="reveal text-center mb-12">
          <span className="font-mono text-cyber-500 text-sm tracking-widest uppercase">Interactive Shell</span>
          <h2 className="font-display text-5xl lg:text-6xl tracking-wider mt-2 dark:text-white text-slate-900">
            TERMINAL
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-cyber-500 to-blue-500 mx-auto mt-4 mb-4" />
          <p className="font-body text-sm dark:text-slate-400 text-slate-500">
            Explore my portfolio via the command line. Try <code className="text-cyber-500 font-mono">help</code> to get started.
          </p>
        </div>

        {/* Terminal window */}
        <div className="reveal">
  {!maximized && TerminalUI}
</div>
      </div>
      {maximized &&
  createPortal(
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-md z-[9998]"
        onClick={() => setMaximized(false)}
      />

      {/* Terminal */}
      {TerminalUI}
    </>,
    document.body
  )
}
    </section>
  );
}