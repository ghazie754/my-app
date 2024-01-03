import React from 'react';
import Footer from './footer';
import Hero from './hero';
import draw from './draw';

export default function Layout({ children }: { children?: any }): JSX.Element {
  const canvasRef = React.useRef<HTMLCanvasElement | any>(undefined);

  React.useEffect(() => {
    const constext = canvasRef.current;
    const ctx = constext.getContext('2d');
    draw(ctx);
  }, []);
  return (
    <>
      <Hero />
      {/* <!-- main --> */}
      <main>
        <canvas ref={canvasRef} tabIndex={0} className='canvas' />
        {children}
      </main>
      {/* <!-- end of section --> */}
      <Footer />
    </>
  );
}
