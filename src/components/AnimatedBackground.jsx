import { motion, useReducedMotion } from 'framer-motion';

export default function AnimatedBackground() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden transition-colors duration-500"
      style={{ background: 'var(--bg-base)' }}
    >
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(139,147,163,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(139,147,163,0.07) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />
      <motion.div
        className="absolute h-[560px] w-[560px] rounded-full blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(224,169,94,0.16), transparent 70%)' }}
        initial={{ top: '-10%', left: '10%' }}
        animate={
          prefersReducedMotion
            ? {}
            : {
                top: ['-10%', '20%', '-5%'],
                left: ['10%', '55%', '15%'],
              }
        }
        transition={{ duration: 34, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to bottom, transparent 0%, transparent 70%, var(--bg-base) 100%)' }}
      />
    </div>
  );
}
