import { motion } from 'framer-motion';
import { FileDown, Eye } from 'lucide-react';
import { profile } from '../data/socialLinks';

export default function Resume() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center gap-6 rounded-2xl px-8 py-12 text-center"
        style={{ background: 'var(--bg-surface)', border: '1px solid var(--line)' }}
      >
        <h2 className="font-(family-name:--font-display) text-2xl font-semibold sm:text-3xl" style={{ color: 'var(--text-primary)' }}>
          Want the full picture?
        </h2>
        <p className="max-w-md text-sm" style={{ color: 'var(--text-dim)' }}>
          Everything above is drawn from my resume — here's the original document.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href={profile.resumeUrl}
            download
            data-cursor-hover
            className="flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5"
            style={{ background: 'var(--color-brass)', color: '#0a0d12' }}
          >
            <FileDown size={16} /> Download resume
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            className="flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5"
            style={{ border: '1px solid var(--line)', color: 'var(--text-primary)' }}
          >
            <Eye size={16} /> View resume
          </a>
        </div>
      </motion.div>
    </section>
  );
}
