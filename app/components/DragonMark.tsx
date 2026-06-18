/* Compact brand mark: a clean line-art flame with a coiled dragon tail.
   Uses currentColor so it inherits the crimson brand red. */
export default function DragonMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" fill="none">
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4 C 21 11, 24 15, 24 20 C 24 24.4, 20.4 28, 16 28 C 11.6 28, 8 24.4, 8 20 C 8 16, 11 13.5, 13 9.5 C 14 7.7, 15 6, 16 4 Z" />
        <path d="M16 14.5 C 18.8 18, 19 21, 16.5 23.5" opacity="0.8" />
        <path d="M9 22 C 6 23.5, 5.6 27, 8.4 28" opacity="0.7" />
      </g>
    </svg>
  );
}
