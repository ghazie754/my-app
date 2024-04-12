'use client';

import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { SVG } from './PageTransition';
import { anim, text, routes } from './TransitionLayout';
import Footer from './footer';
import Hero from './hero';
import Provider from './Provider';

export default function Layout({
  children,
  router,
}: { children: React.ReactNode } | any) {
  // const [state, dispatch] = React.useReducer(reducer, initialState);
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
    <AnimatePresence mode='wait'>
      <div className='curve HomePageLoader'>
        <div
          style={{ opacity: dimensions.width == null ? 1 : 0 }}
          className='background'
        />
        <motion.p className='route' {...anim(text)}>
          {routes[router.route]}
        </motion.p>
        {dimensions.width != null && <SVG {...dimensions} />}
        <Provider>
          <Hero />
          {/* <!-- sidebar --> */}
          {/* <aside className='sidebar' id='sidebar'>
            <div>
              <button id='close-btn' className='close-btn'>
                <i className='fas fa-times'></i>
              </button>
            </div>
          </aside> */}
          {/* <!-- end of sidebar --> */}
          {/* <!-- main --> */}
          <main>{children}</main>
          {/* <!-- end of main --> */}
          <Footer />
        </Provider>
      </div>
    </AnimatePresence>
  );
}
