'use client';

import {motion, type Variants} from 'motion/react';
import type {ReactNode} from 'react';
import {motionTags, type MotionTag} from './tags';
import useReducedMotionSSR from './useReducedMotionSSR';

type RevealProps = {
  as?: MotionTag;
  children: ReactNode;
  className?: string;
  id?: string;
  y?: number;
  delay?: number;
  duration?: number;
  once?: boolean;
};

export default function Reveal({
  as = 'div',
  children,
  className,
  id,
  y = 16,
  delay = 0,
  duration = 0.7,
  once = true,
}: RevealProps) {
  const reduce = useReducedMotionSSR();
  const Tag = motionTags[as];
  const variants: Variants = {
    hidden: {opacity: 0, y: reduce ? 0 : y},
    visible: {opacity: 1, y: 0, transition: {duration, delay, ease: [0.16, 1, 0.3, 1]}},
  };
  return (
    <Tag
      className={className}
      id={id}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{once, margin: '0px 0px -40px 0px'}}
    >
      {children}
    </Tag>
  );
}
