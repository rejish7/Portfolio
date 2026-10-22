/**
 * Apple-design motion primitives.
 *
 * Based on WWDC "Designing Fluid Interfaces":
 * - Default: critically damped springs (no overshoot)
 * - Reduced motion: cross-fade only
 * - Stagger: small sequential delays, never lock input
 */

import type { Transition } from "framer-motion";

/** Critically damped spring — no overshoot, graceful settle. */
export const spring: Transition = {
  type: "spring",
  bounce: 0,
  duration: 0.5,
};

/** Snappy entrance for small elements. */
export const springSnappy: Transition = {
  type: "spring",
  bounce: 0,
  duration: 0.35,
};

/** Entrance for cards / larger surfaces. */
export const springSurface: Transition = {
  type: "spring",
  bounce: 0,
  duration: 0.55,
};

/**
 * Standard fade-up entrance.
 * Starts from current on-screen value — interruptible by design.
 */
export const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: spring,
} as const;

/** Faster entrance for elements already near viewport. */
export const fadeInUpFast = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: springSnappy,
} as const;

/** Pure cross-fade — safe for reduced motion. */
export const fadeOnly = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.4, ease: "easeOut" },
} as const;

/**
 * Stagger delay helper — returns a transition for a given index.
 * Keep total stagger under ~300ms so it never feels slow.
 */
export function stagger(index: number, step = 0.04, base: Transition = spring): Transition {
  return { ...base, delay: index * step };
}
