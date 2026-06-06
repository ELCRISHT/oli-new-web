import React, { createContext, useContext } from 'react';
import { motion, HTMLMotionProps, Variants } from 'framer-motion';

// Context to track if a ScrollReveal is nested inside a ScrollContainer
const ScrollContainerContext = createContext<boolean>(false);

export type AnimationType =
  | 'fade'
  | 'fade-up'
  | 'fade-down'
  | 'fade-left'
  | 'fade-right'
  | 'zoom-in'
  | 'scale-up';

export interface ScrollRevealProps extends HTMLMotionProps<'div'> {
  animation?: AnimationType;
  duration?: number;
  delay?: number;
  once?: boolean;
  margin?: string;
  ease?: any;
}

export interface ScrollContainerProps extends HTMLMotionProps<'div'> {
  staggerChildren?: number;
  once?: boolean;
  margin?: string;
}

const getVariants = (
  animation: AnimationType,
  duration: number,
  delay: number,
  ease?: any
): Variants => {
  const transition = {
    duration,
    delay,
    ease: ease || [0.16, 1, 0.3, 1], // easeOutExpo: premium corporate easing
  };

  switch (animation) {
    case 'fade-up':
      return {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition },
      };
    case 'fade-down':
      return {
        hidden: { opacity: 0, y: -30 },
        visible: { opacity: 1, y: 0, transition },
      };
    case 'fade-left':
      return {
        hidden: { opacity: 0, x: 30 },
        visible: { opacity: 1, x: 0, transition },
      };
    case 'fade-right':
      return {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0, transition },
      };
    case 'zoom-in':
      return {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1, transition },
      };
    case 'scale-up':
      return {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition },
      };
    case 'fade':
    default:
      return {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition },
      };
  }
};

/**
 * ScrollReveal Component
 * Animates its children when it scrolls into view.
 * If placed inside a ScrollContainer, its animation is staggered and controlled by the parent.
 */
export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  animation = 'fade-up',
  duration = 0.8,
  delay = 0,
  once = true,
  margin = '-10%',
  ease,
  ...props
}) => {
  const isInsideContainer = useContext(ScrollContainerContext);
  const variants = getVariants(animation, duration, delay, ease);

  if (isInsideContainer) {
    return (
      <motion.div variants={variants} {...props}>
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin }}
      variants={variants}
      {...props}
    >
      {children}
    </motion.div>
  );
};

/**
 * ScrollContainer Component
 * Serves as a parent wrapper that coordinates stagger delays for its nested ScrollReveal children.
 */
export const ScrollContainer: React.FC<ScrollContainerProps> = ({
  children,
  staggerChildren = 0.15,
  once = true,
  margin = '-10%',
  ...props
}) => {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren,
      },
    },
  };

  return (
    <ScrollContainerContext.Provider value={true}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once, margin }}
        variants={containerVariants}
        {...props}
      >
        {children}
      </motion.div>
    </ScrollContainerContext.Provider>
  );
};
