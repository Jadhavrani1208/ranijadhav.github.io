import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, FileDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons';
import TerminalWindow from '../components/Terminal';
import { profile } from '../data/socialLinks';

const ROLES = ['Java Developer', 'Spring Boot Developer', 'Backend Developer'];

function useTypingRotation(words, prefersReducedMotion) {
  const [text, setText] = useState(prefersReducedMotion ? words[0] : '');
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) return undefined;

    let charIndex = text.length;
    let deleting = false;
    let timeout;

    const tick = () => {
      const word = words[wordIndex];
      if (!deleting) {
        charIndex += 1;
        setText(word.slice(0, charIndex));
        if (charIndex === word.length) {
          timeout = setTimeout(() => { deleting = true; tick(); }, 1400);
          return;
        }
      } else {
        charIndex -= 1;
        setText(word.slice(0, charIndex));
        if (charIndex === 0) {
          setWordIndex((i) => (i + 1) % words.length);
          return;
        }
      }
      timeout = setTimeout(tick, deleting ? 35 : 65);
    };

    timeout = setTimeout(tick, 500);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wordIndex, prefersReducedMotion]);

  return text;
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const typed = useTypingRotation(ROLES, prefersReducedMotion);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative flex min-h-screen items-center pt-28 pb-16">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-10">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={item}
            className="mb-5 font-(family-name:--font-mono) text-sm"
            style={{ color: 'var(--color-brass)' }}
          >
            {profile.location} · open to entry-level roles
          </motion.p>

          <motion.h1
            variants={item}
            className="font-(family-name:--font-display) text-[2.6rem] leading-[1.05] font-semibold tracking-tight sm:text-6xl"
            style={{ color: 'var(--text-primary)' }}
          >
            {profile.name}
          </motion.h1>

          <motion.div
            variants={item}
            className="mt-3 h-9 font-(family-name:--font-display) text-xl sm:text-2xl"
            style={{ color: 'var(--text-dim)' }}
          >
            {typed}
            <span className="ml-0.5 inline-block w-[2px] animate-pulse" style={{ background: 'var(--color-brass)' }}>&nbsp;</span>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed sm:text-lg"
            style={{ color: 'var(--text-dim)' }}
          >
            Building backend applications with Java, Spring Boot, REST APIs and PostgreSQL —
            with a focus on secure authentication, clean CRUD APIs and reliable data workflows.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <button
              onClick={() => scrollTo('projects')}
              data-cursor-hover
              className="rounded-full px-6 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5"
              style={{ background: 'var(--color-brass)', color: '#0a0d12' }}
            >
              Explore my projects
            </button>
            <a
              href={profile.resumeUrl}
              download
              data-cursor-hover
              className="flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5"
              style={{ border: '1px solid var(--line)', color: 'var(--text-primary)' }}
            >
              <FileDown size={16} /> Download resume
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex items-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              aria-label="GitHub profile"
              className="grid h-10 w-10 place-items-center rounded-full transition-colors"
              style={{ border: '1px solid var(--line)', color: 'var(--text-dim)' }}
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              aria-label="LinkedIn profile"
              className="grid h-10 w-10 place-items-center rounded-full transition-colors"
              style={{ border: '1px solid var(--line)', color: 'var(--text-dim)' }}
            >
              <LinkedinIcon size={18} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <TerminalWindow />
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollTo('about')}
        aria-label="Scroll to about section"
        data-cursor-hover
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
        style={{ color: 'var(--text-faint)' }}
        animate={prefersReducedMotion ? {} : { y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="font-(family-name:--font-mono) text-xs">scroll</span>
        <ArrowDown size={16} />
      </motion.button>
    </section>
  );
}
