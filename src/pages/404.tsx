import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Custom404 = () => {
  return (
    <Canvas
      // ref={canvasRef}
      orthographic
      camera={{ zoom: 80 }}
      gl={{ alpha: false, antialias: false, stencil: false, depth: false }}
      dpr={[1, 1.5]}
    >
      <color attach="background" args={["#f0fdf0"]} />
      <ScrollControls pages={6}>
        <Scroll html style={{ width: "100%" }}>
          <div>
            <h1>404</h1>
            <h3>Page Not Found</h3>
            <p>The page you are looking for doesn&apos;t exist.</p>
          </div>
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
};

export default Custom404;
