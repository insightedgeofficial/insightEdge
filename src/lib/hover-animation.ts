'use client';

import { Transition } from "framer-motion";

/**
 * Shared Framer Motion hover pop animation configuration.
 * Scales elements to 1.03 - 1.05 with ~200ms ease-out transition.
 */
export const hoverPop = {
  whileHover: { scale: 1.04 },
  transition: { duration: 0.2, ease: "easeOut" } as Transition
};

export const hoverPopCard = {
  whileHover: { scale: 1.03 },
  transition: { duration: 0.2, ease: "easeOut" } as Transition
};
