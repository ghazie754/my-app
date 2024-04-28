'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import React, { Suspense } from 'react';
import {
  CubeCamera,
  Html,
  OrbitControls,
  Scroll,
  ScrollControls,
  Svg,
  Text,
  useIntersect,
  useProgress,
} from '@react-three/drei';
import * as THREE from 'three';
const words = [
  'Hello',
  'Bonjour',
  'Ciao',
  'Olà',
  'やあ',
  'Hallå',
  'Guten tag',
  'Hallo',
];

const Loader = () => {
  const { active, progress, errors, item, loaded, total } = useProgress();
  return <Html center>{progress} % loaded</Html>;
};
export default function Home() {
  const [scrollPos, setScrollPos] = React.useState(0);
  const canvasRef = React.useRef<any>();
  React.useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
  }, []);
  return (
    <>
      <Canvas
        ref={canvasRef}
        orthographic
        camera={{ zoom: 80 }}
        gl={{ alpha: false, antialias: false, stencil: false, depth: false }}
        dpr={[1, 1.5]}
      >
        <color attach='background' args={['#f0fdf0']} />
        <ScrollControls pages={6}>
          <Scroll html style={{ width: '100%' }}>
            hi
          </Scroll>
        </ScrollControls>
      </Canvas>
    </>
  );
}
