import React from 'react';
import { motion } from 'framer-motion';
import { anim, SVG, text } from './TransitionLayout';

export default function HomePageLoader({
  backgroundColor,
  children,
}:
  | { backgroundColor?: string; children?: React.ReactNode }
  | any): JSX.Element {
  const [dimensions, setDimensions] = React.useState<any>({
    width: null,
    height: null,
  });

  React.useEffect(() => {
    function resize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    resize();
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);
  return (
    <div
      className='page curve HomePageLoader'
      style={{ backgroundColor: backgroundColor }}
    >
      <div
        style={{ opacity: dimensions.width == null ? 1 : 0 }}
        className='background'
      />
      <motion.p className='route' {...anim(text)}>
        {children}
      </motion.p>
      {dimensions.width != null && <SVG {...dimensions} />}
    </div>
  );
}
