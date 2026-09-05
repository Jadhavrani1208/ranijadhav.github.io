import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons';
import { profile } from '../data/socialLinks';

const links = [
  { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: profile.phone, href: `tel:${profile.phone.replace(/\s+/g, '')}` },
  { icon: GithubIcon, label: 'github.com/Jadhavrani1208', href: profile.github },
  { icon: LinkedinIcon, label: 'linkedin.com/in/rani-jadhav', href: profile.linkedin },
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-4xl px-6 py-28 lg:px-10">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center font-(family-name:--font-mono) text-sm"
        style={{ color: 'var(--color-brass)' }}
      >
        04 — Contact
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
        className="mt-3 text-center font-(family-name:--font-display) text-3xl font-semibold tracking-tight sm:text-4xl"
        style={{ color: 'var(--text-primary)' }}
      >
        Let's talk about a role.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="mx-auto mt-4 max-w-md text-center text-sm"
        style={{ color: 'var(--text-dim)' }}
      >
        I'm actively looking for entry-level Java / Spring Boot developer opportunities.
        The fastest way to reach me is email.
      </motion.p>

      <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {links.map((l, i) => (
          <motion.a
            key={l.label}
            href={l.href}
            target={l.href.startsWith('http') ? '_blank' : undefined}
            rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            data-cursor-hover
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="flex items-center gap-4 rounded-xl px-5 py-4"
            style={{ background: 'var(--bg-surface)', border: '1px solid var(--line)' }}
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full" style={{ background: 'var(--color-brass-bg, rgba(224,169,94,0.1))' }}>
              <l.icon size={18} style={{ color: 'var(--color-brass)' }} />
            </span>
            <span className="truncate text-sm" style={{ color: 'var(--text-primary)' }}>{l.label}</span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
