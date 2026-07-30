import type { Variants, Transition, Easing } from 'motion/react'

export const ease: Easing = [0.16, 1, 0.3, 1]

export const durations = {
  micro: 0.15,
  standard: 0.3,
  reveal: 0.8,
  page: 0.6,
} as const

export const transitions = {
  micro: { duration: durations.micro, ease } as Transition,
  standard: { duration: durations.standard, ease: ease as Transition['ease'] } as Transition,
  reveal: { duration: durations.reveal, ease: ease as Transition['ease'] } as Transition,
  page: { duration: durations.page, ease: ease as Transition['ease'] } as Transition,
  spring: { type: 'spring', stiffness: 400, damping: 30 } as Transition,
  springSoft: { type: 'spring', stiffness: 300, damping: 25 } as Transition,
}

export const revealVariants: Variants = {
  hidden: { opacity: 0, y: 24, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0)',
    transition: { duration: durations.reveal, ease: ease as Transition['ease'] } as Transition,
  },
}

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: durations.reveal, ease: ease as Transition['ease'] },
  },
}

export const fadeVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: transitions.standard },
  exit: { opacity: 0, transition: transitions.micro },
}

export const slideUpVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: transitions.standard },
  exit: { opacity: 0, y: -16, transition: transitions.micro },
}

export const scaleVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: transitions.spring },
  exit: { opacity: 0, scale: 0.96, transition: transitions.micro },
}

export const cardHoverVariants = {
  rest: { y: 0, scale: 1, boxShadow: 'var(--shadow-sm)' },
  hover: {
    y: -8,
    scale: 1.01,
    boxShadow: 'var(--shadow-xl)',
    transition: transitions.standard,
  },
  tap: { scale: 0.99 },
}

export const buttonVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.02, y: -1, transition: transitions.micro },
  tap: { scale: 0.98, transition: { duration: 0.05 } },
}

export const iconButtonVariants = {
  rest: { scale: 1, rotate: 0 },
  hover: { scale: 1.1, rotate: 6, transition: transitions.spring },
  tap: { scale: 0.95, transition: { duration: 0.05 } },
}

export const dropdownVariants: Variants = {
  hidden: { opacity: 0, y: 8, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: transitions.standard },
  exit: { opacity: 0, y: 8, scale: 0.98, transition: transitions.micro },
}

export const navIndicatorVariants = {
  transition: { type: 'spring', stiffness: 500, damping: 30 },
}

export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: transitions.page },
  exit: { opacity: 0, y: -20, transition: transitions.micro },
}

export const listVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
}

export const listItemVariants: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: transitions.standard },
}