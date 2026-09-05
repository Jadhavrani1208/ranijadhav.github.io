import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { profile } from '../data/socialLinks';
import ProjectArt from './ProjectArt';

export default function ProjectModal({ project, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    if (!project) return;
    closeRef.current?.focus();
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          className="fixed inset-0 z-[200] flex items-start justify-center overflow-y-auto p-4 py-10 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="fixed inset-0"
            style={{ background: 'rgba(6,8,12,0.72)', backdropFilter: 'blur(4px)' }}
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-2xl rounded-2xl"
            style={{ background: 'var(--bg-surface-hi)', border: '1px solid var(--line)' }}
          >
            <ProjectArt id={project.id} className="h-56 w-full rounded-t-2xl object-cover" />

            <button
              ref={closeRef}
              onClick={onClose}
              aria-label="Close project details"
              data-cursor-hover
              className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full"
              style={{ background: 'rgba(10,13,18,0.7)', color: '#fff' }}
            >
              <X size={18} />
            </button>

            <div className="p-6 sm:p-8">
              <h3
                id="project-modal-title"
                className="font-(family-name:--font-display) text-2xl font-semibold"
                style={{ color: 'var(--text-primary)' }}
              >
                {project.name}
              </h3>
              <p className="mt-1 text-sm" style={{ color: 'var(--text-dim)' }}>{project.tagline}</p>

              <Section title="Problem" body={project.problem} />
              <Section title="Solution" body={project.solution} />

              <div className="mt-6">
                <h4 className="font-(family-name:--font-mono) text-xs uppercase tracking-wide" style={{ color: 'var(--color-brass)' }}>
                  Features
                </h4>
                <ul className="mt-2 space-y-1.5">
                  {project.features.map((f) => (
                    <li key={f} className="flex gap-2 text-sm leading-relaxed" style={{ color: 'var(--text-dim)' }}>
                      <span style={{ color: 'var(--color-brass)' }}>—</span> {f}
                    </li>
                  ))}
                </ul>
              </div>

              <Section title="My contribution" body={project.contribution} />

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full px-3 py-1 font-(family-name:--font-mono) text-xs"
                    style={{ border: '1px solid var(--line-soft)', color: 'var(--text-dim)' }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor-hover
                    className="flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium"
                    style={{ background: 'var(--color-brass)', color: '#0a0d12' }}
                  >
                    <GithubIcon size={16} /> View repository
                  </a>
                ) : (
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor-hover
                    className="flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium"
                    style={{ border: '1px solid var(--line)', color: 'var(--text-primary)' }}
                  >
                    <GithubIcon size={16} /> Repo not listed — view GitHub profile
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Section({ title, body }) {
  return (
    <div className="mt-6">
      <h4 className="font-(family-name:--font-mono) text-xs uppercase tracking-wide" style={{ color: 'var(--color-brass)' }}>
        {title}
      </h4>
      <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--text-dim)' }}>{body}</p>
    </div>
  );
}
