import React from 'react';
import Footer from './footer';
import Hero from './hero';

export default function Layout({ children }: { children?: any }): JSX.Element {
  const canvasRef = React.useRef<HTMLCanvasElement | any>(undefined);
  const draw = (ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.arc(50, 100, 20, 0, 2 * Math.PI);
    ctx.fill();
  };
  React.useEffect(() => {
    const constext = canvasRef.current;
    const ctx = constext?.getContext('2d');
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
