import { motion } from 'framer-motion';
import { skillGroups } from '../data/skills';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const card = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-28 lg:px-10">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-(family-name:--font-mono) text-sm"
        style={{ color: 'var(--color-brass)' }}
      >
        02 — Skills
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
        className="mt-3 mb-12 font-(family-name:--font-display) text-3xl font-semibold tracking-tight sm:text-4xl"
        style={{ color: 'var(--text-primary)' }}
      >
        Tools I reach for.
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {skillGroups.map((group) => (
          <motion.div
            key={group.id}
            variants={card}
            whileHover={{ y: -4, borderColor: 'var(--color-brass)' }}
            transition={{ duration: 0.25 }}
            className="group rounded-2xl p-6"
            style={{ background: 'var(--bg-surface)', border: '1px solid var(--line)' }}
          >
            <h3 className="font-(family-name:--font-display) text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
              {group.title}
            </h3>
            <p className="mt-1 text-sm" style={{ color: 'var(--text-faint)' }}>
              {group.blurb}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full px-3 py-1 text-xs transition-colors group-hover:text-(--color-brass)"
                  style={{ border: '1px solid var(--line-soft)', color: 'var(--text-dim)' }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
