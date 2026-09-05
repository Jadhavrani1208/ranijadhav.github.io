import { motion } from 'framer-motion';
import { GraduationCap, Server, Target } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const facts = [
  {
    icon: GraduationCap,
    title: 'Currently',
    body: 'Pursuing an MCA at Savitribai Phule Pune University, expected 2026.',
  },
  {
    icon: Server,
    title: 'Focus',
    body: 'Backend systems — Java, Spring Boot, REST APIs, and relational data with PostgreSQL and MySQL.',
  },
  {
    icon: Target,
    title: 'Looking for',
    body: 'An entry-level Java Developer or Software Developer role where I can keep building production APIs.',
  },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-28 lg:px-10">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr]"
      >
        <div>
          <p className="font-(family-name:--font-mono) text-sm" style={{ color: 'var(--color-brass)' }}>
            01 — About
          </p>
          <h2
            className="mt-3 font-(family-name:--font-display) text-3xl font-semibold tracking-tight sm:text-4xl"
            style={{ color: 'var(--text-primary)' }}
          >
            Backend-first, built on fundamentals.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed" style={{ color: 'var(--text-dim)' }}>
            I'm an MCA student and Java developer who likes the part of an application most people
            never see — the APIs, the auth, the data model. My projects so far cover
            registration and authentication flows, JWT-secured endpoints, and relational
            data with JPA/Hibernate, built with Spring Boot and PostgreSQL.
          </p>
          <p className="mt-4 max-w-md text-base leading-relaxed" style={{ color: 'var(--text-dim)' }}>
            Alongside Java, I use SQL, Python and JavaScript day to day, and I'm comfortable
            picking up React when a project needs a front end to go with the backend.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {facts.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`rounded-2xl p-6 ${i === 2 ? 'sm:col-span-2' : ''}`}
              style={{ background: 'var(--bg-surface)', border: '1px solid var(--line)' }}
            >
              <f.icon size={20} style={{ color: 'var(--color-brass)' }} />
              <h3 className="mt-4 font-(family-name:--font-display) text-base font-semibold" style={{ color: 'var(--text-primary)' }}>
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--text-dim)' }}>
                {f.body}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
