'use client';

import {motion} from 'motion/react';
import type {CSSProperties} from 'react';

export default function SubmitButton({children, style}: {children: React.ReactNode; style?: CSSProperties}) {
  return (
    <motion.button
      type="submit"
      style={style}
      whileHover={{backgroundColor: 'var(--signal-deep)', borderColor: 'var(--signal-deep)'}}
      whileTap={{scale: 0.98}}
    >
      {children}
    </motion.button>
  );
}
