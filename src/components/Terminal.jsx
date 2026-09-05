import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/socialLinks';
import { skillGroups } from '../data/skills';
import { projects } from '../data/projects';
import { education, certifications } from '../data/education';

const COMMANDS = ['help', 'whoami', 'skills', 'projects', 'education', 'certifications', 'contact', 'clear'];

function runCommand(cmd) {
  switch (cmd) {
    case 'help':
      return [
        'Available commands:',
        ...COMMANDS.filter((c) => c !== 'help').map((c) => `  ${c}`),
      ];
    case 'whoami':
      return [
        `${profile.name} — ${profile.role}`,
        'MCA student, Pune. Building backend apps with Java, Spring Boot,',
        'REST APIs, Spring Security and PostgreSQL.',
      ];
    case 'skills':
      return skillGroups.flatMap((g) => [`${g.title}:`, `  ${g.items.join(', ')}`]);
    case 'projects':
      return projects.map((p) => `${p.name} — ${p.tagline}`);
    case 'education':
      return education.map((e) => `${e.org} — ${e.detail} (${e.period}, ${e.status})`);
    case 'certifications':
      return certifications.map((c) => `${c.name} — ${c.org}`);
    case 'contact':
      return [
        `email   ${profile.email}`,
        `github  ${profile.github.replace('https://', '')}`,
        `linkedin ${profile.linkedin.replace('https://', '')}`,
      ];
    default:
      return [`command not found: ${cmd}`, `type "help" to see available commands`];
  }
}

const USER = profile.name.split(' ')[0].toLowerCase();
const PROMPT = `${USER}@portfolio:~$`;

const WELCOME = [
  `${PROMPT} whoami`,
  ...runCommand('whoami'),
  '',
  'type "help" to see available commands',
];

export default function TerminalWindow({ className = '' }) {
  const [lines, setLines] = useState(WELCOME);
  const [input, setInput] = useState('');
  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines]);

  const submit = (raw) => {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;
    if (cmd === 'clear') {
      setLines([]);
      return;
    }
    setLines((prev) => [...prev, `${PROMPT} ${cmd}`, ...runCommand(cmd), '']);
  };

  return (
    <div
      className={`overflow-hidden rounded-xl shadow-2xl ${className}`}
      style={{ border: '1px solid var(--line)', background: '#0d1117' }}
    >
      <div
        className="flex items-center gap-2 px-4 py-2.5"
        style={{ borderBottom: '1px solid var(--line)', background: '#161b22' }}
      >
        <span className="h-3 w-3 rounded-full" style={{ background: '#ff5f56' }} />
        <span className="h-3 w-3 rounded-full" style={{ background: '#ffbd2e' }} />
        <span className="h-3 w-3 rounded-full" style={{ background: '#27c93f' }} />
        <span className="ml-3 font-(family-name:--font-mono) text-xs" style={{ color: '#8b949e' }}>
          rani@portfolio — zsh
        </span>
      </div>

      <div
        ref={scrollRef}
        onClick={() => inputRef.current?.focus()}
        className="no-scrollbar h-72 overflow-y-auto px-4 py-3 font-(family-name:--font-mono) text-[13px] leading-relaxed"
        style={{ color: '#c9d1d9' }}
      >
        {lines.map((line, i) => (
          <div key={i} className={line.startsWith(PROMPT) ? 'mt-1' : ''}>
            {line.startsWith(PROMPT) ? (
              <span style={{ color: '#e0a95e' }}>{line}</span>
            ) : (
              <span className="whitespace-pre-wrap">{line}</span>
            )}
          </div>
        ))}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submit(input);
            setInput('');
          }}
          className="mt-1 flex items-center gap-2"
        >
          <span style={{ color: '#e0a95e' }}>{PROMPT}</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent outline-none"
            style={{ color: '#c9d1d9' }}
            aria-label="Terminal command input"
            autoComplete="off"
            spellCheck="false"
          />
          <motion.span
            aria-hidden="true"
            className="inline-block h-3.5 w-1.5"
            style={{ background: '#c9d1d9' }}
            animate={{ opacity: [1, 1, 0, 0] }}
            transition={{ duration: 1, repeat: Infinity, times: [0, 0.5, 0.5, 1] }}
          />
        </form>
      </div>

      <div
        className="flex flex-wrap gap-2 px-4 py-3"
        style={{ borderTop: '1px solid var(--line)', background: '#161b22' }}
      >
        {COMMANDS.map((cmd) => (
          <button
            key={cmd}
            data-cursor-hover
            onClick={() => submit(cmd)}
            className="rounded-full px-3 py-1 font-(family-name:--font-mono) text-xs transition-colors"
            style={{ border: '1px solid #30363d', color: '#8b949e' }}
          >
            {cmd}
          </button>
        ))}
      </div>
    </div>
  );
}
