import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { projects, projectFilters } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [openProject, setOpenProject] = useState(null);

  const filtered = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.categories.includes(filter))),
    [filter]
  );

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-28 lg:px-10">
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-(family-name:--font-mono) text-sm"
            style={{ color: 'var(--color-brass)' }}
          >
            03 — Projects
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="mt-3 font-(family-name:--font-display) text-3xl font-semibold tracking-tight sm:text-4xl"
            style={{ color: 'var(--text-primary)' }}
          >
            Things I've built.
          </motion.h2>
        </div>

        <div className="flex flex-wrap gap-2">
          {projectFilters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              data-cursor-hover
              className="rounded-full px-4 py-2 text-sm transition-colors"
              style={
                filter === f
                  ? { background: 'var(--color-brass)', color: '#0a0d12' }
                  : { border: '1px solid var(--line)', color: 'var(--text-dim)' }
              }
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <motion.div layout className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} onOpen={setOpenProject} />
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="mt-12 text-center text-sm" style={{ color: 'var(--text-faint)' }}>
          No projects in this category yet.
        </p>
      )}

      <ProjectModal project={openProject} onClose={() => setOpenProject(null)} />
    </section>
  );
}
