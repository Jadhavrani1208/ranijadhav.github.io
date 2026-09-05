import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import ProjectArt from './ProjectArt';

export default function ProjectCard({ project, onOpen, index }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.45, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl transition-shadow duration-300"
      style={{ background: 'var(--bg-surface)', border: '1px solid var(--line)' }}
    >
      <div className="overflow-hidden">
        <ProjectArt
          id={project.id}
          className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
        />
      </div>

      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ boxShadow: 'inset 0 0 0 1px var(--color-brass)' }}
      />

      <div className="p-6">
        <h3 className="font-(family-name:--font-display) text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
          {project.name}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed" style={{ color: 'var(--text-dim)' }}>
          {project.tagline}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="rounded-full px-2.5 py-1 font-(family-name:--font-mono) text-[11px] transition-transform group-hover:-translate-y-0.5"
              style={{ border: '1px solid var(--line-soft)', color: 'var(--text-faint)' }}
            >
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="rounded-full px-2.5 py-1 font-(family-name:--font-mono) text-[11px]" style={{ color: 'var(--text-faint)' }}>
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        <div className="mt-6 flex items-center justify-between">
          <button
            onClick={() => onOpen(project)}
            data-cursor-hover
            className="flex items-center gap-1.5 text-sm font-medium transition-transform group-hover:translate-x-0.5"
            style={{ color: 'var(--color-brass)' }}
          >
            View details <ArrowUpRight size={15} />
          </button>

          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              data-cursor-hover
              aria-label={`${project.name} GitHub repository`}
              className="grid h-9 w-9 place-items-center rounded-full transition-colors"
              style={{ border: '1px solid var(--line)', color: 'var(--text-dim)' }}
            >
              <GithubIcon size={16} />
            </a>
          ) : (
            <span
              className="font-(family-name:--font-mono) text-[11px]"
              style={{ color: 'var(--text-faint)' }}
              title="No repository link provided on the resume for this project"
            >
              repo n/a
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
