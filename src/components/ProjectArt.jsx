// Decorative abstract patterns standing in for each project — the resume
// did not include screenshots, so these are not presented as real UI.
const PATTERNS = {
  skillmint: (
    <>
      <defs>
        <linearGradient id="g-skillmint" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e0a95e" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#6fbf9a" stopOpacity="0.5" />
        </linearGradient>
      </defs>
      <rect width="400" height="240" fill="#0d1117" />
      {Array.from({ length: 5 }).map((_, i) => (
        <rect key={i} x={24} y={24 + i * 38} width={i % 2 === 0 ? 320 : 220} height="18" rx="4" fill="url(#g-skillmint)" opacity={0.15 + i * 0.12} />
      ))}
      <circle cx="352" cy="40" r="14" fill="none" stroke="#e0a95e" strokeWidth="2" opacity="0.6" />
      <path d="M340 40 L352 52 L368 32" stroke="#6fbf9a" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  'flower-shop': (
    <>
      <defs>
        <linearGradient id="g-flower" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e0a95e" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#c9856f" stopOpacity="0.5" />
        </linearGradient>
      </defs>
      <rect width="400" height="240" fill="#0d1117" />
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${40 + i * 120},60)`}>
          <rect width="90" height="90" rx="10" fill="url(#g-flower)" opacity="0.18" />
          <circle cx="45" cy="36" r="16" fill="none" stroke="#e0a95e" strokeWidth="2" opacity="0.7" />
          <rect x="20" y="60" width="50" height="8" rx="4" fill="#8b93a3" opacity="0.5" />
        </g>
      ))}
    </>
  ),
  quiztube: (
    <>
      <defs>
        <linearGradient id="g-quiztube" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6fbf9a" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#e0a95e" stopOpacity="0.5" />
        </linearGradient>
      </defs>
      <rect width="400" height="240" fill="#0d1117" />
      <rect x="30" y="30" width="200" height="130" rx="10" fill="none" stroke="#30363d" strokeWidth="2" />
      <path d="M110 75 L160 95 L110 115 Z" fill="url(#g-quiztube)" />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x="250" y={35 + i * 24} width="120" height="10" rx="5" fill="#8b93a3" opacity={0.5 - i * 0.08} />
      ))}
    </>
  ),
};

export default function ProjectArt({ id, className = '' }) {
  return (
    <svg
      viewBox="0 0 400 240"
      className={className}
      role="img"
      aria-label="Abstract representative graphic for this project"
    >
      {PATTERNS[id] ?? PATTERNS.skillmint}
    </svg>
  );
}
