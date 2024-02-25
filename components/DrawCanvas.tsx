import React from 'react';

function draw(ctx: CanvasRenderingContext2D) {
  ctx.fillStyle = '#000000';
  ctx.beginPath();
  ctx.arc(50, 100, 20, 0, 2 * Math.PI);
  ctx.fill();
}
export default function DrawCanvas({
  children,
}: {
  children?: any;
}): JSX.Element {
  const canvasRef = React.useRef<HTMLCanvasElement | any>(undefined);
  React.useEffect(() => {
    const constext = canvasRef.current;
    const ctx = constext?.getContext('2d');
    draw(ctx);
  }, []);
  return (
    <div>
      <canvas ref={canvasRef} tabIndex={0} className='canvas' />
      {children}
    </div>
  );
}
