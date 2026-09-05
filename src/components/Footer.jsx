import { profile } from '../data/socialLinks';

export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-6 py-10 lg:px-10" style={{ borderTop: '1px solid var(--line)' }}>
      <div className="flex flex-col items-center gap-3 pt-8 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="font-(family-name:--font-mono) text-xs" style={{ color: 'var(--text-faint)' }}>
          © {new Date().getFullYear()} {profile.name}. Built with React, Tailwind CSS and Framer Motion.
        </p>
        <p className="font-(family-name:--font-mono) text-xs" style={{ color: 'var(--text-faint)' }}>
          {profile.location}
        </p>
      </div>
    </footer>
  );
}
